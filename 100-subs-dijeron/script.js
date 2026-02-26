import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeA9EY43KlROaNSHr8pCmppTB7Z4ryr9E",
  authDomain: "torre-pokemon.firebaseapp.com",
  databaseURL: "https://torre-pokemon-default-rtdb.firebaseio.com",
  projectId: "torre-pokemon",
  storageBucket: "torre-pokemon.firebasestorage.app",
  messagingSenderId: "263837690118",
  appId: "1:263837690118:web:3d3744fd30b5ccd1411687"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const juegoRef = ref(db, 'estadoJuego100SD');

const audioAcierto = new Audio('acierto.mp3'); 
const audioError = new Audio('error.mp3');     

let preguntas =[];
let indicePreguntaLocal = -1;
let triggerAnterior = 0; 
let respuestasReveladasAnterior =[];

fetch('database.json')
    .then(r => r.json())
    .then(data => { preguntas = data; iniciarApp(); })
    .catch(err => console.error(err));

function iniciarApp() {
    document.getElementById('btn-soy-presentador').addEventListener('click', () => {
        document.getElementById('pantalla-seleccion').classList.remove('activa');
        document.getElementById('pantalla-presentador').classList.add('activa');
        iniciarPanelPresentador();
    });

    document.getElementById('btn-soy-concursante').addEventListener('click', () => {
        document.getElementById('pantalla-seleccion').classList.remove('activa');
        document.getElementById('pantalla-concursante').classList.add('activa');
        
        document.getElementById('btn-activar-audio').addEventListener('click', () => {
            document.getElementById('overlay-audio').style.display = 'none';
            iniciarPantallaTV();
        });
    });
}

// ==========================================
// 🎙️ PRESENTADOR
// ==========================================
function iniciarPanelPresentador() {
    const selector = document.getElementById('admin-selector-pregunta');
    selector.innerHTML = '';
    preguntas.forEach((p, i) => {
        const option = document.createElement('option');
        option.value = i; option.text = `Pregunta ${i + 1}: ${p.pregunta}`;
        selector.appendChild(option);
    });

    selector.addEventListener('change', (e) => {
        actualizarFirebase({
            indicePregunta: parseInt(e.target.value),
            respuestasReveladas:[],
            erroresFijos: 0
        });
    });

    document.getElementById('admin-reset-puntos').addEventListener('click', () => actualizarFirebase({ puntosGlobales: 0 }));
    
    // Controles de Strike (Animación)
    document.querySelectorAll('.anim-btn').forEach(btn => {
        btn.addEventListener('click', (e) => lanzarStrike(e.target.getAttribute('data-strikes')));
    });

    // Controles de Error (Fijo)
    document.getElementById('btn-sumar-error').addEventListener('click', () => sumarErrorFijo());
    document.getElementById('btn-reset-errores').addEventListener('click', () => actualizarFirebase({ erroresFijos: 0 }));

    onValue(juegoRef, (snapshot) => {
        const estado = snapshot.val();
        if (estado) renderizarPanelAdmin(estado); else resetearPartida();
    });
}

function renderizarPanelAdmin(estado) {
    const indice = estado.indicePregunta || 0;
    const reveladas = estado.respuestasReveladas || [];
    const p = preguntas[indice];

    document.getElementById('admin-selector-pregunta').value = indice;
    document.getElementById('admin-texto-pregunta').innerText = p.pregunta;
    document.getElementById('admin-puntos').innerText = estado.puntosGlobales || 0;

    const divRespuestas = document.getElementById('admin-lista-respuestas');
    divRespuestas.innerHTML = '';

    p.respuestas.forEach((resp, i) => {
        const div = document.createElement('div');
        div.className = 'admin-fila-respuesta';
        const estaRevelada = reveladas.includes(i);
        
        div.innerHTML = `
            <div class="info-resp">
                <span class="texto-resp">${i + 1}. ${resp.respuesta}</span>
            </div>
            <button class="btn-pro ${estaRevelada ? 'btn-red' : 'btn-green'}" ${estaRevelada ? 'disabled' : ''}>
                ${estaRevelada ? 'Revelada' : 'REVELAR'}
            </button>
        `;

        if (!estaRevelada) {
            div.querySelector('button').addEventListener('click', () => revelarRespuesta(i, resp.puntos));
        }
        divRespuestas.appendChild(div);
    });
}

function revelarRespuesta(indiceRespuesta, puntosGanados) {
    get(juegoRef).then((snapshot) => {
        const est = snapshot.val();
        actualizarFirebase({
            respuestasReveladas:[...(est.respuestasReveladas || []), indiceRespuesta],
            puntosGlobales: (est.puntosGlobales || 0) + puntosGanados
        });
    });
}

function lanzarStrike(cantidad) {
    get(juegoRef).then((snapshot) => {
        const est = snapshot.val();
        actualizarFirebase({
            strikesActuales: parseInt(cantidad),
            triggerAnimacion: (est.triggerAnimacion || 0) + 1
        });
    });
}

function sumarErrorFijo() {
    get(juegoRef).then((snapshot) => {
        const est = snapshot.val();
        let errores = (est.erroresFijos || 0) + 1;
        if(errores > 3) errores = 3;
        actualizarFirebase({ erroresFijos: errores });
    });
}

function actualizarFirebase(datos) { get(juegoRef).then(s => set(juegoRef, { ...(s.val()||{}), ...datos })); }

function resetearPartida() {
    set(juegoRef, { indicePregunta: 0, respuestasReveladas:[], puntosGlobales: 0, strikesActuales: 0, triggerAnimacion: 0, erroresFijos: 0 });
}

// ==========================================
// 📺 CONCURSANTE (STREAM)
// ==========================================
function iniciarPantallaTV() {
    onValue(juegoRef, (snapshot) => {
        const estado = snapshot.val();
        if (estado) actualizarTV(estado);
    });
}

function actualizarTV(estado) {
    const indice = estado.indicePregunta || 0;
    const reveladas = estado.respuestasReveladas || [];
    const p = preguntas[indice];

    document.getElementById('tv-texto-pregunta').innerText = p.pregunta;
    animarMarcador('tv-puntos-totales', estado.puntosGlobales || 0);

    // 1. GESTIÓN DEL CONTADOR DE ERRORES FIJO
    const errores = estado.erroresFijos || 0;
    for(let i=1; i<=3; i++) {
        const box = document.getElementById(`sbox-${i}`);
        if(i <= errores) box.classList.add('activo');
        else box.classList.remove('activo');
    }

    // 2. ANIMACIÓN GIGANTE DE STRIKE
    if ((estado.triggerAnimacion || 0) > triggerAnterior) {
        mostrarStrikeGigante(estado.strikesActuales || 1);
        triggerAnterior = estado.triggerAnimacion;
    }

    // 3. SONIDO ACIERTO
    if (reveladas.length > respuestasReveladasAnterior.length) {
        audioAcierto.currentTime = 0; audioAcierto.play().catch(e=>console.log(e));
    }
    respuestasReveladasAnterior = reveladas;

    // 4. LÓGICA DE ACTUALIZACIÓN DEL DOM (CLAVE PARA ANIMACIONES 3D)
    const tablero = document.getElementById('tv-tablero');
    
    if (indicePreguntaLocal !== indice) {
        tablero.innerHTML = '';
        p.respuestas.forEach((resp, i) => {
            const carta = document.createElement('div');
            carta.className = 'carta';
            carta.id = `carta-${i}`;
            carta.style.setProperty('--i', i);
            
            carta.innerHTML = `
                <div class="carta-inner">
                    <div class="carta-front"><div class="numero-oculto">${i + 1}</div></div>
                    <div class="carta-back">
                        <div class="respuesta-texto">
                            ${resp.respuesta}
                            <span class="votos-texto">(${resp.votos} VOTOS)</span>
                        </div>
                        <div class="respuesta-puntos">${resp.puntos}</div>
                    </div>
                </div>
            `;
            tablero.appendChild(carta);
        });
        indicePreguntaLocal = indice;
    }

    p.respuestas.forEach((resp, i) => {
        const cartaDOM = document.getElementById(`carta-${i}`);
        if (cartaDOM) {
            if (reveladas.includes(i)) cartaDOM.classList.add('revelada');
            else cartaDOM.classList.remove('revelada');
        }
    });
}

function mostrarStrikeGigante(cantidad) {
    const overlay = document.getElementById('strike-overlay');
    const container = document.getElementById('strike-container');
    const pantalla = document.getElementById('pantalla-concursante');

    audioError.currentTime = 0; audioError.play().catch(e=>console.log(e));
    
    container.innerHTML = '❌'.repeat(cantidad);
    overlay.classList.remove('oculto');
    pantalla.classList.add('pantalla-shake');
    
    setTimeout(() => {
        overlay.classList.add('oculto');
        pantalla.classList.remove('pantalla-shake');
    }, 2000);
}

function animarMarcador(id, nuevoValor) {
    const el = document.getElementById(id);
    if(el.innerText !== nuevoValor.toString()) {
        el.innerText = nuevoValor;
        el.style.transform = "scale(1.5)";
        el.style.color = "#fff";
        setTimeout(() => {
            el.style.transform = "scale(1)";
            el.style.color = "var(--gold)";
        }, 300);
    }
}
// ==========================================
// CONFIGURACIÓN FIREBASE
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyAeA9EY43KlROaNSHr8pCmppTB7Z4ryr9E",
  authDomain: "torre-pokemon.firebaseapp.com",
  databaseURL: "https://torre-pokemon-default-rtdb.firebaseio.com",
  projectId: "torre-pokemon",
  storageBucket: "torre-pokemon.firebasestorage.app",
  messagingSenderId: "263837690118",
  appId: "1:263837690118:web:3d3744fd30b5ccd1411687"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const refGame = db.ref('partida/9pistas');
const refState = refGame.child('estado');
const refPlayers = refGame.child('jugadores');
const refConfig = refGame.child('config');

let miRol = '';
let pistasEnJuego = [];
let scoresLocales = {}; 
let pistasMostradasLocalmente = -1;
let primeraCargaPuntos = true; // Para evitar sonidos al entrar

// ==========================================
// INICIO
// ==========================================
function iniciarApp(rol) {
    miRol = rol;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('game-interface').classList.remove('hidden');

    if (rol === 'moderador') {
        document.getElementById('mod-panel').classList.remove('hidden');
        document.body.style.paddingBottom = "330px"; 
        generarInputsPistas();
    } else {
        document.getElementById('player-controls').classList.remove('hidden');
    }

    escucharFirebase();
    escucharTeclado();
}

function generarInputsPistas() {
    const div = document.getElementById('clues-inputs');
    div.innerHTML = '';
    for(let i=0; i<9; i++) {
        div.innerHTML += `<input type="text" id="input-clue-${i}" placeholder="Pista ${i+1}">`;
    }
}

// ==========================================
// ESCUCHAR FIREBASE
// ==========================================
function escucharFirebase() {
    refConfig.on('value', snap => {
        const num = snap.val() || 4;
        renderizarCamaras(num);
    });

    refState.on('value', snap => {
        const data = snap.val();
        if(!data) return;

        actualizarImagen(data.pokemonId, data.revelado);
        pistasEnJuego = data.pistas || [];
        
        const nuevasVisibles = data.pistasVisibles || 0;
        // Sonido de pista nueva
        if(nuevasVisibles > pistasMostradasLocalmente && nuevasVisibles > 0) {
            reproducirSonido('pista');
        }
        
        renderizarPistas(nuevasVisibles);
        pistasMostradasLocalmente = nuevasVisibles;

        manejarEstadoBuzzer(data.buzzerOwner);
    });

    refPlayers.on('value', snap => {
        const players = snap.val() || {};
        actualizarMarcadores(players);
        // Después de la primera carga, ya permitimos sonidos
        if(Object.keys(players).length > 0) primeraCargaPuntos = false;
    });
}

// ==========================================
// RENDERIZADO VISUAL
// ==========================================

function renderizarCamaras(num) {
    const container = document.getElementById('cameras-strip');
    container.className = `layout-${num}`;

    if(container.children.length === num) return;

    container.innerHTML = '';
    for(let i=1; i<=num; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'camera-box';
        wrapper.id = `wrapper-p${i}`;
        
        wrapper.innerHTML = `
            <div class="camera-hole"></div>
            <div class="score-tag">
                JUGADOR ${i} <span class="score-val" id="score-p${i}">0</span>
            </div>
        `;
        container.appendChild(wrapper);
    }
}

function actualizarImagen(id, revelado) {
    const container = document.getElementById('pokemon-image-container');
    
    if(revelado && id) {
        const idSinCeros = parseInt(id); 
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSinCeros}.png`;
        container.className = 'revealed-character';
        container.innerHTML = `<img src="${url}">`;
    } else {
        container.className = 'hidden-character';
        container.innerHTML = '<div class="pokeball-placeholder"><div class="pokeball-button"></div></div>';
    }
}

function renderizarPistas(visibles) {
    const container = document.getElementById('clues-list');
    
    if (visibles === 0) {
        container.innerHTML = '';
        for(let i=0; i<9; i++) {
            const div = document.createElement('div');
            div.className = 'clue-bar';
            div.innerText = `${i+1}. ???`;
            container.appendChild(div);
        }
        return;
    }

    const divs = container.children;
    if(divs.length === 0) {
        for(let i=0; i<9; i++) {
            const div = document.createElement('div');
            div.className = 'clue-bar';
            div.innerText = `${i+1}. ???`;
            container.appendChild(div);
        }
    }

    for(let i=0; i<visibles; i++) {
        const div = divs[i];
        const textoFinal = `${i+1}. ${pistasEnJuego[i] || "---"}`;
        
        if (!div.classList.contains('clue-revealed')) {
            div.className = 'clue-bar clue-revealed';
            div.innerText = ""; 
            typeWriter(div, textoFinal);
        } else {
            if(div.innerText !== textoFinal && !div.dataset.typing) {
                div.innerText = textoFinal;
            }
        }
    }
}

function typeWriter(element, text) {
    element.dataset.typing = "true";
    let i = 0;
    const speed = 20; 
    
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i+1) + '<span class="cursor-blink"></span>';
            i++;
            setTimeout(type, speed);
        } else {
            element.innerHTML = text; 
            element.dataset.typing = "false";
        }
    }
    type();
}

function actualizarMarcadores(players) {
    Object.keys(players).forEach(key => {
        const span = document.getElementById(`score-${key}`);
        if(span) {
            const nuevoScore = players[key].score || 0;
            // Si no existe score local, asumimos que es el inicial
            const anteriorScore = (scoresLocales[key] !== undefined) ? scoresLocales[key] : nuevoScore;
            
            // Detectar cambio
            if(nuevoScore !== anteriorScore) {
                const diff = nuevoScore - anteriorScore;
                mostrarAnimacionPuntos(key, diff);
                
                // 🔥 AQUÍ SUENAN LOS SONIDOS 🔥
                // Solo si no es la carga inicial de la página
                if (!primeraCargaPuntos) {
                    if (diff > 0) reproducirSonido('correct');
                    if (diff < 0) reproducirSonido('incorrect');
                }
            }
            
            span.innerText = nuevoScore;
            scoresLocales[key] = nuevoScore; 
        }
    });
}

function mostrarAnimacionPuntos(jugador, diferencia) {
    const wrapper = document.getElementById(`wrapper-${jugador}`);
    if(!wrapper) return;

    const animDiv = document.createElement('div');
    animDiv.className = 'floating-points ' + (diferencia > 0 ? 'p-plus' : 'p-minus');
    animDiv.innerText = diferencia > 0 ? `+${diferencia}` : diferencia;
    wrapper.appendChild(animDiv);
    setTimeout(() => { animDiv.remove(); }, 1500);
}

function manejarEstadoBuzzer(owner) {
    const btn = document.getElementById('btn-buzzer');
    const status = document.getElementById('buzzer-status');
    const modPanel = document.getElementById('mod-buzzer-control');
    const nameSpan = document.getElementById('buzzer-player-name');

    document.querySelectorAll('.camera-box').forEach(c => c.classList.remove('active-turn'));

    if (owner) {
        btn.disabled = true;
        status.innerText = `TURNO: ${owner.toUpperCase()}`;
        status.style.color = "#ff5555";
        
        const wrapper = document.getElementById(`wrapper-${owner}`);
        if(wrapper) wrapper.classList.add('active-turn');

        if(window.lastBuzzerOwner !== owner) {
            reproducirSonido('buzzer');
        }

        if(miRol === 'moderador') {
            modPanel.classList.remove('hidden');
            nameSpan.innerText = owner.toUpperCase();
        }
    } else {
        btn.disabled = false;
        status.innerText = "¡PRESIONA SI LO SABES!";
        status.style.color = "#ffcc00";
        if(miRol === 'moderador') modPanel.classList.add('hidden');
    }
    window.lastBuzzerOwner = owner;
}

// ==========================================
// ACCIONES
// ==========================================

function pulsarBoton() {
    if (miRol === 'moderador') return;
    refState.child('buzzerOwner').transaction(current => current === null ? miRol : undefined);
}

function escucharTeclado() {
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;
        if (e.code === 'Space' && !document.getElementById('btn-buzzer').disabled) {
            e.preventDefault();
            pulsarBoton();
        }
    });
}

// ==========================================
// MODERADOR
// ==========================================

function configurarPartida() {
    const num = document.getElementById('num-players-select').value;
    refConfig.set(parseInt(num));
    showToast("Cámaras actualizadas");
}

function cargarDatosPokemon() {
    const nombre = document.getElementById('poke-search').value.toLowerCase();
    const encontrado = pokemonDB.find(p => p.name.toLowerCase() === nombre);
    
    if(!encontrado) { showToast("Pokémon no encontrado"); return; }
    
    window.tempPokemonId = encontrado.id;
    for(let i=0; i<9; i++) document.getElementById(`input-clue-${i}`).value = `Dato ${i+1}`;
    showToast(`Cargado: ${encontrado.name}`);
}

function iniciarRonda() {
    if(!window.tempPokemonId) { showToast("Carga un Pokémon primero"); return; }
    
    const nuevasPistas = [];
    for(let i=0; i<9; i++) {
        const val = document.getElementById(`input-clue-${i}`).value;
        nuevasPistas.push(val || "...");
    }

    refState.set({
        pokemonId: window.tempPokemonId,
        pistas: nuevasPistas,
        pistasVisibles: 0,
        revelado: false,
        buzzerOwner: null
    });
    showToast("¡Ronda Iniciada!");
}

function revelarSiguientePista() {
    refState.child('pistasVisibles').transaction(curr => {
        if((curr || 0) < 9) return (curr || 0) + 1;
        return curr;
    });
}

function revelarImagen() {
    refState.child('revelado').set(true);
}

function validarRespuesta(esCorrecta) {
    refState.once('value').then(snap => {
        const data = snap.val();
        const jugador = data.buzzerOwner;
        const pistasVistas = data.pistasVisibles || 0;

        if(!jugador) return;

        // AQUÍ YA NO PONEMOS SONIDOS, SOLO ACTUALIZAMOS LA BASE DE DATOS
        // Los sonidos suenan automáticamente en 'actualizarMarcadores' al detectar el cambio
        if (esCorrecta) {
            let puntos = 1;
            if (pistasVistas <= 3) puntos = 3;
            else if (pistasVistas <= 6) puntos = 2;
            
            refPlayers.child(`${jugador}/score`).transaction(s => (s||0) + puntos);
            revelarImagen();
            refState.child('buzzerOwner').set(null); 
        } else {
            refPlayers.child(`${jugador}/score`).transaction(s => (s||0) - 1);
            refState.child('buzzerOwner').set(null);
        }
    });
}

function confirmarReinicio() {
    showModal("REINICIAR", "¿Poner puntos a cero?", () => {
        refConfig.once('value').then(s => {
            const num = s.val() || 4;
            const playersData = {};
            for(let i=1; i<=num; i++) playersData[`p${i}`] = { score: 0 };
            refPlayers.set(playersData);
            scoresLocales = {};
            primeraCargaPuntos = true; // Reiniciar flag de sonidos
        });
        showToast("Puntos reiniciados");
    });
}

function reproducirSonido(tipo) {
    const audio = document.getElementById(`audio-${tipo}`);
    if(audio) {
        if(tipo === 'buzzer') audio.volume = 0.3;
        else audio.volume = 1.0;

        audio.currentTime = 0;
        audio.play().catch(()=>{});
    }
}

// Utils
function showToast(msg) {
    const t = document.getElementById('custom-toast');
    t.innerText = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 3000);
}

function showModal(title, msg, onYes) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-msg').innerText = msg;
    const btnYes = document.getElementById('modal-btn-yes');
    btnYes.onclick = () => { onYes(); cerrarModal(); };
    modal.classList.remove('hidden');
}

function cerrarModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

(function cargarAutocompletado() {
    const dl = document.getElementById('lista-pokemon');
    dl.innerHTML = '';
    if (typeof pokemonDB !== 'undefined') {
        pokemonDB.forEach(poke => {
            const op = document.createElement('option');
            op.value = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
            dl.appendChild(op);
        });
    }
})();
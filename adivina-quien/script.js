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

const refGame = db.ref('partida/adivina_quien'); 
const refBoard = refGame.child('tablero');   
const refTargets = refGame.child('targets'); 
const refStates = refGame.child('estados');  

let miRol = ''; 

// ==========================================
// INICIO
// ==========================================
function iniciarApp(rol) {
    miRol = rol;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');

    // Manejo de Cámaras
    const cam1 = document.getElementById('cam-p1');
    const cam2 = document.getElementById('cam-p2');

    if (rol === 'moderador') {
        document.getElementById('mod-panel').classList.remove('hidden');
        document.body.style.paddingBottom = "250px"; // Espacio para scroll
        // Ocultar cámaras al moderador
        cam1.classList.add('hidden-cam');
        cam2.classList.add('hidden-cam');
    } else {
        document.body.style.paddingBottom = "50px";
        // Mostrar cámaras a jugadores
        cam1.classList.remove('hidden-cam');
        cam2.classList.remove('hidden-cam');
    }

    const labelP1 = document.getElementById('label-p1');
    const labelP2 = document.getElementById('label-p2');

    if(rol === 'jugador1') labelP1.style.color = "#3b4cca"; 
    if(rol === 'jugador2') labelP2.style.color = "#ff5555"; 

    escucharCambios();
}

// ==========================================
// ESCUCHAR FIREBASE
// ==========================================
function escucharCambios() {
    refBoard.on('value', snapshot => {
        const lista = snapshot.val() || {};
        renderizarTablero(lista);
        document.getElementById('counter').innerText = Object.keys(lista).length;
    });

    refStates.on('value', snapshot => {
        const estados = snapshot.val() || { p1: {}, p2: {} };
        aplicarEliminados('board-p1', estados.p1 || {});
        aplicarEliminados('board-p2', estados.p2 || {});
    });

    refTargets.on('value', snapshot => {
        const targets = snapshot.val() || {};
        renderizarSecreto('target-p1', targets.p1);
        renderizarSecreto('target-p2', targets.p2);
    });
}

// ==========================================
// RENDERIZADO
// ==========================================

function renderizarTablero(listaPokemon) {
    const contenedorP1 = document.getElementById('board-p1');
    const contenedorP2 = document.getElementById('board-p2');

    contenedorP1.innerHTML = '';
    contenedorP2.innerHTML = '';

    Object.entries(listaPokemon).forEach(([key, item]) => {
        const carta1 = crearCartaHTML(key, item, 'jugador1');
        contenedorP1.appendChild(carta1);

        const carta2 = crearCartaHTML(key, item, 'jugador2');
        contenedorP2.appendChild(carta2);
    });
}

function crearCartaHTML(key, item, duenoTablero) {
    const div = document.createElement('div');
    div.className = 'poke-card';
    div.dataset.id = key; 
    
    const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${item.id}/`;
    let imgUrl = item.formId 
        ? `${repoBase}${item.formId}/${item.emotion}.png` 
        : `${repoBase}${item.emotion}.png`;

    div.innerHTML = `<img src="${imgUrl}" draggable="false">`;

    div.onclick = () => {
        if (miRol === duenoTablero) {
            toggleEliminacion(duenoTablero, key);
        }
    };
    
    if (miRol === duenoTablero) div.style.cursor = "pointer";
    else div.style.cursor = "default";

    return div;
}

function aplicarEliminados(boardId, listaEliminados) {
    const contenedor = document.getElementById(boardId);
    const cartas = contenedor.querySelectorAll('.poke-card');

    cartas.forEach(carta => {
        const id = carta.dataset.id;
        const estabaEliminado = carta.classList.contains('eliminated');
        const estaEliminadoAhora = !!listaEliminados[id];

        if (estaEliminadoAhora && !estabaEliminado) {
            carta.style.animation = 'flipOut 0.2s forwards';
            setTimeout(() => {
                carta.classList.add('eliminated');
                carta.style.animation = 'flipIn 0.2s forwards';
                reproducirSonido('eliminated');
            }, 200);
        } else if (!estaEliminadoAhora && estabaEliminado) {
            carta.classList.remove('eliminated');
            carta.style.animation = 'popIn 0.3s';
            reproducirSonido('restore');
        }
    });
}

function renderizarSecreto(elementId, data) {
    const el = document.getElementById(elementId);
    
    // CASO 1: HUECO VACÍO
    if (!data) {
        el.className = 'poke-card secret-hidden';
        el.innerHTML = '<span class="secret-question">?</span>';
        return;
    }

    // CASO 2: ASIGNADO PERO OCULTO
    if (!data.revealed) {
        el.className = 'poke-card secret-hidden assigned';
        el.innerHTML = '<span class="secret-question">?</span>';
        return;
    }

    // CASO 3: REVELADO
    const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${data.id}/`;
    let imgUrl = data.formId 
        ? `${repoBase}${data.formId}/${data.emotion}.png` 
        : `${repoBase}${data.emotion}.png`;

    el.className = 'poke-card secret-revealed';
    el.innerHTML = `<img src="${imgUrl}">`;
}

// ==========================================
// LÓGICA DE JUEGO
// ==========================================

function toggleEliminacion(jugador, idCarta) {
    const jugadorKey = jugador === 'jugador1' ? 'p1' : 'p2';
    const refItem = refStates.child(`${jugadorKey}/${idCarta}`);

    refItem.once('value').then(snapshot => {
        if (snapshot.exists()) {
            refItem.remove(); 
        } else {
            refItem.set(true); 
        }
    });
}

function reproducirSonido(tipo) {
    const audio = document.getElementById(`audio-${tipo}`);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => {});
    }
}

// ==========================================
// ACCIONES MODERADOR
// ==========================================

function agregarAlTablero() {
    const input = document.getElementById('poke-search-board');
    const nombre = input.value.trim().toLowerCase();
    
    refBoard.once('value').then(snapshot => {
        if (snapshot.numChildren() >= 25) {
            alert("¡El tablero ya tiene 25 Pokémon!");
            return;
        }

        const encontrado = pokemonDB.find(p => p.name.toLowerCase() === nombre);
        if (encontrado) {
            refBoard.push({
                name: encontrado.name,
                id: encontrado.id,
                formId: encontrado.formId || null,
                emotion: 'Normal' 
            });
            input.value = '';
        } else {
            alert("Pokémon no encontrado");
        }
    });
}

function asignarSecreto(jugadorNum) {
    const input = document.getElementById('poke-search-target');
    const nombre = input.value.trim().toLowerCase();
    
    if(!nombre) return;

    const encontrado = pokemonDB.find(p => p.name.toLowerCase() === nombre);
    
    if (encontrado) {
        const targetData = {
            name: encontrado.name,
            id: encontrado.id,
            formId: encontrado.formId || null,
            emotion: 'Normal',
            revealed: false
        };
        const key = jugadorNum === 1 ? 'p1' : 'p2';
        refTargets.child(key).set(targetData);
        input.value = '';
        alert(`✅ Objetivo J${jugadorNum} asignado.`);
    } else {
        alert("❌ Pokémon no encontrado.");
    }
}

function revelar(jugadorNum) {
    const key = jugadorNum === 1 ? 'p1' : 'p2';
    refTargets.child(`${key}/revealed`).set(true);
}

function reiniciarJuego() {
    if(confirm("¿BORRAR TODO? Se limpiarán tableros y secretos.")) {
        refGame.remove(); 
    }
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

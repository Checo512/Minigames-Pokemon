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
const refGame = db.ref('partida/asociacion'); 

let miRol = ''; 
let localState = {}; 

// ==========================================
// INICIO Y ROLES
// ==========================================
function iniciarLogin(rol) {
    miRol = rol;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('game-ui').classList.remove('hidden');

    refGame.on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
            localState = data;
            actualizarInterfaz(data);
        } else {
            if (miRol === 'jugador1') resetearPartida();
        }
    });
}

function resetearPartida() {
    refGame.set({
        turno: 'setup', 
        pensador: 'jugador1',
        adivinador: 'jugador2',
        secreto: null,
        campeon: { name: 'Pikachu', id: '0025', formId: null },
        retador: { name: 'Eevee', id: '0133', formId: null },
        esperandoAccion: 'pensador', 
        ganadorRonda: null 
    });
}

// ==========================================
// LÓGICA DE INTERFAZ
// ==========================================

function actualizarInterfaz(data) {
    const soyPensador = (miRol === data.pensador);
    const soyAdivinador = (miRol === data.adivinador);
    const estadoText = document.getElementById('status-text');
    const arena = document.querySelector('.battle-arena');

    // 1. GESTIÓN DE MODO SOLO (CENTRO)
    // Si estamos esperando que el adivinador escriba, el campeón se queda solo en el centro
    if (data.esperandoAccion === 'adivinador') {
        arena.classList.add('solo-mode');
    } else {
        arena.classList.remove('solo-mode');
    }

    // 2. RENDERIZADO DE CARTAS
    // Siempre mostramos al campeón. Al retador solo si NO estamos en 'solo-mode'
    if (data.esperandoAccion !== 'animando') {
        renderizarCarta('champion', data.campeon);
        
        if (data.esperandoAccion !== 'adivinador') {
            renderizarCarta('challenger', data.retador);
        }
        limpiarAnimaciones();
    }

    // 3. MODALES Y ESTADOS
    ocultarModales();

    if (data.turno === 'setup') {
        // Fase 1: Pensar
        if (soyPensador) {
            document.getElementById('modal-secret').classList.remove('hidden');
        } else {
            mostrarEspera(`EL RIVAL ESTÁ ELIGIENDO SU SECRETO...`);
        }
        estadoText.innerText = "PREPARANDO LA PARTIDA";

    } else if (data.turno === 'victoria') {
        // Fase Final: Victoria
        document.getElementById('modal-win').classList.remove('hidden');
        renderizarCartaDOM(document.getElementById('win-card'), data.secreto);
        document.getElementById('win-name').innerText = data.secreto.name;
        estadoText.innerText = "¡PARTIDA FINALIZADA!";

    } else if (data.turno === 'jugando') {
        
        if (data.esperandoAccion === 'pensador') {
            // TURNO DE ELEGIR
            estadoText.innerText = soyPensador ? "¡ELIGE AL MÁS PARECIDO!" : "EL RIVAL ESTÁ ELIGIENDO...";
            
            if (soyPensador) {
                document.body.classList.add('my-turn-choose');
            } else {
                document.body.classList.remove('my-turn-choose');
                mostrarEspera("ESPERANDO DECISIÓN...");
            }

        } else if (data.esperandoAccion === 'adivinador') {
            // TURNO DE PROPONER (Modo Solo activo)
            estadoText.innerText = soyAdivinador ? "¡TU TURNO DE PROPONER!" : "ESPERANDO NUEVO RETADOR...";
            document.body.classList.remove('my-turn-choose');
            
            if (soyAdivinador) {
                const modal = document.getElementById('modal-next');
                modal.classList.remove('hidden');
                document.getElementById('winner-announce').innerText = `GANÓ ${data.campeon.name}`;
                setTimeout(() => document.getElementById('input-next').focus(), 100);
            } else {
                mostrarEspera("ESPERANDO NUEVO RETADOR...");
            }

        } else if (data.esperandoAccion === 'animando') {
            // ANIMACIÓN
            document.body.classList.remove('my-turn-choose');
            estadoText.innerText = "¡BATALLA EN CURSO!";
            ejecutarAnimacionBatalla(data.ganadorRonda);
        }
    }
}

// ==========================================
// ACCIONES
// ==========================================

function fijarSecreto() {
    const input = document.getElementById('input-secret');
    const poke = buscarPokemon(input.value);
    if (!poke) { alert("Pokémon no encontrado"); return; }

    refGame.update({
        secreto: poke,
        turno: 'jugando',
        esperandoAccion: 'pensador'
    });
    input.value = '';
}

function seleccionarGanador(lado) {
    if (localState.esperandoAccion !== 'pensador') return;
    if (miRol !== localState.pensador) return;

    const ganador = lado === 'champion' ? localState.campeon : localState.retador;
    
    // Si acierta el secreto
    if (ganador.name === localState.secreto.name) {
        refGame.update({ turno: 'victoria' });
    } else {
        // Animación de golpe
        refGame.update({
            esperandoAccion: 'animando',
            ganadorRonda: lado
        });

        // Tras la animación, actualizar el tablero
        setTimeout(() => {
            // El ganador se convierte en el Campeón (posición izquierda/centro)
            // El retador se vacía temporalmente para que el campeón quede solo
            refGame.update({
                esperandoAccion: 'adivinador',
                ganadorRonda: null,
                campeon: ganador, 
                retador: { name: '???', id: '0' } 
            });
        }, 2000); 
    }
}

function enviarRetador() {
    const input = document.getElementById('input-next');
    const poke = buscarPokemon(input.value);
    
    if (!poke) { alert("Pokémon no encontrado"); return; }
    if (poke.name === localState.campeon.name) { alert("¡Ya está en la mesa!"); return; }

    // Al enviar, el modo solo se desactiva porque ya hay retador
    refGame.update({
        retador: poke,
        esperandoAccion: 'pensador'
    });
    input.value = '';
}

function siguienteRonda() {
    const nuevoPensador = (localState.pensador === 'jugador1') ? 'jugador2' : 'jugador1';
    const nuevoAdivinador = (localState.adivinador === 'jugador1') ? 'jugador2' : 'jugador1';

    refGame.set({
        turno: 'setup',
        pensador: nuevoPensador,
        adivinador: nuevoAdivinador,
        secreto: null,
        campeon: { name: 'Pikachu', id: '0025' },
        retador: { name: 'Eevee', id: '0133' },
        esperandoAccion: 'pensador',
        ganadorRonda: null
    });
}

// ==========================================
// RENDERIZADO Y UTILIDADES
// ==========================================

function renderizarCarta(idKey, pokeData) {
    const el = document.getElementById(`card-${idKey}`);
    const nameEl = document.getElementById(`name-${idKey}`);
    if (!pokeData) return;
    renderizarCartaDOM(el, pokeData);
    nameEl.innerText = pokeData.name;
}

function renderizarCartaDOM(container, pokeData) {
    const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pokeData.id}/`;
    let imgUrl = pokeData.formId 
        ? `${repoBase}${pokeData.formId}/Happy.png` 
        : `${repoBase}Happy.png`;
    
    let backupUrl = pokeData.formId 
        ? `${repoBase}${pokeData.formId}/Normal.png` 
        : `${repoBase}Normal.png`;

    container.innerHTML = `<img src="${imgUrl}" draggable="false" onerror="this.src='${backupUrl}'">`;
}

function ejecutarAnimacionBatalla(ladoGanador) {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');

    if (ladoGanador === 'champion') {
        elChamp.classList.add('anim-attack-right');
        setTimeout(() => elChall.classList.add('anim-fly-out-right'), 300);
    } else if (ladoGanador === 'challenger') {
        elChall.classList.add('anim-attack-left');
        setTimeout(() => elChamp.classList.add('anim-fly-out-left'), 300);
    }
}

function limpiarAnimaciones() {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');
    elChamp.className = 'fighter-container';
    elChall.className = 'fighter-container';
}

function ocultarModales() {
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
}

function mostrarEspera(msg) {
    const m = document.getElementById('modal-waiting');
    m.classList.remove('hidden');
    document.getElementById('waiting-msg').innerText = msg;
}

function buscarPokemon(nombre) {
    if (!nombre || typeof pokemonDB === 'undefined') return null;
    const limpio = nombre.trim().toLowerCase();
    return pokemonDB.find(p => p.name.toLowerCase() === limpio);
}

// Autocompletado
(function cargarAutocompletado() {
    setTimeout(() => {
        const dl = document.getElementById('lista-pokemon');
        if (dl && typeof pokemonDB !== 'undefined') {
            dl.innerHTML = '';
            pokemonDB.forEach(poke => {
                const op = document.createElement('option');
                op.value = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
                dl.appendChild(op);
            });
        }
    }, 1000);
})();
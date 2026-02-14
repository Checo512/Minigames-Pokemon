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
    playSound('sfx-select');
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('game-ui').classList.remove('hidden');

    refGame.on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
            // DETECTAR NUEVO RETADOR PARA ANIMACIÓN DE ENTRADA (SLIDE)
            // Si antes esperábamos al adivinador y ahora al pensador -> Entró alguien nuevo
            if (localState.esperandoAccion === 'adivinador' && data.esperandoAccion === 'pensador') {
                if (data.turno === 'jugando') {
                    // Renderizamos INMEDIATAMENTE para que la foto sea la nueva
                    actualizarCartasVisuales(data); 
                    animarEntradaRetador();
                }
            }
            
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
        ganadorRonda: null,
        tipoVictoria: null 
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

    // 1. RENDERIZADO DE CARTAS (Prioridad Alta)
    // Se ejecuta siempre para asegurar que la imagen es correcta
    actualizarCartasVisuales(data);

    // 2. MODO SOLO (CENTRO)
    // Solo activamos modo solo si NO estamos animando entrada
    if (data.esperandoAccion === 'adivinador' || data.turno === 'victoria') {
        arena.classList.add('solo-mode');
    } else {
        // Si estamos animando, quitamos el modo solo para que se vean los dos huecos
        if(!document.getElementById('container-champion').classList.contains('slide-center-to-left')){
             arena.classList.remove('solo-mode');
        }
    }

    // 3. LIMPIEZA DE ANIMACIONES VIEJAS
    if (data.esperandoAccion !== 'animando') {
        limpiarAnimacionesBatalla();
    }

    // 4. MODALES
    ocultarModales();

    if (data.turno === 'setup') {
        if (soyPensador) {
            document.getElementById('modal-secret').classList.remove('hidden');
        } else {
            mostrarEspera(`EL RIVAL ESTÁ ELIGIENDO SU SECRETO...`);
        }
        estadoText.innerText = "PREPARANDO LA PARTIDA";

    } else if (data.turno === 'victoria') {
        playSound('sfx-win');
        document.getElementById('modal-win').classList.remove('hidden');
        renderizarCartaDOM(document.getElementById('win-card'), data.secreto);
        document.getElementById('win-name').innerText = data.secreto.name;
        estadoText.innerText = "¡PARTIDA FINALIZADA!";

    } else if (data.turno === 'jugando') {
        
        if (data.esperandoAccion === 'pensador') {
            estadoText.innerText = soyPensador ? "¡ELIGE AL MÁS PARECIDO!" : "EL RIVAL ESTÁ ELIGIENDO...";
            
            if (soyPensador) {
                document.body.classList.add('my-turn-choose');
            } else {
                document.body.classList.remove('my-turn-choose');
                mostrarEspera("ESPERANDO DECISIÓN...");
            }

        } else if (data.esperandoAccion === 'adivinador') {
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
            document.body.classList.remove('my-turn-choose');
            estadoText.innerText = "¡BATALLA EN CURSO!";
            // Ejecutar animación visualmente
            ejecutarAnimacionBatalla(data.ganadorRonda, data.tipoVictoria);
        }
    }
}

// Nueva función separada para garantizar renderizado
function actualizarCartasVisuales(data) {
    if (data.turno === 'victoria') return; // No tocar en victoria
    renderizarCarta('champion', data.campeon);
    renderizarCarta('challenger', data.retador);
}

// ==========================================
// NUEVA ANIMACIÓN DE ENTRADA (SLIDE)
// ==========================================
function animarEntradaRetador() {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');
    const arena = document.querySelector('.battle-arena');

    // 1. Quitar modo solo inmediatamente para mostrar el hueco derecho
    arena.classList.remove('solo-mode');

    // 2. Aplicar clases de animación
    // Campeón: Estaba en el centro, se mueve a la izquierda
    elChamp.classList.add('slide-center-to-left');
    
    // Retador: Entra desde la derecha
    elChall.classList.add('slide-in-right');

    // 3. Sonido de aparición
    playSound('sfx-vs'); // O 'sfx-appear' si tienes uno suave

    // 4. Limpieza después de la animación
    setTimeout(() => {
        elChamp.classList.remove('slide-center-to-left');
        elChall.classList.remove('slide-in-right');
    }, 1000);
}

// ==========================================
// ACCIONES
// ==========================================

function fijarSecreto() {
    const input = document.getElementById('input-secret');
    const poke = buscarPokemon(input.value);
    if (!poke) { alert("Pokémon no encontrado"); return; }
    playSound('sfx-select');

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
    const esFinalSmash = (ganador.name === localState.secreto.name);
    
    refGame.update({
        esperandoAccion: 'animando',
        ganadorRonda: lado,
        tipoVictoria: esFinalSmash ? 'smash' : 'normal'
    });

    const duracionAnim = esFinalSmash ? 3500 : 800; 

    setTimeout(() => {
        if (esFinalSmash) {
            refGame.update({ turno: 'victoria' });
        } else {
            refGame.update({
                esperandoAccion: 'adivinador',
                ganadorRonda: null,
                campeon: ganador, 
                retador: { name: '???', id: '0' } 
            });
        }
    }, duracionAnim);
}

function enviarRetador() {
    const input = document.getElementById('input-next');
    const poke = buscarPokemon(input.value);
    
    if (!poke) { alert("Pokémon no encontrado"); return; }
    if (poke.name === localState.campeon.name) { alert("¡Ya está en la mesa!"); return; }
    playSound('sfx-select');

    refGame.update({
        retador: poke,
        esperandoAccion: 'pensador' 
    });
    input.value = '';
}

function siguienteRonda() {
    const nuevoPensador = (localState.pensador === 'jugador1') ? 'jugador2' : 'jugador1';
    const nuevoAdivinador = (localState.adivinador === 'jugador1') ? 'jugador2' : 'jugador1';
    playSound('sfx-select');

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
// RENDERIZADO Y ANIMACIONES DE COMBATE
// ==========================================

function renderizarCarta(idKey, pokeData) {
    const el = document.getElementById(`card-${idKey}`);
    const nameEl = document.getElementById(`name-${idKey}`);
    if (!pokeData || !el) return;
    renderizarCartaDOM(el, pokeData);
    if(nameEl) nameEl.innerText = pokeData.name;
}

function renderizarCartaDOM(container, pokeData) {
    const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pokeData.id}/`;
    let imgUrl = pokeData.formId ? `${repoBase}${pokeData.formId}/Happy.png` : `${repoBase}Happy.png`;
    let backupUrl = pokeData.formId ? `${repoBase}${pokeData.formId}/Normal.png` : `${repoBase}Normal.png`;
    
    // Evitar parpadeo si ya tiene la misma imagen
    const currentImg = container.querySelector('img');
    if (currentImg && currentImg.src === imgUrl) return;

    container.innerHTML = `<img src="${imgUrl}" draggable="false" onerror="this.src='${backupUrl}'">`;
}

function ejecutarAnimacionBatalla(ladoGanador, tipo) {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');
    const fxLayer = document.getElementById('fx-layer');
    const arena = document.querySelector('.battle-arena');

    const classRight = tipo === 'smash' ? 'anim-smash-right' : 'anim-attack-right';
    const classLeft = tipo === 'smash' ? 'anim-smash-left' : 'anim-attack-left';
    
    playSound(tipo === 'smash' ? 'sfx-smash' : 'sfx-hit');

    if (tipo === 'smash') {
        fxLayer.classList.add('dim-background');
        arena.classList.add('final-smash-zoom');
    }

    if (ladoGanador === 'champion') {
        elChamp.classList.add(classRight);
        const delayImpacto = tipo === 'smash' ? 2000 : 300;
        
        setTimeout(() => {
            elChall.classList.add('anim-fly-out-right');
            fxLayer.classList.add('flash-white'); 
            document.body.classList.add('screen-shake'); 
        }, delayImpacto);

    } else if (ladoGanador === 'challenger') {
        elChall.classList.add(classLeft);
        const delayImpacto = tipo === 'smash' ? 2000 : 300;

        setTimeout(() => {
            elChamp.classList.add('anim-fly-out-left');
            fxLayer.classList.add('flash-white');
            document.body.classList.add('screen-shake');
        }, delayImpacto);
    }

    setTimeout(() => {
        fxLayer.className = 'pointer-events-none';
        document.body.classList.remove('screen-shake');
        arena.classList.remove('final-smash-zoom');
    }, tipo === 'smash' ? 3500 : 800);
}

function limpiarAnimacionesBatalla() {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');
    
    // Removemos SOLO las clases de batalla, no las de entrada
    elChamp.classList.remove('anim-attack-right', 'anim-smash-right', 'anim-fly-out-left');
    elChall.classList.remove('anim-attack-left', 'anim-smash-left', 'anim-fly-out-right');
}

// ==========================================
// UTILIDADES
// ==========================================

function playSound(id) {
    const audio = document.getElementById(id);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => {});
    }
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
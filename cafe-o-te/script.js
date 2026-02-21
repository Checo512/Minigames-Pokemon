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
            // DETECTAR NUEVO RETADOR PARA ANIMACIÓN DE ENTRADA
            if (localState.esperandoAccion === 'adivinador' && data.esperandoAccion === 'pensador') {
                if (data.turno === 'jugando') {
                    actualizarCartasVisuales(data); 
                    animarEntradaRetador();
                }
            }
            localState = data;
            
            // Garantizar arrays vacíos si Firebase los borró
            if (!localState.historial) localState.historial = [];
            
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
        tipoVictoria: null,
        racha: 0,
        historial: [] 
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

    // 1. RENDERIZADO DE CARTAS
    actualizarCartasVisuales(data);
    actualizarRachaFuego(data.racha);

    // 2. MODO SOLO
    if (data.esperandoAccion === 'adivinador' || data.turno === 'victoria') {
        arena.classList.add('solo-mode');
    } else {
        if(!document.getElementById('container-champion').classList.contains('slide-center-to-left')){
             arena.classList.remove('solo-mode');
        }
    }

    // 3. LIMPIEZA
    if (data.esperandoAccion !== 'animando') {
        limpiarAnimacionesBatalla();
    }
    if (data.turno !== 'victoria') {
        document.getElementById('modal-win').classList.add('hidden');
    }

    // 4. LÓGICA DE LA CONSOLA RPG
    let consoleExpanded = false;
    let consolePrompt = "";

    if (data.turno === 'setup') {
        if (soyPensador) {
            consoleExpanded = true;
            consolePrompt = "¿QUÉ POKÉMON SERÁ EL OBJETIVO?";
        } 
        estadoText.innerText = "PREPARANDO LA PARTIDA";
        mostrarEsperaTexto(`EL RIVAL ESTÁ ELIGIENDO SU SECRETO`);

    } else if (data.turno === 'victoria') {
        playSound('sfx-win');
        document.getElementById('modal-win').classList.remove('hidden');
        renderizarCartaDOM(document.getElementById('win-card'), data.secreto);
        document.getElementById('win-name').innerText = data.secreto.name;
        estadoText.innerText = "¡PARTIDA FINALIZADA!";

    } else if (data.turno === 'jugando') {
        
        if (data.esperandoAccion === 'pensador') {
            estadoText.innerText = soyPensador ? "¡ELIGE AL MÁS PARECIDO!" : "EL RIVAL ESTÁ ELIGIENDO";
            
            if (soyPensador) {
                document.body.classList.add('my-turn-choose');
                mostrarEsperaTexto("SELECCIONA UNA CARTA");
            } else {
                document.body.classList.remove('my-turn-choose');
                mostrarEsperaTexto("ESPERANDO DECISIÓN");
            }

        } else if (data.esperandoAccion === 'adivinador') {
            estadoText.innerText = soyAdivinador ? "¡TU TURNO DE PROPONER!" : "ESPERANDO NUEVO RETADOR";
            document.body.classList.remove('my-turn-choose');
            
            if (soyAdivinador) {
                consoleExpanded = true;
                consolePrompt = "¿QUIÉN ES EL SIGUIENTE RETADOR?";
            } else {
                mostrarEsperaTexto("ESPERANDO NUEVO RETADOR");
            }

        } else if (data.esperandoAccion === 'animando') {
            document.body.classList.remove('my-turn-choose');
            estadoText.innerText = "¡BATALLA EN CURSO!";
            ejecutarAnimacionBatalla(data.ganadorRonda, data.tipoVictoria);
        }
    }

    toggleConsolaRPG(consoleExpanded, consolePrompt);
}

function actualizarCartasVisuales(data) {
    if (data.turno === 'victoria') return; 
    renderizarCarta('champion', data.campeon);
    renderizarCarta('challenger', data.retador);
}

// WIN STREAK Y FUEGO (MODIFICADO)
function actualizarRachaFuego(racha) {
    const card = document.getElementById('card-champion');
    const badge = document.getElementById('streak-badge');
    const valorRacha = racha || 0;
    
    // Limpiar clases
    for(let i=4; i<=10; i++) card.classList.remove('fire-level-' + i);

    if (valorRacha >= 4) {
        // AQUI ESTÁ EL CAMBIO: Solo muestra el número
        badge.innerText = `x${valorRacha}`; 
        badge.classList.remove('hidden');
        
        let visualLevel = Math.min(valorRacha, 10);
        card.classList.add('fire-level-' + visualLevel);
    } else {
        badge.classList.add('hidden');
    }
}

// ==========================================
// CONTROL DE LA CONSOLA RPG Y DROPDOWN
// ==========================================
function toggleConsolaRPG(expand, promptText) {
    const consoleEl = document.getElementById('rpg-console');
    const waitingArea = document.getElementById('console-waiting');
    const inputArea = document.getElementById('console-input-area');
    const inputField = document.getElementById('rpg-input');
    const promptEl = document.getElementById('console-prompt');
    
    if (expand) {
        consoleEl.classList.add('expanded');
        waitingArea.classList.add('hidden');
        inputArea.classList.remove('hidden');
        if(promptEl) promptEl.innerText = promptText;
        if (inputField.value === '') inputField.focus();
    } else {
        consoleEl.classList.remove('expanded');
        waitingArea.classList.remove('hidden');
        inputArea.classList.add('hidden');
        document.getElementById('custom-autocomplete').classList.add('hidden'); 
    }
}

function mostrarEsperaTexto(msg) {
    document.getElementById('waiting-msg').innerText = msg;
}

document.getElementById('rpg-input').addEventListener('input', function(e) {
    const val = this.value.trim().toLowerCase();
    const dropdown = document.getElementById('custom-autocomplete');
    dropdown.innerHTML = '';

    if (!val || typeof pokemonDB === 'undefined') {
        dropdown.classList.add('hidden');
        return;
    }

    const resultados = pokemonDB.filter(p => p.name.toLowerCase().startsWith(val)).slice(0, 6);
    
    if (resultados.length > 0) {
        dropdown.classList.remove('hidden');
        resultados.forEach(poke => {
            const li = document.createElement('li');
            li.innerText = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
            
            const historialSafe = localState.historial || [];
            if (historialSafe.includes(poke.name.toLowerCase())) {
                li.classList.add('used-poke');
                li.onclick = () => dispararRechazoInput();
            } else {
                li.onclick = () => {
                    this.value = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
                    dropdown.classList.add('hidden');
                    this.focus();
                };
            }
            dropdown.appendChild(li);
        });
    } else {
        dropdown.classList.add('hidden');
    }
});

document.addEventListener('click', function(e) {
    const inputArea = document.getElementById('console-input-area');
    if (inputArea && !inputArea.contains(e.target)) {
        document.getElementById('custom-autocomplete').classList.add('hidden');
    }
});

// ==========================================
// ACCIONES Y VALIDACIONES
// ==========================================
document.getElementById('btn-submit-poke').onclick = enviarPokemonDesdeConsola;
document.getElementById('rpg-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') enviarPokemonDesdeConsola();
});

function dispararRechazoInput() {
    playSound('sfx-error');
    const input = document.getElementById('rpg-input');
    const prompt = document.getElementById('console-prompt');
    const originalText = prompt.innerText;
    
    input.classList.add('rejection-shake');
    prompt.innerText = "¡ESTE POKÉMON YA FUE USADO!";
    prompt.style.color = "#e74c3c";
    
    setTimeout(() => {
        input.classList.remove('rejection-shake');
        prompt.innerText = originalText;
        prompt.style.color = "var(--poke-yellow)";
    }, 1500);
}

function enviarPokemonDesdeConsola() {
    const input = document.getElementById('rpg-input');
    const poke = buscarPokemon(input.value);
    
    if (!poke) { 
        alert("Pokémon no encontrado en la base de datos."); 
        return; 
    }

    if (localState.turno === 'setup') {
        playSound('sfx-select');
        refGame.update({
            secreto: poke,
            turno: 'jugando',
            esperandoAccion: 'pensador'
        });
    } else {
        const historialSafe = localState.historial || [];
        if (historialSafe.includes(poke.name.toLowerCase()) || poke.name === localState.campeon.name) {
            dispararRechazoInput();
            return;
        }

        playSound('sfx-select');
        historialSafe.push(poke.name.toLowerCase());
        
        refGame.update({
            retador: poke,
            historial: historialSafe,
            esperandoAccion: 'pensador' 
        });
    }
    input.value = ''; 
}

function seleccionarGanador(lado) {
    if (localState.esperandoAccion !== 'pensador') return;
    if (miRol !== localState.pensador) return;

    const ganador = lado === 'champion' ? localState.campeon : localState.retador;
    const esFinalSmash = (ganador.name === localState.secreto.name);
    
    let nuevaRacha = localState.racha || 0;
    if (lado === 'champion') {
        nuevaRacha += 1; 
    } else {
        nuevaRacha = 1; 
    }

    refGame.update({
        esperandoAccion: 'animando',
        ganadorRonda: lado,
        tipoVictoria: esFinalSmash ? 'smash' : 'normal',
        racha: nuevaRacha
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
        ganadorRonda: null,
        racha: 0,
        historial: []
    });
}

// ==========================================
// RENDERIZADO Y ANIMACIONES DE COMBATE
// ==========================================
function animarEntradaRetador() {
    const elChamp = document.getElementById('container-champion');
    const elChall = document.getElementById('container-challenger');
    const arena = document.querySelector('.battle-arena');

    arena.classList.remove('solo-mode');
    elChamp.classList.add('slide-center-to-left');
    elChall.classList.add('slide-in-right');
    playSound('sfx-vs');

    setTimeout(() => {
        elChamp.classList.remove('slide-center-to-left');
        elChall.classList.remove('slide-in-right');
    }, 1000);
}

function renderizarCarta(idKey, pokeData) {
    const el = document.getElementById(`card-${idKey}`);
    const nameEl = document.getElementById(`name-${idKey}`);
    if (!pokeData || !el) return;
    renderizarCartaDOM(el, pokeData);
    if(nameEl) nameEl.innerText = pokeData.name;
}

function renderizarCartaDOM(container, pokeData) {
    if (!pokeData || !pokeData.id) return;
    const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pokeData.id}/`;
    let imgUrl = pokeData.formId ? `${repoBase}${pokeData.formId}/Happy.png` : `${repoBase}Happy.png`;
    let backupUrl = pokeData.formId ? `${repoBase}${pokeData.formId}/Normal.png` : `${repoBase}Normal.png`;
    
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

function buscarPokemon(nombre) {
    if (!nombre || typeof pokemonDB === 'undefined') return null;
    const limpio = nombre.trim().toLowerCase();
    return pokemonDB.find(p => p.name.toLowerCase() === limpio);
}
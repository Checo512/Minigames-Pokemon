// ==========================================
// CONFIGURACIÓN DE FIREBASE
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

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const refJ1 = db.ref('partida/jugador1');
const refJ2 = db.ref('partida/jugador2');
const refTitulos = db.ref('partida/titulos');

let rolActual = 'espectador';
let envioPendiente = null; 
let borradoPendiente = null; 

// ==========================================
// INICIO
// ==========================================
function iniciarApp(rol) {
    rolActual = rol;
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-board').classList.remove('hidden');

    // Gestión visual de cámaras según rol
    if (rol === 'moderador') {
        document.getElementById('mod-panel').classList.remove('hidden');
        document.body.style.paddingBottom = "220px"; 
        // Agregamos clase para ocultar cámaras en vista moderador
        document.body.classList.add('mode-moderator');
    } else {
        // Asegurar que las cámaras se vean si no es mod
        document.body.classList.remove('mode-moderator');
    }
    
    escucharCambios();
}

function escucharCambios() {
    refJ1.on('value', (s) => renderizarTablaInteligente('grid-p1', s.val()));
    refJ2.on('value', (s) => renderizarTablaInteligente('grid-p2', s.val()));
    
    refTitulos.on('value', (s) => {
        const d = s.val();
        if(d) {
            actualizarTitulo('title-p1', d.p1);
            actualizarTitulo('title-p2', d.p2);
        }
    });
}

function actualizarTitulo(id, data) {
    const el = document.getElementById(id);
    if(data) {
        el.innerText = data.texto || "ATRIBUTO";
        data.visible ? el.classList.remove('blurred') : el.classList.add('blurred');
    }
}

// ==========================================
// RENDERIZADO INTELIGENTE (SONIDOS Y TIEMPOS AJUSTADOS)
// ==========================================
function renderizarTablaInteligente(elementId, data) {
    const contenedor = document.getElementById(elementId);

    // 1. Limpieza de elementos que ya no existen en la DB (Con animación POOF)
    const clavesNuevas = data ? Object.keys(data) : [];
    
    contenedor.querySelectorAll('.poke-card').forEach(card => {
        const cardKey = card.id.replace('card-', '');
        
        // Si la carta existe en el HTML pero ya no está en la DB, la borramos
        if (!clavesNuevas.includes(cardKey)) {
            // Si ya se está borrando, no hacemos nada
            if (card.classList.contains('poof-out')) return;

            // Agregamos animación de salida
            card.classList.add('poof-out');
            
            // Esperamos a que termine la animación para remover del DOM
            setTimeout(() => {
                card.remove();
            }, 500); // 500ms coincide con la duración en CSS
        }
    });

    if (!data) return;

    // 2. Agregar o actualizar
    Object.entries(data).forEach(([key, item]) => {
        const divId = `card-${key}`;
        
        // Solo entramos si es NUEVO (no existe en el HTML)
        if (!document.getElementById(divId)) {
            
            // --- FUNCIÓN VISUAL (CREAR TARJETA) ---
            const crearTarjetaVisualmente = () => {
                const div = document.createElement('div');
                div.id = divId; 
                const extraClass = item.status === 'gray' ? 'grayscale' : 'correct-border';
                
                // Si es moderador, agregamos clase 'deletable' para efectos CSS
                const modClass = rolActual === 'moderador' ? 'deletable' : '';
                
                div.className = `poke-card ${extraClass} ${modClass}`;
                
                // Base URL
                const repoBase = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${item.id}/`;
                let imageUrl = "";
                let backupUrl = "";

                if (item.isShiny) {
                    const formFolder = item.formId || "0000"; 
                    imageUrl = `${repoBase}${formFolder}/0001/${item.emotion}.png`;
                    backupUrl = `${repoBase}${formFolder}/0001/Normal.png`;
                } else {
                    if (item.formId) {
                        imageUrl = `${repoBase}${item.formId}/${item.emotion}.png`;
                        backupUrl = `${repoBase}${item.formId}/Normal.png`;
                    } else {
                        imageUrl = `${repoBase}${item.emotion}.png`;
                        backupUrl = `${repoBase}Normal.png`;
                    }
                }

                // Construcción del HTML interno
                let htmlContent = `<img src="${imageUrl}" alt="${item.name}" onerror="this.src='${backupUrl}'">`;

                // ** SOLO MODERADOR: Botón de borrar **
                if (rolActual === 'moderador') {
                    // Determinamos la ruta de Firebase basada en el ID del contenedor (grid-p1 o grid-p2)
                    const rutaDB = elementId === 'grid-p1' ? 'partida/jugador1' : 'partida/jugador2';
                    htmlContent += `
                        <div class="delete-btn" 
                             onclick="eliminarPokemonIndividual('${rutaDB}', '${key}')" 
                             title="Borrar este Pokémon">
                             ✕
                        </div>
                    `;
                }

                div.innerHTML = htmlContent;
                contenedor.appendChild(div);
                contenedor.scrollTop = contenedor.scrollHeight;
            };

            // --- LÓGICA DE SONIDO Y SINCRONIZACIÓN ---
            const esReciente = (Date.now() - item.timestamp) < 10000;
            let audioParaReproducir = null;
            let tiempoEspera = 0;

            if (esReciente) {
                if (item.status === 'gray') {
                    audioParaReproducir = document.getElementById('audio-incorrect');
                    tiempoEspera = 0; 
                } else {
                    audioParaReproducir = document.getElementById('audio-correct');
                    tiempoEspera = 300;
                }
            }

            if (audioParaReproducir) {
                audioParaReproducir.currentTime = 0; 
                audioParaReproducir.play().catch(e => console.log("Audio pendiente"));
                setTimeout(() => crearTarjetaVisualmente(), tiempoEspera); 
            } else {
                crearTarjetaVisualmente();
            }
        }
    });
}

// ==========================================
// MODAL DE CONFIRMACIÓN (ENVÍO)
// ==========================================
function verificarYPreguntar(jugadorNum) {
    const searchInput = document.getElementById('poke-search').value.toLowerCase().trim();
    const emotion = document.getElementById('poke-emotion').value;
    const isShiny = document.getElementById('poke-shiny').checked;

    if(!searchInput) return;

    const pokemonEncontrado = pokemonDB.find(p => p.name.toLowerCase() === searchInput);

    if (!pokemonEncontrado) {
        alert("Pokémon no encontrado. Usa la lista de sugerencias.");
        return;
    }

    envioPendiente = {
        name: pokemonEncontrado.name,
        id: pokemonEncontrado.id,
        formId: pokemonEncontrado.formId || null,
        emotion: emotion,
        isShiny: isShiny,
        jugador: jugadorNum,
        timestamp: Date.now()
    };

    let nombreMostrar = pokemonEncontrado.name.toUpperCase();
    if (isShiny) nombreMostrar += " ✨";

    document.getElementById('modal-poke-name').innerText = nombreMostrar;
    document.getElementById('modal-confirm').classList.remove('hidden');
}

function enviarDefinitivo(statusElegido) {
    if (!envioPendiente) return;
    envioPendiente.status = statusElegido;

    const refDestino = envioPendiente.jugador === 1 ? refJ1 : refJ2;
    refDestino.push(envioPendiente);

    cerrarModal();
    const input = document.getElementById('poke-search');
    input.value = '';
    input.focus();
    
    // Reiniciar checkbox shiny
    document.getElementById('poke-shiny').checked = false;

    envioPendiente = null;
}

function cerrarModal() {
    document.getElementById('modal-confirm').classList.add('hidden');
}

// ==========================================
// GESTIÓN DE BORRADO INDIVIDUAL
// ==========================================
function eliminarPokemonIndividual(ruta, key) {
    borradoPendiente = { ruta: ruta, key: key };
    document.getElementById('modal-delete').classList.remove('hidden');
}

function confirmarBorrado() {
    if (borradoPendiente) {
        db.ref(borradoPendiente.ruta).child(borradoPendiente.key).remove()
            .then(() => console.log("Borrado exitoso"))
            .catch(error => console.error("Error al borrar:", error));
    }
    cerrarModalBorrado();
}

function cerrarModalBorrado() {
    document.getElementById('modal-delete').classList.add('hidden');
    borradoPendiente = null;
}

// ==========================================
// UTILIDADES
// ==========================================
document.getElementById('btn-update-titles').addEventListener('click', () => {
    const t1 = document.getElementById('input-title-p1').value;
    const t2 = document.getElementById('input-title-p2').value;
    const v1 = document.getElementById('check-p1').checked;
    const v2 = document.getElementById('check-p2').checked;
    if(t1 && t2) {
        refTitulos.set({ p1: { texto: t1, visible: v1 }, p2: { texto: t2, visible: v2 } });
    } else {
        alert("Escribe ambos títulos.");
    }
});

function reiniciarTablero() {
    if(confirm("⚠ ATENCIÓN: Se borrará todo el tablero. ¿Continuar?")) {
        refJ1.remove(); refJ2.remove();
        refTitulos.set({ p1: { texto: "ATRIBUTO 1", visible: false }, p2: { texto: "ATRIBUTO 2", visible: false } });
    }
}

document.getElementById('poke-search').addEventListener("keypress", (e) => {
    if (e.key === "Enter") e.preventDefault();
});

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

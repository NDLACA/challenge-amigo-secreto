// Array - Lista nombres de participantes
let listaNombresAmigos = [];
let nombresSorteados = [];
let juegoIniciado = false; //para saber si el juego ya comenzo

// Llamo al elemto -amigo- por el ID del HTML, el trim es para eliminar espacios en blanco
// Si el cuadro de texto -input- esta vacío, me va a pedir que agregue un nombre
// Cuando se añada un nombre, lo va a agregar a -listaNombresAmigos-

function agregarAmigo() {
    let nombreAmigo = document.getElementById ("amigo").value.trim();
    if (nombreAmigo === "") {
        alert ("Por favor, ingresa un nombre");
    }
    else {
        listaNombresAmigos.push (nombreAmigo);
        actualizarLista();
        limpiarCaja();
    }
}
// Cada vez que se agregue un nombre, se sume a la lista en la página - HTML (visible)

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    listaNombresAmigos.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
    
}
// Cuando se agregó un nombre, se borre el espacio de texto y se pueda almacenar otro.

function limpiarCaja () {
    document.querySelector ("#amigo").value ="";
}

//Sortear amigo
function sortearAmigo () {
    // Si no hay ningún nombre en la lista, dar alerta para que agreguen
    if (listaNombresAmigos.length === 0) {
        alert ("¡No hay participantes! Agrega los nombres para sortear");
        return;
    } 
    
    //Solo validar mínimo 2 nombres al inicio del juego
    if (!juegoIniciado && listaNombresAmigos.length < 2) {
        alert ("Necesitamos al menos dos jugadores para sortear");
        return;
    }

    //Activar el inicio del juego
    juegoIniciado = true;

    // Generar indice sorteado (que escoja de la lista, la posición aleatoriamente)
    let indiceAleatorio = Math.floor (Math.random()*listaNombresAmigos.length);
    // Extrar nombre sorteado
    let amigoSorteado = listaNombresAmigos.splice (indiceAleatorio,1)[0];
    //Agregar el nombre sorteado a la lista de nombres sorteados
    nombresSorteados.push(amigoSorteado);
    // Mostrar en pantalla el nombre del amigo sorteado
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
    // Actualizar la lista visible sin el nombre sorteado
    actualizarLista();

    //Si ya se sortearon todos los nombres, mostrar mensaje
    if (listaNombresAmigos.length===0) {
        setTimeout(() => {
        alert ("Ya fueron sorteados todos los nombres!");
        reiniciarJuego (); //Llamada para reiniciar automanticamente
        }, 1000); //Retraso para que se vea primero el último nombre sorteado

    }  
}

// Reinicar el juego

function reiniciarJuego() {
    listaNombresAmigos = [];
    nombresSorteados = [];
    juegoIniciado = false;
    // Limpiar la lista en pantalla y el resultado
    actualizarLista();
    document.querySelector("#resultado").innerHTML = "";
    alert("¡Juego reiniciado! Agrega nuevos nombres para jugar otra ronda.");
}
    



    


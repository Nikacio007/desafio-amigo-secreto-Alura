let amigos = []; // Lista donde se almacenarán los nombres

// Función para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // limpiar campo de texto
    mostrarLista();
}

// Mostrar la lista en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a mostrar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

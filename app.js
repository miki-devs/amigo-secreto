let amigos = [];

function limpiarElemento() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.trim() === "") {
        alert("⚠️ Debe ingresar un nombre a la lista, no un campo vacío! ⚠️");
        return;
    } else {
        amigos.push(amigo);
        limpiarElemento();
    }
    agregarAmigosHTML();
}

function agregarAmigosHTML() {
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = amigos[index];
        listaAmigosHTML.appendChild(elementoLi);
    }
}

function sortearAmigo() {
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    document.getElementById('resultado').innerHTML = `El amigo secreto será: ${amigoSorteado}`;
}

    var amigosInsertados = []

function agregarAmigo() {
    let ObtenerAmigo = document.getElementById("amigo").value;
    if (ObtenerAmigo == '') {
        alert("Hey, ingresa un nombre válido.")
        return;
    } else {

    }
    LimpiarCelda()
        amigosInsertados.push(ObtenerAmigo);
    var contenido = "";
      amigosInsertados.forEach(e => {
        contenido += `<li>${e}</li>`
      });

    document.getElementById('listaAmigos').innerHTML = contenido;
}

function MostrarReiniciar() {
    let section = '<button class="button-restart" onclick="reiniciar()" aria-label="Reiniciar sorteo"><img src="assets/restart.png" width="14" alt="Reiniciar">Reiniciar</button>'
    document.getElementById('colocarReinicio').innerHTML = section;
}

function sortearAmigo() {
    var indiceAleatorio = Math.floor(Math.random() * amigosInsertados.length) 
    var amigoSalado = amigosInsertados[indiceAleatorio];
    document.getElementById('listaAmigos').innerText = "";
    if (amigoSalado == undefined) {
        document.getElementById('resultado').style.color = "red";
        document.getElementById('resultado').innerText = "No hay nadie para realizar un sorteo";
    } else {
        document.getElementById('resultado').style.color = "#05DF05";
document.getElementById('resultado').innerText = `Sorteado es: ${amigoSalado}`;
    }
    amigosInsertados = [];
    MostrarReiniciar();
}

function LimpiarCelda() {
    document.getElementById("amigo").value = "";
    document.getElementById('resultado').textContent = "";
}

amigoAgregado.addEventListener('input', function (event) {
    var botonHabilitar = document.getElementById('buttonAdd');
    if (event.currentTarget === "")
    botonHabilitar.disabled = true;
else botonHabilitar.disabled = false;
})

function reiniciar() {
    window.location.reload();
}
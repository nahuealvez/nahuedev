function respuestaEnvioContacto(event) {
    event.preventDefault();
    alert("Muchas gracias por contarte conmigo. Intentaré responderte lo antes posible. ¡Que tengas un buen día!");
    window.location.reload();
}

const formulario = document.getElementById("formularioEnvio");
formulario.addEventListener("submit", respuestaEnvioContacto);

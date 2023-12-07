document.addEventListener("DOMContentLoaded", function () {
    let nombre = document.getElementById("nombreForm");
    let apellido = document.getElementById("apellidoForm");
    let correo = document.getElementById("correoElectronico");
    let mensaje = document.getElementById("mensajeForm");
    let btnEnviar = document.querySelector(".btn-form");
    let alertValidaciones = document.getElementById("alertValidaciones");

    function validarEmail() {
        let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return re.test(correo.value);
    }

    function validarEnvio() {
        let isValid = true;
        alertValidaciones.innerHTML = "";
        alertValidaciones.style.display = "none";
        nombre.style.border = "";
        apellido.style.border = "";
        correo.style.border = "";
        mensaje.style.border = "";

        if (nombre.value.trim() === "") {
            alertValidaciones.innerHTML += '<div class="alert alert-danger roboto-font bg-dark text-light nombre-alert" role="alert">El campo <strong>Nombre</strong> es requerido</div>';
            alertValidaciones.style.display = "block";
            nombre.style.border = "1px solid red";
            isValid = false;
        }

        if (apellido.value.trim() === "") {
            alertValidaciones.innerHTML += '<div class="alert alert-danger roboto-font bg-dark text-light apellido-alert" role="alert">El campo <strong>Apellido</strong> es requerido</div>';
            alertValidaciones.style.display = "block";
            apellido.style.border = "1px solid red"; 
            isValid = false;
        }

        if (!validarEmail()) {
            alertValidaciones.innerHTML += '<div class="alert alert-danger roboto-font bg-dark text-light correo-alert" role="alert">El campo <strong>Correo</strong> es requerido</div>';
            alertValidaciones.style.display = "block";
            correo.style.border = "1px solid red";
            isValid = false;
        }

        if (mensaje.value.trim() === "") {
            alertValidaciones.innerHTML += '<div class="alert alert-danger roboto-font bg-dark text-light mensaje-alert" role="alert">El campo <strong>Mensaje</strong> es requerido</div>';
            alertValidaciones.style.display = "block";
            mensaje.style.border = "1px solid red";
            isValid = false;
        }

        return isValid;
    }

    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault();
        alertValidaciones.innerHTML = "";
        alertValidaciones.style.display = "none";
        nombre.style.border = "";
        apellido.style.border = "";
        correo.style.border = "";
        mensaje.style.border = "";

        if (validarEnvio()) {

            // Limpiar los campos después de enviar
            nombre.value = "";
            apellido.value = "";
            correo.value = "";
            mensaje.value = "";
        } else {
            alertValidaciones.innerHTML += "<strong>ERROR:</strong> El mensaje no ha sido enviado, completa correctamente los campos. <br/>";
            alertValidaciones.style.display = "block";
        }
    });
});

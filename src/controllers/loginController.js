document.querySelector(".btn-enviar")
.addEventListener("click", validarFormulario);

function validarFormulario() {

    const cc = document.getElementById("cc").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const codigoEmpresa = document.getElementById("codigoEmpresa").value.trim();

    // Campos vacíos
    if (!cc || !contrasena || !codigoEmpresa) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // Solo números en la cédula
    if (isNaN(cc)) {
        alert("La cédula debe contener solo números");
        return;
    }

    // Longitud mínima contraseña
    if (contrasena.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres");
        return;
    }

    const usuario = {
        cc,
        contrasena,
        codigoEmpresa
    };

    guardarUsuario(usuario);

    alert("Usuario guardado correctamente");

    console.log(
        JSON.parse(localStorage.getItem("usuarios"))
    );
}
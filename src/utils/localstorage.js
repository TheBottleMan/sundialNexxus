const CLAVE_USUARIOS = "usuarios";

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || [];
}

function guardarUsuario(usuario) {
    const usuarios = obtenerUsuarios();
    usuarios.push(usuario);

    localStorage.setItem(
        CLAVE_USUARIOS,
        JSON.stringify(usuarios)
    );
}
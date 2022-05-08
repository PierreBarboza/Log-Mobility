// sessão
function validarSessao() {
    

    var email = sessionStorage.EMAIL_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    var empresa = sessionStorage.EMPRESA_USUARIO;
    var tipoUsuario = sessionStorage.TIPOUSUARIO_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && senha != null && tipoUsuario != null && empresa != null) {
        
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;

        
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    
    sessionStorage.clear();
    
    window.location = "../login.html";
}


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


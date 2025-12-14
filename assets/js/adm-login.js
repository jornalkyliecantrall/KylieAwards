const SENHA_ADM = "KylieCantrall123";

function login() {
    const senha = document.getElementById("senhaAdm").value;

    if (senha === SENHA_ADM) {
        sessionStorage.setItem("adm", "true");
        window.location.href = "adm-painel.html";
    } else {
        alert("Senha incorreta");
    }
}

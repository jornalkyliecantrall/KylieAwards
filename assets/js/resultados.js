// 🔒 PROTEÇÃO
if (
    location.pathname.includes("categorias") ||
    location.pathname.includes("resultados")
) {
    if (localStorage.getItem("admLogado") !== "true") {
        window.location.href = "login.html";
    }
}

// 👉 abrir categoria
function abrirCategoria(categoria) {
    localStorage.setItem("categoriaSelecionada", categoria);
    window.location.href = "resultados.html";
}

// 👉 carregar resultados
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("tituloCategoria");
    const lista = document.getElementById("listaResultados");

    if (!titulo || !lista) return;

    const categoria = localStorage.getItem("categoriaSelecionada");
    const votos = JSON.parse(localStorage.getItem("votos")) || {};

    titulo.textContent = categoria.replace("-", " ").toUpperCase();

    const dados = votos[categoria] || {};

    const ordenado = Object.entries(dados)
        .sort((a, b) => b[1] - a[1]);

    if (ordenado.length === 0) {
        lista.innerHTML = "<p>Sem votos ainda</p>";
        return;
    }

    ordenado.forEach(([nome, total]) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${nome}</h3>
            <p>${total} votos</p>
        `;

        lista.appendChild(card);
    });
});

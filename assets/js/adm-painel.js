if (sessionStorage.getItem("adm") !== "true") {
    window.location.href = "index.html";
}

const votos = JSON.parse(localStorage.getItem("votos")) || {};
const container = document.getElementById("categorias");

for (let categoria in votos) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${categoria}</h3>`;
    card.onclick = () => abrirCategoria(categoria);
    container.appendChild(card);
}

function abrirCategoria(categoria) {
    const dados = votos[categoria];
    const ranking = Object.entries(dados)
        .sort((a, b) => b[1] - a[1])
        .map(([nome, qtd], i) => `${i + 1}º - ${nome}: ${qtd} votos`)
        .join("\n");

    document.getElementById("modalTitulo").textContent = categoria;
    document.getElementById("modalResultados").textContent = ranking;
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

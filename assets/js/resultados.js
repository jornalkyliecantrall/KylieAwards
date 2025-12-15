// proteção ADM (se você já usa sessionStorage)
if (sessionStorage.getItem("adm") !== "true") {
    window.location.href = "../index.html";
}

// pega votos
const votos = JSON.parse(localStorage.getItem("votos")) || {};

// adiciona evento nos botões
document.querySelectorAll(".btn-votar").forEach(botao => {
    botao.addEventListener("click", () => {
        const card = botao.closest(".card");
        const categoria = card.dataset.item;

        abrirResultados(categoria);
    });
});

function abrirResultados(categoria) {
    const dados = votos[categoria];

    const titulo = document.getElementById("modalTitulo");
    const lista = document.getElementById("modalResultados");

    titulo.textContent = formatarNome(categoria);
    lista.innerHTML = "";

    if (!dados || Object.keys(dados).length === 0) {
        lista.innerHTML = "<li>Nenhum voto registrado.</li>";
        abrirModal();
        return;
    }

    // ordena por votos
    const ranking = Object.entries(dados)
        .sort((a, b) => b[1] - a[1]);

    ranking.forEach(([nome, qtd]) => {
        const li = document.createElement("li");
        li.textContent = `${nome} — ${qtd} votos`;
        lista.appendChild(li);
    });

    abrirModal();
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// deixa o nome bonito
function formatarNome(texto) {
    return texto
        .replace(/-/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
}

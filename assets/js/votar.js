// pega votos existentes
let votos = JSON.parse(localStorage.getItem("votos")) || {};

// 🔥 categoria vem do BODY
const categoria = document.body.dataset.categoria;

if (!categoria) {
    console.error("Categoria não definida no body");
}

// evento de voto
document.querySelectorAll(".btn-votar").forEach(botao => {
    botao.addEventListener("click", () => {
        const card = botao.closest(".card");
        const indicado = card.dataset.item;

        if (!votos[categoria]) {
            votos[categoria] = {};
        }

        votos[categoria][indicado] =
            (votos[categoria][indicado] || 0) + 1;

        localStorage.setItem("votos", JSON.stringify(votos));

        mostrarToast("Voto computado com sucesso!");
    });
});

// toast
function mostrarToast(texto) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = texto;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

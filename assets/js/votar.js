// garante que exista um objeto de votos
let votos = JSON.parse(localStorage.getItem("votos")) || {};

// seleciona todos os botões de votar
document.querySelectorAll(".btn-votar").forEach(botao => {
    botao.addEventListener("click", () => {
        const card = botao.closest(".card");

        const categoria = document.title
            .toLowerCase()
            .replace("kylie awards – ", "")
            .replace(/\s+/g, "-")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const indicado = card.dataset.item;

        // cria categoria se não existir
        if (!votos[categoria]) {
            votos[categoria] = {};
        }

        // soma voto
        votos[categoria][indicado] = (votos[categoria][indicado] || 0) + 1;

        // salva no localStorage
        localStorage.setItem("votos", JSON.stringify(votos));

        mostrarToast("Voto computado com sucesso!");
    });
});

// feedback visual
function mostrarToast(texto) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = texto;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

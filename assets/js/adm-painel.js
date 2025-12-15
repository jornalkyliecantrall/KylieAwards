document.querySelectorAll(".btn-votar").forEach(botao => {
    botao.addEventListener("click", () => {
        const card = botao.closest(".card");
        const categoria = card.getAttribute("data-item");

        window.location.href = `resultados.html?categorias=${categorias}`;
    });
});

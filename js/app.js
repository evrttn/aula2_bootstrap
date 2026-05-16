const form = document.querySelector("#form-cor");
form.addEventListener("submit", function () {
    const caixa = document.querySelector("#input-cor");
    document.body.style.backgroundColor = caixa.value;
});

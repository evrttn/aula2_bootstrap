const form = document.querySelector("#form-cor");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const caixa = document.querySelector("#input-cor");
    document.body.style.backgroundColor = caixa.value;
});

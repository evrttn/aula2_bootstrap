const botaoMais = document.querySelector("#btnMais");
const botaoMenos = document.querySelector("#btnMenos");
const output = document.querySelector("output");

function fnTratadora(diferenca) {
    const valor = +output.innerHTML; //+converte de string para number
    output.innerHTML = valor + diferenca;
}

botaoMais.addEventListener("click", function () {
    fnTratadora(1);
});

botaoMenos.addEventListener("click", function () {
    fnTratadora(-1);
});
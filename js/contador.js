const botaoMais = document.querySelector("#btnMais");
const botaoMenos = document.querySelector("#btnMenos");
const output = document.querySelector("output");

function fnTratadora(diferenca) {
    //const valor = +output.innerHTML; //+ converte de string para number
    const valor = +output.value; //+ converte de string para number
    let resultado = valor + diferenca;

    output.classList.remove("text-danger");
    output.classList.remove("text-success");

    if (resultado < 0) {
        output.classList.add("text-danger");
    } else if (resultado > 0) {
        output.classList.add("text-success");
    }
    output.value = resultado;
}

botaoMais.addEventListener("click", () => fnTratadora(1));
botaoMenos.addEventListener("click", () => fnTratadora(-1));
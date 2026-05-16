const botaoIniciar = document.querySelector("#btnIniciar");
const botaoPausar = document.querySelector("#btnPausar");
const botaoReiniciar = document.querySelector("#btnReiniciar");

//começa em 0
const output = document.querySelector("output");

function fnTratadora(diferenca) {
    //const valor = +output.innerHTML; //+ converte de string para number
    const valor = +output.value; //+ converte de string para number
    let valorMS = valor * 1000;
    let resultado = valorMS + diferenca;
    output.value = (resultado / 1000).toFixed(2);
}

/*
    máquina de estados
    -parado
    -executando

    parado - [botão iniciar] - executando
    executando - [botão pausar] - parado
    executando - [botão reiniciar] - parado. contagem = 0
*/
let estado = "parado";

function executaMaquina(transicao) {
    switch (estado) {
        case "parado":
            switch (transicao) {
                case "btnIniciar":
                    estado = "executando";
                    break;
                case "btnReiniciar":
                    estado = "parado";
                    output.value = 0;
                    break;
            }
            break;
        case "executando":
            switch (transicao) {
                case "btnPausar":
                    estado = "parado";
                    break;
                case "btnReiniciar":
                    estado = "parado";
                    output.value = 0;
                    break;
            }
            break;
    }
    console.log(estado);
}

setInterval(
    () => {
        if ("executando" === estado)
            fnTratadora(50);

    }, 50
);

botaoIniciar.addEventListener("click", () => executaMaquina("btnIniciar"));
botaoPausar.addEventListener("click", () => executaMaquina("btnPausar"));
botaoReiniciar.addEventListener("click", () => executaMaquina("btnReiniciar"));

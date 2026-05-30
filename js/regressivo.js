const form = document.querySelector("#form-cor");
const output = document.querySelector("output");

let colDias = document.querySelector("#colDias");
let colHoras = document.querySelector("#colHoras");
let colMinutos = document.querySelector("#colMinutos");
let colSegundos = document.querySelector("#colSegundos");

let cabecalho = document.querySelector("#cabecalho");

let diferenca = 0; // Variável para armazenar a diferença entre a data do evento e a data atual

const t1 = 86400; // segundos em 1 dia
const t2 = 3600; // segundos em 1 hora
const t3 = 60; // segundos em 1 minuto

const primiseResponse = fetch("http://localhost:3000/users", {
    method: "GET",
});
console.log(primiseResponse);

primiseResponse.then(function (response) {
    const jsonPromise = response.json();
    console.log("Response:", jsonPromise);
    jsonPromise.then(function (json) {
        console.log("JSON:", json);
        const dataEvento = json["data"];
        const dataAtual = new Date().getTime(); // Obtém a data atual em milissegundos
        diferenca = Math.floor((dataEvento - dataAtual) / 1000); // Calcula a diferença em segundos e arredonda para baixo
    });
});

setInterval(
    () => {
        if (diferenca > 0) {
            const A = diferenca % t1;
            const B = A % t2;

            const D = Math.floor(diferenca / t1);
            const H = Math.floor(A / t2);
            const M = Math.floor(B / t3);
            const s = Math.floor(B % t3);

            colDias.textContent = D;
            colHoras.textContent = H;
            colMinutos.textContent = M;
            colSegundos.textContent = s;

        } else if (diferenca === 0) {
            cabecalho.classList.remove("bg-dark");
            cabecalho.classList.add("bg-success");
            colDias.textContent = 0;
            colHoras.textContent = 0;
            colMinutos.textContent = 0;
            colSegundos.textContent = 0;
        }
        diferenca -= 1;
    }, 1000
);
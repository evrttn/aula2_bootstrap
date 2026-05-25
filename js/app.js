const form = document.querySelector("#form-cor");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const caixa = document.querySelector("#input-cor");
    document.body.style.backgroundColor = caixa.value;
});

const primiseResponse = fetch("http://localhost:3000/users", {
    method: "GET",
});
console.log(primiseResponse);

primiseResponse.then(function (response) {
    const jsonPromise = response.json();
    console.log("Response:", jsonPromise);
    jsonPromise.then(function (json) {
        console.log("JSON:", json);
    });
    //return response.json();
});
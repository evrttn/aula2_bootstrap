const container = document.querySelector("#tarefas");
const botaoAdicionar = document.querySelector("#btnMais");

botaoAdicionar.addEventListener("click", () => adicionarLinha());

function adicionarLinha() {
    console.log("Adicionar linha");
    const linhaNova = document.createElement("div");
    linhaNova.className = "row my-2";
    linhaNova.innerHTML = `
        <div class="col d-flex align-items-center">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Atividade...">
            <div class="form-check form-switch fs-3 ms-2">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
             </div>
            <button id="btnRemover" type="button" class="btn btn-danger"><i class="bi bi-trash3-fill"></i>
            </button>
        </div>`;
    container.appendChild(linhaNova); // cria o elemento no dom

    //closure do javascript
    const switchEncerrado = linhaNova.querySelector("input[type='checkbox']");
    const inputTexto = linhaNova.querySelector("input[type='text']");
    const btnExcluir = linhaNova.querySelector("button");
    switchEncerrado.addEventListener("change", function (event) {
        if (event.target.checked) {
            inputTexto.disabled = true;
        } else {
            inputTexto.disabled = false;
        }
    });

    btnExcluir.addEventListener("click", function () {
        container.removeChild(linhaNova);
    });
}
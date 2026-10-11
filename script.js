
const formulario = document.getElementById("sorteadorForm");
const listaEntrada = document.getElementById("listaEntrada");
const resultadoBox = document.getElementById("resultadoBox");
const resultado = document.getElementById("resultado");
const btnLimpar = document.getElementById("btnLimpar");
const status = document.getElementById("status");


function obterNomes() {
    return listaEntrada.value
        .split(/[\n,]+/)
        .map(nome => nome.trim())
        .filter(nome => nome !== "");
}


function sortear(nomes) {
    const indice = Math.floor(Math.random() * nomes.length);

    return nomes[indice];
}

formulario.addEventListener("submit", function(event) {


    event.preventDefault();

   
    status.textContent = "";


    const nomes = obterNomes();

   
    if (nomes.length === 0) {
        resultadoBox.classList.add("escondido");
        status.textContent = "Digite pelo menos um nome para sortear!";
        listaEntrada.focus();
        return;
    }

    
    const vencedor = sortear(nomes);


    resultado.textContent = vencedor;
    resultadoBox.classList.remove("escondido");

});


btnLimpar.addEventListener("click", function() {

   
    listaEntrada.value = "";


    resultado.textContent = "";

   
    resultadoBox.classList.add("escondido");

   
    status.textContent = "";

  
    listaEntrada.focus();

});
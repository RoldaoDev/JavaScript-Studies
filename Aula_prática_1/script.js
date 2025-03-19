function gerarTabuada() {
    let numero = document.getElementById('numero').value;
    let resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = "";
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        resultadoDiv.innerHTML = '<p> Por favor insira um número entre 1 e 10.</p>';
        return;
    }

    let tabuada = '<h2> Tabuada do + numero </h2>';
    for (let i = 1; i <= 10; i++){
        tabuada += <p>'${numero}' x ${i} = ${numero * i}</p>;
    }

    resultadoDiv.innerHTML = tabuada;
}


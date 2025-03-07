//iniciando o canvas
var canvas = document.getElementById('progress')
var ctx = canvas.getContext('2d');

//configurações
var x = 0;
var y = 0;
var altura = 10;
var largura = 0;
var fator = 60;
var resolucao = 1280;

//cor da barra requisitada pela equipe
ctx.fillStyle = 'blue'

//função que anima a barra em progresso
function animacao(){
    ctx.fillRect (x,y,largura = largura+fator, altura);

    //CÓDIGO AVABNÇADO: interrompe a função setInterval()
    //                  para evitar carregamento excessivo

    if(largura > resolucao){
        clearInterval(atualiza)
    }
}
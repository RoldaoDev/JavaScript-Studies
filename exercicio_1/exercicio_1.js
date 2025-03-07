//Código para verificação de maioridade
let idade = parseInt(prompt('Informe sua idade:'));
let body = document.body;
let msg = document.getElementById('mensagem');

if (idade <= 17) {
    body.style.background = 'Red' ;
    msg.style.fontSize = 'xx-large';
    msg.style.font.color = 'Blue'
    msg.style.color = 'Cornsilk';
    msg.innerHTML = 'Você é menor de idade';
} else {
    body.style.background = 'Aquamarine';
    msg.style.fontSize = 'xx-large';
    msg.style.color = 'CadeBlue';
    msg.innerHTML = 'Você é maior de idade'
}
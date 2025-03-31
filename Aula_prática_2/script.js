const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

let x = 50;
let y = 150;
let dx = 2;
let dy = 2;
let cor = "red";

function desenharCirculo() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();
}

function atualizar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharCirculo();
    
    if (x + dx > canvas.width - 20 || x + dx < 20) {
        dx = -dx;
        mudarCor();
    }
    if (y + dy > canvas.height - 20 || y + dy < 20) {
        dy = -dy;
        mudarCor();
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(atualizar);
}

function mudarCor() {
    cor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

canvas.addEventListener("click", mudarCor);

atualizar();
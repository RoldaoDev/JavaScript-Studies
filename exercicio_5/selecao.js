var letraA = document.getElementById('letraA');
var letraB = document.getElementById('letraB');
var letraC = document.getElementById('letraC');
var letraD = document.getElementById('letraD');
var letraE = document.getElementById('letraE');
var letraF = document.getElementById('letraF');

var table = document.getElementById('table');

table.addEventListener('click', function(event) {
    if(event.target.id == 'A') {
        letraA.style.backgroundColor = 'rgb(191, 234, 215)';
        letraA.focus();
        //A.focus();
    }
    if(event.target.id == 'B'){
        letraB.style.backgroundColor = 'rgb(191, 234, 215)';
        letraB.focus();
    }
    if(event.target.id == 'C'){
        letraC.style.backgroundColor = 'rgb(191, 234, 215);'
        letraC.focus();
    }
    if (event.target.id == 'D') {
        letraD.style.backgroundColor = 'rgb(191,234, 215)';
        letraD.focus();
    }
    if (event.target.id == 'E') {
        letraE.style.backgroundColor 'rgb(191, 234, 215)';
        letraE.focus();
    }
    if (event.target.id == 'F') {
        letraF.style.backgroundColor == 'rgb(191, 234, 215)';
        letraF.focus();
    }
    setTimeout(function() {
        event.target.remove();
    }, 500);
});

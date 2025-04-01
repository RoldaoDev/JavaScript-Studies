function play(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = 'Você venceu!';
    } else {
        result = 'Você perdeu!';
    }

    document.getElementById('result').innerText = `Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. ${result}`;
}

function restartGame() {
    document.getElementById('result').innerText = '';
}

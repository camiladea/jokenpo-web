let jogadorPontos = 0;
let computadorPontos = 0;

function atualizarPontuacao() {
    document.getElementById("jogador-pontos").textContent = jogadorPontos;
    document.getElementById("computador-pontos").textContent = computadorPontos;
}

function jogar(escolhaJogadorTexto) {
    let escolhaComputadorNumero = Math.floor(Math.random() * 3) + 1;
    let escolhaComputadorTexto;

    if (escolhaComputadorNumero === 1) {
        escolhaComputadorTexto = "pedra";
    } else if (escolhaComputadorNumero === 2) {
        escolhaComputadorTexto = "papel";
    } else {
        escolhaComputadorTexto = "tesoura";
    }

    let resultado = "";

    if (escolhaJogadorTexto === escolhaComputadorTexto) {
        resultado = "Empate!";
    } else if (
        (escolhaJogadorTexto === "pedra" && escolhaComputadorTexto === "tesoura") ||
        (escolhaJogadorTexto === "papel" && escolhaComputadorTexto === "pedra") ||
        (escolhaJogadorTexto === "tesoura" && escolhaComputadorTexto === "papel")
    ) {
        resultado = "Você venceu!";
        jogadorPontos++;
    } else {
        resultado = "O computador venceu!";
        computadorPontos++;
    }

    document.getElementById("resultado").innerHTML = `Você escolheu: ${escolhaJogadorTexto}<br>O computador escolheu: ${escolhaComputadorTexto}<br>Resultado: ${resultado}`;
    atualizarPontuacao();
}

// Inicializa a pontuação
atualizarPontuacao();
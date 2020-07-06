class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textFont('Helvetica');
        textAlign(RIGHT)
        fill("#fff")
        textSize(50);
        text(`Pontuação: ${parseInt(this.pontos)}`, width - 10, 50)
    }

    adicionarPonto() {
        this.pontos += 0.04;
    }
}
class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;
        this.vidas = this.inicial;

        this.largura = 40;
        this.altura = 40;
        this.xInicial = 20;
        this.y = 10;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 30;
            const posicao = this.xInicial * (1 + i);

            image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.total) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}
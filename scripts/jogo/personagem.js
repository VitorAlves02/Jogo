class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.invencivel = false;
    }

    qntPulos = 2;

    pula() {
        if (this.qntPulos > 0) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.qntPulos--;
        }
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.qntPulos = 2;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false;
        }
        const precisao = .7
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }
}
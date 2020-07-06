class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = [
            {
                inimigo: 0,
                velocidade: 17,
            },
            {
                inimigo: 1,
                velocidade: 30,
            },
            {
                inimigo: 1,
                velocidade: 20,
            },
            {
                inimigo: 2,
                velocidade: 40,
            }
        ]
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 279);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 15);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 15);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            if (personagem.qntPulos > 0) {
                somDoPulo.play();
            }
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        vida.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
                somDoJogo.stop();
                image(imagemGameOver, width / 2 - 200, height / 3);
                noLopp();
            }

        }
    }
}
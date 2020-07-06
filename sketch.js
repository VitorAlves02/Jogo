function setup() {
  createCanvas(windowWidth, windowHeight);
  somDoJogo.loop();
  frameRate(45);
  jogo = new Jogo();
  telaInicial = new TelaInicial();

  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
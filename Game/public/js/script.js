(function () {
  const FPS = 1;
  var scale = 0.7;
  let gameDimensions = [1243*scale, 960*scale];
  let focoDimensions = [100*scale, 130*scale];
  let caveiraDimensions = [120*scale, 136*scale];
  let devastacaoDimensions = [250*scale, 250*scale];
  let probFoco = 50;
  let probCaveira = 25;
  let reserva;
  let vidas;
  let vidasGuarda = [];
  let vida = 5;
  let focos = [];
  let caveiras = [];
  let gameLoop;
  let pontos = 0;
  let pontuacao;
  let gameIsOver = false;

  function init() {
    reserva = new Reserva();
    vidas = new Vidas();
    pontuacao = new Pontuacao();
  }

  class Reserva {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${gameDimensions[0]}px`;
      this.element.style.height = `${gameDimensions[1]}px`;
      document.getElementById("jogo").appendChild(this.element);
    }
  }

  class FocoIncendio {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "foco-incendio";
      this.element.style.width = `${focoDimensions[0]}px`;
      this.element.style.height = `${focoDimensions[1]}px`;
      this.element.style.left = `${Math.floor(
        Math.random() * (gameDimensions[0] - focoDimensions[0])
      )}px`;
      this.element.style.top = `${Math.floor(
        Math.random() * (gameDimensions[1] - focoDimensions[1])
      )}px`;
      reserva.element.appendChild(this.element);
      this.element.onmouseup = (event) => {
        event.target.remove();
        this.element = null;
        pontos += 10;
        pontosGame(pontos);
      };
      setTimeout(() => {
        if (this.element != null) {
          this.element.style.backgroundImage =
            "url(../img/devastacao.png)";
          this.element.style.width = `${devastacaoDimensions[0]}px`;
          this.element.style.height = `${devastacaoDimensions[1]}px`;
          vidas.perderVida(1);
          this.element.onmouseup = null;
        }
      }, 2000 / FPS);
    }
  }

  class Caveiras {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "caveiras";
      this.element.style.width = `${caveiraDimensions[0]}px`;
      this.element.style.height = `${caveiraDimensions[1]}px`;
      this.element.style.left = `${Math.floor(
        Math.random() * (gameDimensions[0] - caveiraDimensions[0])
      )}px`;
      this.element.style.top = `${Math.floor(
        Math.random() * (gameDimensions[1] - caveiraDimensions[1])
      )}px`;
      reserva.element.appendChild(this.element);
      this.element.onmouseup = (event) => {
        event.target.remove();
        this.element = null;

        pontos += 20;
        pontosGame(pontos);
      };

      setTimeout(() => {
        if (this.element != null) {
          this.element.style.backgroundImage =
            "url(../img/devastacao.png)";
          this.element.style.width = `${devastacaoDimensions[0]}px`;
          this.element.style.height = `${devastacaoDimensions[1]}px`;
          this.element.className = "devasta";
          vidas.perderVida(2);
          this.element.onmouseup = null;
        }
      }, 2000 / FPS);
    }
  }

  class Vidas {
    constructor() {
      let arvores = document.createElement("div");
      arvores.id = "life";  
      arvores.style.display = "inline"    
      for (let i = 0; i < vida; i++) {
        let life = document.createElement("div");
        life.className = "vidas";
        arvores.appendChild(life);
        vidasGuarda.push(life);
      }

      document.getElementById("placar").appendChild(arvores);

    }


    perderVida(perdas) {
      var guardaPerdas = perdas;

      while (guardaPerdas > 0 && vidasGuarda.length > 0) {
        let lifeRemove = vidasGuarda.pop();
        document.getElementById("life").removeChild(lifeRemove);
        guardaPerdas -= 1;
      }

      if (vidasGuarda.length == 0 && !gameIsOver) {
        gameIsOver = true;
        setTimeout(() => {
          alert("GAME OVER");
          document.location.reload(true);
        }, 500);
      }
    }
  }

  class Pontuacao {
    constructor() {
      this.element = document.createElement("h1");
      this.element.id = "pontuacao";
      this.element.innerHTML = `00000`;
      document.getElementById("placar").appendChild(this.element);
    }
  }

  function pontosGame(valor) {
    var pontuacao = document.getElementById("pontuacao");
    valorAtual = valor.toString();
    var valorTroca = "00000" + valorAtual;
    pontuacao.innerHTML = valorTroca.slice(-5, -1) + valorTroca.slice(-1);
  }

  function run() {
    if (Math.random() * 100 < probFoco) {
      let foco = new FocoIncendio();
      focos.push(foco);
    }

    if (Math.random() * 100 < probCaveira) {
      let caveira = new Caveiras();
      caveiras.push(caveira);
    }
  }

  //Start game
  window.addEventListener("keydown", function (e) {
    if (e.key === "s") {
      gameLoop = setInterval(run, 1000 / FPS);
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "p") {
      alert("PAUSE");
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "o") {
      clearInterval(gameLoop);
    }
  });

  init();
})();

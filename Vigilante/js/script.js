(function () {

  const FPS = 1; 
  let gameDimensions = [1243, 960];
  let focoDimensions = [100, 130];
  let caveiraDimensions = [120,136];
  let probFoco = 100;
  let probCaveira = 25;
  let reserva;
  let vidas;
  let focos = [];
  let caveiras = [];
  let gameLoop;
  let pontos = 0;
  let pontuacao;

  function init() {
    reserva = new Reserva();
    vidas = new Vidas();
    pontuacao = new Pontuacao();
  }

  class Vidas {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "vidas";
      this.element.style.width = `250px`;
      this.element.style.height = `1000px`;
      document.body.appendChild(this.element);
    }
  }

  class Pontuacao {
    constructor () {
      this.element = document.createElement("h1");
      this.element.id = "pontuacao";
      this.element.style.width = `250px`;
      this.element.style.height = `1000px`;
      this.element.innerHTML = `00000`
      document.body.appendChild(this.element);
    }
  }

  class Reserva {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${gameDimensions[0]}px`;
      this.element.style.height = `${gameDimensions[1]}px`;
      document.body.appendChild(this.element);
    }
  }

  class FocoIncendio {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "foco-incendio";
      this.element.style.width = `${focoDimensions[0]}px`;
      this.element.style.height = `${focoDimensions[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-focoDimensions[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-focoDimensions[1])))}px`;
      reserva.element.appendChild(this.element);
      this.element.addEventListener("mouseup", (event) => {
        event.target.remove();   
        pontos+=10;
        pontuacao = document.getElementById("pontuacao")
        pontuacao.innerHTML = `${pontos}`;
      });
    }
  }


  class Caveiras {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "caveiras";
      this.element.style.width = `${caveiraDimensions[0]}px`;
      this.element.style.height = `${caveiraDimensions[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-caveiraDimensions[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-caveiraDimensions[1])))}px`;
      reserva.element.appendChild(this.element);
      this.element.addEventListener("mouseup", (event) => {
        event.target.remove();   
        pontos+=20;
        pontuacao = document.getElementById("pontuacao");        
        pontuacao.innerHTML = `${pontos}`;
      });
    }
  }

  function run () {
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
    if (e.key === 's') {
      gameLoop = setInterval(run, 1000/FPS);
    }

  })

  window.addEventListener("keydown", function (e) {
    if (e.key === 'o') {
      clearInterval(gameLoop);
    }
  })

  init();
})();

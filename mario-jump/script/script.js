const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const plant = document.querySelector('.plant');
const score = document.querySelector(".score-count");
const gameOver = document.querySelector(".game-over");
const reset = document.querySelector(".btn-reset");

const jump = () => {
  mario.classList.add('jump');
  console.log(jump);

  console.log(mario);

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

// loop do jogo verificando se o mario encostou ou nao no pipe
let count = 0;
const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const plantPosition = plant.offsetLeft;

  // o sinal de + converteu a string em numero
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition > 0) {
    count += 15;
    console.log(count);
    score.innerHTML = `Score: ${count}`;
  }

// 120 e 0 é o left e 80 se refere ao pulo
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      // aqui faz o tupo parar no momento que o mario encostou
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      plant.style.animation = "none";
      plant.style.left = `${plantPosition}px`;

      // aqui o mario fica parado na posição que ele encostou no pipe
      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./images/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      gameOver.style.display = "block";
      reset.style.display = "block";

      clearInterval(loop);

  }

}, 10)

const resetGame = () => {
  // faz o refresh da página
  history.go(0)
}

document.addEventListener('keydown', jump);
document.addEventListener('onclick', resetGame)

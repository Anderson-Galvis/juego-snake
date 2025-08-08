import { changeFoodPosition, foodX, foodY } from './food.js';
import { moveSnake, snakeBody, gameOver } from './snake.js';
import { changeDirection } from './controls.js';
import { increaseScore, getScore, getLevel, getHighScore, resetScore } from './score.js';
import { obtenerMapaPorNivel } from './mapas.js';

const playBoard = document.querySelector('.playBoard');
let setIntervalId;
// para los niveles o los mapas
let nivelAnterior = getLevel();
let mapaActual = obtenerMapaPorNivel(nivelAnterior); // esto se ejecuta al iniciar el juego
console.log("Formato inicial de mapaActual:", mapaActual);


function handleGameOver() {
  clearInterval(setIntervalId);
  console.log("Posición de la cabeza:", snakeBody[0]);

  alert('Game Over');
  location.reload();
}

function updateUI() {
  document.getElementById("score").textContent = "Puntos: " + getScore();
  document.getElementById("level").textContent = "Nivel: " + getLevel();
  document.getElementById("highScore").textContent = "Record: " + getHighScore();
}



function draw() {
  if (gameOver) return handleGameOver();


  const nivelActual = getLevel();
  if (nivelActual !== nivelAnterior) {
    alert(`¡Nivel ${nivelActual} alcanzado!`);
    mapaActual = obtenerMapaPorNivel(nivelActual);
    console.log("Mapa actual:", mapaActual); 
    nivelAnterior = nivelActual;
  }

  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Dibujar obstáculos del mapa
    for (let bloque of mapaActual) {
      htmlMarkup += `<div class="bloque" style="grid-area: ${bloque.y} / ${bloque.x}"></div>`;
    }
    

  moveSnake(mapaActual, mapaActual);

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="culebra" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }

  playBoard.innerHTML = htmlMarkup;
  updateUI();
}

changeFoodPosition(mapaActual, snakeBody);
setIntervalId = setInterval(draw, 125);
document.addEventListener('keydown', changeDirection);

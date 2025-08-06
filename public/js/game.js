import { changeFoodPosition, foodX, foodY } from './food.js';
import { moveSnake, snakeBody, gameOver } from './snake.js';
import { changeDirection } from './controls.js';
import { increaseScore, getScore, getLevel, getHighScore, resetScore } from './score.js';

const playBoard = document.querySelector('.playBoard');
let setIntervalId;

function handleGameOver() {
  clearInterval(setIntervalId);
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

  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  moveSnake();

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="culebra" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }

  playBoard.innerHTML = htmlMarkup;
  updateUI();
}

changeFoodPosition();
setIntervalId = setInterval(draw, 125);
document.addEventListener('keydown', changeDirection);

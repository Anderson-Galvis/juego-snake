import { foodX, foodY, changeFoodPosition } from './food.js';
import { increaseScore, } from './score.js';


export let snakeX = 10, snakeY = 30;
// export let velocidadX = 0, velocidadY = 0;
export let snakeBody = [];
export let gameOver = false;

export const velocity = {
  x: 0,
  y: 0
};

export function moveSnake() {
  // Comprobar si comió
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]);
    increaseScore(10);
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];
  
  // Usa velocity.x e velocity.y en vez de velocidadX y velocidadY
  snakeX += velocity.x;
  snakeY += velocity.y;

  // Colisiones con paredes
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  // Colisiones con el cuerpo
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[0][0] === snakeBody[i][0] && snakeBody[0][1] === snakeBody[i][1]) {
      gameOver = true;
    }
  }
}

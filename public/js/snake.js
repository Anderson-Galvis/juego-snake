

import { foodX, foodY, changeFoodPosition } from './food.js';
import { increaseScore, getLevel } from './score.js';

export let snakeX = 5, snakeY = 5;
export let velocity = { x: 1, y: 0 };
export let snakeBody = [[snakeX, snakeY]];
export let gameOver = false;

export function moveSnake(obstaculos = [], mapa = []) {
  // Comprobar si comió

  console.log("Obstáculos recibidos en moveSnake():", obstaculos);

  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition(mapa, snakeBody);
    snakeBody.push([foodX, foodY]);
    increaseScore(10);
  }

  // Mover cuerpo
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];

// Mover cabeza
snakeX += velocity.x;
snakeY += velocity.y;

// 🚨 Verificar colisión con obstáculos inmediatamente
for (let obstaculo of obstaculos) {
  if (snakeX === obstaculo.x && snakeY === obstaculo.y) {
    console.log("💥 Colisión con obstáculo en:", obstaculo);
    gameOver = true;
  }
}

const nivel = getLevel();

if (nivel === 1) {
  // Nivel 1: teletransporte clásico sin obstáculos
  if (snakeX < 1) snakeX = 30;
  else if (snakeX > 30) snakeX = 1;
  if (snakeY < 1) snakeY = 30;
  else if (snakeY > 30) snakeY = 1;
} else {
  // Niveles > 1: teletransporte solo a espacios sin obstáculos
  const columnas = 30;
  const filas = 30;

  if (snakeX < 1) snakeX = columnas;
  else if (snakeX > columnas) snakeX = 1;
  if (snakeY < 1) snakeY = filas;
  else if (snakeY > filas) snakeY = 1;

  let intento = 0;
  const maxIntentos = columnas * filas;

  while (obstaculos.some(o => o[0] === snakeX && o[1] === snakeY) && intento < maxIntentos) {
    snakeX += velocity.x;
    snakeY += velocity.y;

    if (snakeX < 1) snakeX = columnas;
    else if (snakeX > columnas) snakeX = 1;
    if (snakeY < 1) snakeY = filas;
    else if (snakeY > filas) snakeY = 1;

    intento++;
  }

  if (intento === maxIntentos) {
    console.log("💥 No hay espacio para teletransportar sin chocar");
    gameOver = true;
    return;
  }
}

}




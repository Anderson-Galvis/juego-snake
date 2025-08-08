export let foodX, foodY;

export function changeFoodPosition(obstaculos = [], snakeBody = []) {
  const tamañoCelda = 30;

  let nuevaX, nuevaY;
  let posicionInvalida = true;
  let intentos = 0;

  while (posicionInvalida && intentos < 1000) {
    nuevaX = Math.floor(Math.random() * tamañoCelda) + 1;
    nuevaY = Math.floor(Math.random() * tamañoCelda) + 1;
    intentos++;

    const colisionaConObstaculo = obstaculos.some(o => o.x === nuevaX && o.y === nuevaY);
    const colisionaConCulebra = snakeBody.some(([x, y]) => x === nuevaX && y === nuevaY);

    if (!colisionaConObstaculo && !colisionaConCulebra) {
      posicionInvalida = false;
    }
  }

  foodX = nuevaX;
  foodY = nuevaY;
}

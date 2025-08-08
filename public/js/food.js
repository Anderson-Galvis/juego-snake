export let foodX, foodY;

export function changeFoodPosition(obstaculos = [], snakeBody = []) {
  const tamañoCelda = 30;
  const posicionesLibres = [];

  for (let x = 1; x <= tamañoCelda; x++) {
    for (let y = 1; y <= tamañoCelda; y++) {
      const ocupadaPorObstaculo = obstaculos.some(o => o.x === x && o.y === y);
      const ocupadaPorSerpiente = snakeBody.some(([sx, sy]) => sx === x && sy === y);
      if (!ocupadaPorObstaculo && !ocupadaPorSerpiente) {
        posicionesLibres.push({ x, y });
      }
    }
  }

  if (posicionesLibres.length === 0) {
    console.log("No hay posiciones libres para la comida");
    // Aquí puedes decidir qué hacer, por ejemplo reiniciar juego o gameOver
    return;
  }

  const index = Math.floor(Math.random() * posicionesLibres.length);
  foodX = posicionesLibres[index].x;
  foodY = posicionesLibres[index].y;
}

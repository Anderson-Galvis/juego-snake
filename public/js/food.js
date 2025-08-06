export let foodX, foodY;

export function changeFoodPosition() {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

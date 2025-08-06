import { velocity } from './snake.js';

export function changeDirection(e) {
  if (e.key === 'ArrowUp' && velocity.y !== 1) {
    velocity.x = 0;
    velocity.y = -1;
  } else if (e.key === 'ArrowDown' && velocity.y !== -1) {
    velocity.x = 0;
    velocity.y = 1;
  } else if (e.key === 'ArrowLeft' && velocity.x !== 1) {
    velocity.x = -1;
    velocity.y = 0;
  } else if (e.key === 'ArrowRight' && velocity.x !== -1) {
    velocity.x = 1;
    velocity.y = 0;
  }
}

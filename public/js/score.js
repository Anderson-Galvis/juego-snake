let score = 0;
let level = 1;
let highScore = localStorage.getItem("highScore") || 0;
const levelThreshold = 100;

export function resetScore() {
  score = 0;
  level = 1;
}

export function increaseScore(amount = 10) {
  score += amount;
  checkLevelUp();
  checkHighScore();
}

function checkLevelUp() {
  if (score >= level * levelThreshold) {
    level++;
  }
}

function checkHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }
}

export function getScore() {
  return score;
}

export function getLevel() {
  return level;
}

export function getHighScore() {
  return highScore;
}

let score = 0;
let level = 1;
let highScore = localStorage.getItem("highScore") || 0;
const levelThreshold = 5;

export function resetScore() {
  score = 0;
  level = 1;
}

export function increaseScore(amount = 1) {
  score += amount;
  const leveledUp = checkLevelUp();
  checkHighScore();
  return leveledUp;
}

function checkLevelUp() {
  if (score >= level * levelThreshold) {
    level++;
    return true;
  }
  return false;
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

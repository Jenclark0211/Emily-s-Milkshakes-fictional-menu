const chinchilla = document.getElementById('chinchilla');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Move chinchilla with arrow keys
document.addEventListener('keydown', (e) => {
  const left = parseInt(chinchilla.style.left || 180);
  if (e.key === 'ArrowLeft' && left > 0) {
    chinchilla.style.left = (left - 20) + 'px';
  }
  if (e.key === 'ArrowRight' && left < 340) {
    chinchilla.style.left = (left + 20) + 'px';
  }
});

// Create falling treats
function createTreat() {
  const treat = document.createElement('img');
  treat.src = 'treat.png';
  treat.className = 'treat';
  treat.style.left = Math.floor(Math.random() * 360) + 'px';
  treat.style.top = '0px';
  gameArea.appendChild(treat);

  let fallInterval = setInterval(() => {
    let top = parseInt(treat.style.top);
    treat.style.top = (top + 5) + 'px';

    // Collision detection
    const chinLeft = parseInt(chinchilla.style.left || 180);
    const chinRight = chinLeft + 60;
    const treatLeft = parseInt(treat.style.left);
    const treatRight = treatLeft + 40;

    if (top > 530 && treatLeft < chinRight && treatRight > chinLeft) {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      gameArea.removeChild(treat);
      clearInterval(fallInterval);
    }

    // Remove if missed
    if (top > 600) {
      gameArea.removeChild(treat);
      clearInterval(fallInterval);
    }
  }, 30);
}

// Drop treats every 2 seconds
setInterval(createTreat, 2000);

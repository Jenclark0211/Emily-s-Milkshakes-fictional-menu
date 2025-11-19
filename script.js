const chinchilla = document.getElementById('chinchilla');
const gameArea = document.getElementById('gameArea');
let isDragging = false;

// Start drag
chinchilla.addEventListener('touchstart', (e) => {
  isDragging = true;
});

// Move chinchilla with finger
gameArea.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const touch = e.touches[0];
  const gameRect = gameArea.getBoundingClientRect();
  let newLeft = touch.clientX - gameRect.left - (chinchilla.offsetWidth / 2);

  // Keep chinchilla inside game area
  if (newLeft < 0) newLeft = 0;
  if (newLeft > gameArea.offsetWidth - chinchilla.offsetWidth) {
    newLeft = gameArea.offsetWidth - chinchilla.offsetWidth;
  }

  chinchilla.style.left = newLeft + 'px';
});

// End drag
gameArea.addEventListener('touchend', () => {
  isDragging = false;
});
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
const chinchilla = document.getElementById('chinchilla');

function moveChinchilla(direction) {
  const left = parseInt(chinchilla.style.left || 180);
  if (direction === 'left' && left > 0) {
    chinchilla.style.left = (left - 20) + 'px';
  }
  if (direction === 'right' && left < (gameArea.offsetWidth - 60)) {
    chinchilla.style.left = (left + 20) + 'px';
  }
}

// Touch buttons
document.getElementById('leftBtn').addEventListener('click', () => moveChinchilla('left'));
document.getElementById('rightBtn').addEventListener('click', () => moveChinchilla('right'));
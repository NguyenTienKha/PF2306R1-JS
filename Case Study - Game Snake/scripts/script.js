const playBoard = document.querySelector(".display-game-board");
const displayScore = document.querySelector(".score");
const displayHighScore = document.querySelector(".high-score");
const snakeHead = document.querySelector(".snake-head");
const userGuide = document.getElementById("user-guide");

const directionToRotate = {
  down: "rotate(180deg)",
  up: "rotate(0deg)",
  left: "rotate(270deg)",
  right: "rotate(90deg)",
};

let foodX, foodY;
let direction;
let snakeX = 5,
  snakeY = 10;
let distancesX = 0,
  distancesY = 0;
let bombX, bombY;
let snakeBody = [];
let gameOver = false;
let gamePlay;
let score = 0;
let soundLose = false;
let highScore = localStorage.getItem("high-score");
displayHighScore.innerHTML = `High Score: ${highScore}`;

userGuide.addEventListener("click", function () {
  alert(
    "1. Use the navigation key (↑ ↓ ← →) from the keyboard to adjust the direction for the snake. \n2. Eat red fruit to improve the score and don't forget to avoid the bomb !!! "
  );
});

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const changeBombPosition = () => {
  bombX = Math.floor(Math.random() * 30) + 1;
  bombY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  const soundGameOver = new Audio("sounds/game-over-sound.mp3");
  soundGameOver.play();
  clearInterval(gamePlay);
  setTimeout(() => {
    location.reload();
  }, 3000);
};

const initGame = () => {
  if (gameOver) {
    soundLose = true;
    return handleGameOver();
  }
  let setUp = `<div class="food" style="grid-area:${foodY}/${foodX}; border:1px solid"></div>`;
  if (snakeX == foodX && snakeY == foodY) {
    const soundEating = new Audio("sounds/sound-eating.mp3");
    soundEating.play();
    score++;
    displayScore.innerHTML = `Score: ${score}`;

    if (score >= 18) {
      gamePlay = setInterval(initGame, 149);
    } else if (score >= 28) {
      gamePlay = setInterval(initGame, 148);
    }

    if (score >= 6) {
      changeBombPosition();
    }

    snakeBody.push([foodX, foodY]);
    changeFoodPosition();

    if (score >= highScore) highScore = score;
    localStorage.setItem("high-score", highScore);
    displayHighScore.innerHTML = `High Score: ${highScore}`;
  }

  if (score >= 5) {
    setUp += `<div class="bomb" style="grid-area:${bombY}/${bombX}; border:1px solid"></div>`;
  }

  for (let i = snakeBody.length - 1; i >= 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];
  snakeX += distancesX;
  snakeY += distancesY;

  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    setUp += `<div class="snake snake-head" style="grid-area:${snakeBody[0][1]}/${snakeBody[0][0]}; border:1px solid; transform:${directionToRotate[direction]}">
    </div>`;
    if (i >= 1) {
      setUp += `<div class="snake snake-body" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}; border:1px solid"></div>`;
    }
    if (
      (i != 0 &&
        snakeBody[0][1] == snakeBody[i][1] &&
        snakeBody[0][0] == snakeBody[i][0]) ||
      (snakeBody[0][1] == bombY && snakeBody[0][0] == bombX)
    ) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = setUp;
};

const changeDirection = (e) => {
  if (e.key == "ArrowDown" && distancesY != -1) {
    distancesX = 0;
    distancesY = 1;
    direction = "down";
  } else if (e.key == "ArrowUp" && distancesY != 1) {
    distancesX = 0;
    distancesY = -1;
    direction = "up";
  } else if (e.key == "ArrowLeft" && distancesX != 1) {
    distancesX = -1;
    distancesY = 0;
    direction = "left";
  } else if (e.key == "ArrowRight" && distancesX != -1) {
    distancesX = 1;
    distancesY = 0;
    direction = "right";
  }
  initGame();
};

document.addEventListener("keydown", changeDirection);
gamePlay = setInterval(initGame, 150);
changeFoodPosition();
initGame();

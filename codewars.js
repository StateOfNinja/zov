function getCard() {
  function getRandomNumbers(min, max, count) {
    const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers.slice(0, count);
  }
  const card = [];

  // Column B
  const bNumbers = getRandomNumbers(1, 15, 5);
  bNumbers.forEach((num) => card.push(`B${num}`));

  // Column I
  const iNumbers = getRandomNumbers(16, 30, 5);
  iNumbers.forEach((num) => card.push(`I${num}`));

  // Column N
  const nNumbers = getRandomNumbers(31, 45, 4);
  nNumbers.forEach((num) => card.push(`N${num}`));

  // Column G
  const gNumbers = getRandomNumbers(46, 60, 5);
  gNumbers.forEach((num) => card.push(`G${num}`));

  // Column O
  const oNumbers = getRandomNumbers(61, 75, 5);
  oNumbers.forEach((num) => card.push(`O${num}`));

  return card;
}

console.log(getCard());

function countBits(n) {
  let binaryString = n.toString(2);
  let count = binaryString.split("1").length;
  return count;
}
console.log(countBits(1234));

let whatTimeIsIt = function (angle) {
  let hours = Math.floor(angle / 30);
  if (hours == 0) {
    hours = 12;
  }
  let minutes = Math.round((angle % 30) * 2);

  let stringHours = hours.toString().padStart(2, "0");
  let stringMinutes = minutes.toString().padStart(2, "0");

  return `${stringHours}:${stringMinutes}`;
};

console.log(whatTimeIsIt(180.9763383145626));

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(isPrime(4));

let stack = [];

function bracketsIssue() {
  const openBrackets = ["(", "{"];
  const bracketsPair = {
    [")"]: "(",
    ["}"]: "{",
  };
  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length == 0) {
          return false;
        }
        let topElem = stack[stack.length == 1];
        if (bracketsPair[currentSymbol == topElem]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length == 0;
  }
  console.log("check case - ()))()() - ", isBracketsOk("()))()()"));
  console.log("check case - {}()){{{}}} - ", isBracketsOk("{}()){{{}}}"));
  console.log("check case - (()}({(})}) - ", isBracketsOk("(()}({(})})"));
  console.log("check case - }}{(}(() - ", isBracketsOk("}}{(}(()"));
}
bracketsIssue();

function getRectangleString(width, height) {
  const topEdge = "┌" + "─".repeat(width - 2) + "┐\n";
  const middlePart = "│" + "-".repeat(width - 2) + "│\n";
  const bottomEdge = "└" + "─".repeat(width - 2) + "┘\n";
  return topEdge + middlePart.repeat(height - 2) + bottomEdge;
}
console.log(getRectangleString("40", "10"));

function rot13(str) {
  return str.replace(/[A-Za-z]/g, function (c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13)
    );
  });
}
console.log(rot13("Hello1"));

function getCircleCircumference(num, pow) {
  let str = 10 ** pow;
  return Math.round(num / str) * str;
}
console.log(getCircleCircumference(1221, 1));

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, false, "cat", NaN, true, ""]));

function findElement(arr, elem, pos) {
  arr.splice(pos, 0, elem);
  return arr;
}
console.log(findElement(["", "a", "a2", "zov", 1], 20, 1));

function getHead(arr) {
  return arr.reduce((mas, curr, index) => {
    if (index === 0) {
      mas.push(curr);
    } else {
      mas.push(mas[index - 1] + curr);
    }
    return mas;
  }, []);
}
console.log(getHead([-1, 1, -1, 1, -1, 1]));

function getFizzBuzz(n) {
  for (let i of n) {
    if (n.indexOf(i) === n.lastIndexOf(i)) {
      return i;
    }
  }
  return null;
}
console.log(getFizzBuzz("avavd"));

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("dog"));

class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.currentGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    this.currentGuess = Math.floor((this.min + this.max) / 2);
    return this.currentGuess;
  }
  lower() {
    this.max = this.currentGuess - 1;
    this.currentGuess = Math.floor((this.min + this.max) / 2);
    return this.currentGuess;
  }
  greater() {
    this.min = this.currentGuess + 1;
    this.currentGuess = Math.floor((this.min + this.max) / 2);
    return this.currentGuess;
  }
}
const game = new GuessingGame();
game.setRange(1, 100);

console.log(game.guess());

//пинга понга

const canvas = document.querySelector(".canvas__game");
const ctx = canvas.getContext("2d");
const menu = document.querySelector(".pause");
const startButton = document.querySelector(".start");

//размеры

const paddleWidth = 10;
const paddleHeight = 100;
const ballRadius = 10;

//расположение

let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

//управление

let leftPaddleUpPressed = false;
let leftPaddleDownPressed = false;
let rightPaddleUpPressed = false;
let rightPaddleDownPressed = false;

//счет

let leftScore = 0;
let rightScore = 0;

//состояние

let isPaused = false;
let isRunning = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

startButton.addEventListener("click", startGame);

function keyDownHandler(e) {
  if (e.key == "w" || e.key == "W") {
    leftPaddleUpPressed = true;
  } else if (e.key == "s" || e.key == "S") {
    leftPaddleDownPressed = true;
  } else if (e.key == "ArrowUp") {
    rightPaddleUpPressed = true;
  } else if (e.key == "ArrowDown") {
    rightPaddleDownPressed = true;
  } else if (e.key == "p" || e.key == "P") {
    isPaused = !isPaused;
  }
}
function keyUpHandler(e) {
  if (e.key == "w" || e.key == "W") {
    leftPaddleUpPressed = false;
  } else if (e.key == "s" || e.key == "S") {
    leftPaddleDownPressed = false;
  } else if (e.key == "ArrowUp") {
    rightPaddleUpPressed = false;
  } else if (e.key == "ArrowDown") {
    rightPaddleDownPressed = false;
  }
}

function update() {
  if (isPaused) return;
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballX - ballRadius < paddleWidth) {
    if (ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      rightScore++;
      resetBall();
      checkWin();
    }
  }
  if (ballX + ballRadius > canvas.width - paddleWidth) {
    if (ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      leftScore++;
      resetBall();
      checkWin();
    }
  }
  if (leftPaddleUpPressed && leftPaddleY > 0) {
    leftPaddleY -= 7;
  } else if (
    leftPaddleDownPressed &&
    leftPaddleY < canvas.height - paddleHeight
  ) {
    leftPaddleY += 7;
  }
  if (rightPaddleUpPressed && rightPaddleY > 0) {
    rightPaddleY -= 7;
  } else if (
    rightPaddleDownPressed &&
    rightPaddleY < canvas.height - paddleHeight
  ) {
    rightPaddleY += 7;
  }
}
function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}
function checkWin() {
  if (leftScore >= 7 || rightScore >= 7) {
    isRunning = false;
    showMenu();
  }
}

//поле

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
  ctx.fillRect(
    canvas.width - paddleWidth,
    rightPaddleY,
    paddleWidth,
    paddleHeight
  );

  ctx.font = "48px serif";
  ctx.fillText(leftScore, canvas.width / 4, 50);
  ctx.fillText(rightScore, (3 * canvas.width) / 4, 50);
}
function gameLoop() {
  if (isRunning) {
    update();
    draw();
    requestAnimationFrame(gameLoop);
  }
}
function startGame() {
  leftScore = 0;
  rightScore = 0;
  isPaused = false;
  isRunning = true;
  hideMenu();
  resetBall();
  gameLoop();
}
function showMenu() {
  menu.classList.remove("hidden");
}
function hideMenu() {
  menu.classList.add("hidden");
}
showMenu();

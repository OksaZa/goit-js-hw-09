const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

stopBtn.disabled = true;

function changeColor() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

function stopChangeColor() {
  clearInterval(timerId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
};


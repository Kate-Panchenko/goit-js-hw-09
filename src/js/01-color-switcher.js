const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let setTimer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', randomColorOn);
stopBtn.addEventListener('click', randomColorOff)

function randomColorOn () {
    setTimer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
};

function randomColorOff(params) {
    setTimer = clearInterval(setTimer);
    document.body.style.backgroundColor = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


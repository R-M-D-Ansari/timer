let countdown;
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');

function startTimer(duration) {
    clearInterval(countdown);
    const endTime = Date.now() + duration * 1000;
    displayTimeLeft(duration);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(remainderSeconds).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    timerDisplay.textContent = display;
}

startButton.addEventListener('click', () => {
    const duration = 60 * 5; // 5 minutes countdown
    startTimer(duration);
});

resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00:00';
});

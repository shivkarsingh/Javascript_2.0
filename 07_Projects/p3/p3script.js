const displayTime = document.querySelector('#time');
const btn = document.querySelector('#startBtn');

let intervalId = null;

btn.addEventListener('click', () => {
    if (intervalId !== null) return; // prevent multiple intervals

    intervalId = setInterval(() => {
        const time = new Date();
        displayTime.innerHTML = time.toLocaleTimeString();
    }, 1000);
});
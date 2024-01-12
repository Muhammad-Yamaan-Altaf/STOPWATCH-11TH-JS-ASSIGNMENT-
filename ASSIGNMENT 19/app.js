let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatchInterval;

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    document.querySelector('button:nth-child(1)').disabled = true; // Disable Start button
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    document.querySelector('button:nth-child(1)').disabled = false; // Enable Start button
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.querySelector('button:nth-child(1)').disabled = false; // Enable Start button
}

function updateStopwatch() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
    document.getElementById('milliseconds').innerText = padTime(milliseconds);
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

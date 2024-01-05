let timerRunning = false;
let timerInterval;
let startDate;

function startStopTimer() {
    startDate = new Date();
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('stop').style.display = 'block';
        document.getElementById('go').style.display = 'none';
    } else {
        timerInterval = setInterval(updateTimer, 1); 
        timerRunning = true;
        document.getElementById('go').style.display = 'block';
        document.getElementById('stop').style.display = 'none';
    }
}

function updateTimer() {
    const diffInMilliseconds = Math.abs(
        Date.parse(startDate.toISOString()) -
        Date.now(),
    );
    const diffInSeconds = diffInMilliseconds / 1000;
    console.log(diffInSeconds);
    document.getElementById('timer').innerHTML = diffInSeconds.toFixed(3).padStart(6, "0");
}
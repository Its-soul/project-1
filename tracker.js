let timer;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    timerDisplay.textContent = formatTime(seconds);
    isRunning = false;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Progress Tracker
const goalHours = 10; // Weekly goal
let completedHours = 0;
const progressBar = document.getElementById('progressBar');
const completedHoursDisplay = document.getElementById('completedHours');

function updateProgress() {
    const hoursStudied = seconds / 3600;
    completedHours += hoursStudied;
    const progressPercent = (completedHours / goalHours) * 100;
    progressBar.style.width = `${Math.min(progressPercent, 100)}%`;
    completedHoursDisplay.textContent = completedHours.toFixed(2);
    addSession(hoursStudied);
    resetTimer();
}

// Study Sessions
const sessionList = document.getElementById('sessionList');

function addSession(hours) {
    const sessionItem = document.createElement('li');
    sessionItem.className = 'session-item';
    sessionItem.innerHTML = `
        <span>${new Date().toLocaleString()}</span>
        <span>${hours.toFixed(2)} hours</span>
    `;
    sessionList.prepend(sessionItem);
}

// Save progress when timer is reset
resetBtn.addEventListener('click', updateProgress);
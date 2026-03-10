// GPA Calculator
function calculateGPA() {
    let credits = [
        parseFloat(document.getElementById("credit1").value) || 0,
        parseFloat(document.getElementById("credit2").value) || 0,
        parseFloat(document.getElementById("credit3").value) || 0
    ];

    let grades = [
        parseFloat(document.getElementById("grade1").value) || 0,
        parseFloat(document.getElementById("grade2").value) || 0,
        parseFloat(document.getElementById("grade3").value) || 0
    ];

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        totalCredits += credits[i];
        totalPoints += credits[i] * grades[i];
    }

    let resultText = document.getElementById("gpaResult");

    if (totalCredits === 0) {
        resultText.innerText = "Please enter at least one subject correctly.";
        return;
    }

    let gpa = totalPoints / totalCredits;
    resultText.innerText = "Your GPA is: " + gpa.toFixed(2);
}

// Pomodoro Timer
let timeLeft = 25 * 60;
let timerInterval = null;

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = minutes + ":" + seconds;
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time is up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// Dark Mode
document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// Show initial timer
updateTimerDisplay();
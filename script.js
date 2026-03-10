/* --- Theme Logic --- */
const themeToggle = document.getElementById('theme-toggle');

// Initialize theme on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.checked = true;
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

/* --- Sidebar & Idea Board Logic --- */
function addEvent() {
    const input = document.getElementById('ev-input');
    if (input.value) {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerText = input.value;
        document.getElementById('event-list').appendChild(item);
        input.value = '';
    }
}

function addIdea() {
    const ideaInput = document.getElementById('idea-input');
    const nameInput = document.getElementById('name-input');
    
    if (ideaInput.value && nameInput.value) {
        const li = document.createElement('li');
        li.className = 'event-item';
        // Add both the idea and the contributor name
        li.innerHTML = `${ideaInput.value} <br><small style="opacity:0.7;">By: ${nameInput.value}</small>`;
        document.getElementById('idea-list').appendChild(li);
        
        // Reset fields
        ideaInput.value = '';
        nameInput.value = '';
    } else {
        alert("Please provide both your name and the project idea!");
    }
}

/* --- GPA Logic --- */
function addRow() {
    const div = document.createElement('div');
    div.style.display = "flex"; div.style.gap = "10px"; div.style.marginBottom = "10px";
    div.innerHTML = `<input type="number" class="credits input-modern" placeholder="Credits"><input type="number" class="grades input-modern" placeholder="Grade">`;
    document.getElementById('gpa-container').appendChild(div);
}

function calcGPA() {
    const cr = document.querySelectorAll('.credits');
    const gr = document.querySelectorAll('.grades');
    let pts = 0, totalCr = 0;
    cr.forEach((c, i) => {
        let v = parseFloat(c.value), g = parseFloat(gr[i].value);
        if (v > 0 && !isNaN(g)) { pts += (v * g); totalCr += v; }
    });
    document.getElementById('gpa-res').innerText = (totalCr > 0 ? (pts / totalCr).toFixed(2) : "0.00");
}

/* --- Timer Logic --- */
let timeLeft = 25 * 60;
let timerObj = null;

function setTimer() {
    let m = document.getElementById('custom-min').value;
    if (m > 0) { timeLeft = m * 60; updateDisp(); }
}

function toggleTimer() {
    const btn = document.getElementById('start-btn');
    if (!timerObj) {
        timerObj = setInterval(() => {
            if (timeLeft > 0) { timeLeft--; updateDisp(); }
            else { clearInterval(timerObj); timerObj = null; alert("Time's Up!"); }
        }, 1000);
        btn.innerText = "Pause";
    } else {
        clearInterval(timerObj);
        timerObj = null;
        btn.innerText = "Start";
    }
}

function resetTimer() {
    clearInterval(timerObj);
    timerObj = null;
    timeLeft = 25 * 60;
    updateDisp();
    if(document.getElementById('start-btn')) document.getElementById('start-btn').innerText = "Start";
}

function updateDisp() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    const display = document.getElementById('timer-display');
    if(display) display.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}
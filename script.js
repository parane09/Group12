/* --- Theme Logic --- */
const themeToggle = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.checked = true;
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'dark' : 'light';
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    });
}

/* --- Sidebar Logic --- */
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

// ... GPA and Timer logic remains same as provided previously ...
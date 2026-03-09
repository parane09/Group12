document.addEventListener('DOMContentLoaded', () => {
    const ideaInput = document.getElementById('ideaInput');
    const personSelect = document.getElementById('personSelect');
    const addIdeaBtn = document.getElementById('addIdeaBtn');
    const ideaList = document.getElementById('ideaList');

    function addIdea() {
        const ideaText = ideaInput.value.trim();
        const selectedPerson = personSelect.value;

        if (!ideaText) {
            alert('Please enter an idea!');
            ideaInput.focus();
            return;
        }

        if (!selectedPerson) {
            alert('Please select a name!');
            personSelect.focus();
            return;
        }

        // Get current timestamp
        const now = new Date();
        const timestamp = now.toLocaleDateString(undefined, { 
            month: 'short', 
            day: 'numeric' 
        }) + ' at ' + now.toLocaleTimeString(undefined, { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        // Create idea element
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';

        // Get first letter for avatar
        const initial = selectedPerson.charAt(0).toUpperCase();

        ideaCard.innerHTML = `
            <p class="idea-text">${escapeHtml(ideaText)}</p>
            <div class="idea-meta">
                <div class="avatar">${initial}</div>
                <div class="meta-content">
                    <div class="suggested-by">
                        Suggested by <span class="user-name">${selectedPerson}</span>
                    </div>
                    <div class="timestamp">${timestamp}</div>
                </div>
            </div>
        `;

        // Prepend to list for latest ideas first
        ideaList.insertBefore(ideaCard, ideaList.firstChild);

        // Clear inputs
        ideaInput.value = '';
        personSelect.selectedIndex = 0;
        
        // Visual feedback
        ideaInput.focus();
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    addIdeaBtn.addEventListener('click', addIdea);

    // Allow Enter key to submit
    ideaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIdea();
        }
    });

    // Proactive styling: Focus input on load
    ideaInput.focus();
});

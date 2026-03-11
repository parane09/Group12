document.addEventListener('DOMContentLoaded', () => {
    const ideaInput = document.getElementById('ideaInput');
    const personSelect = document.getElementById('personSelect');
    const addIdeaBtn = document.getElementById('addIdeaBtn');
    const ideaList = document.getElementById('ideaList');

    // Initialize ideas from localStorage
    let ideas = JSON.parse(localStorage.getItem('groupIdeas')) || [];

    function renderIdeas() {
        ideaList.innerHTML = '';
        ideas.forEach((idea, index) => {
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';
            const initial = idea.person.charAt(0).toUpperCase();

            ideaCard.innerHTML = `
                <button class="delete-btn" data-index="${index}" title="Remove Idea">&times;</button>
                <p class="idea-text">${escapeHtml(idea.text)}</p>
                <div class="idea-meta">
                    <div class="avatar">${initial}</div>
                    <div class="meta-content">
                        <div class="suggested-by">
                            Suggested by <span class="user-name">${idea.person}</span>
                        </div>
                        <div class="timestamp">${idea.timestamp}</div>
                    </div>
                </div>
            `;

            // Add delete event listener
            const deleteBtn = ideaCard.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => deleteIdea(index));

            ideaList.insertBefore(ideaCard, ideaList.firstChild);
        });
    }

    function deleteIdea(index) {
        if (confirm('Are you sure you want to delete this idea?')) {
            ideas.splice(index, 1);
            localStorage.setItem('groupIdeas', JSON.stringify(ideas));
            renderIdeas();
        }
    }

    function addIdea() {
        const ideaText = ideaInput.value.trim();
        const selectedPerson = personSelect.value;

        // Validation: Empty or character limit (already in HTML but good to check here)
        if (!ideaText) {
            alert('Please enter an idea!');
            ideaInput.focus();
            return;
        }

        // Validation: Only special characters
        // Ensures there's at least one alphanumeric character
        if (!/[a-zA-Z0-9]/.test(ideaText)) {
            alert('Ideas cannot contain only special characters!');
            return;
        }

        // Validation: Duplicate check (case-insensitive)
        const isDuplicate = ideas.some(i => i.text.toLowerCase() === ideaText.toLowerCase());
        if (isDuplicate) {
            alert('This idea already exists on the board!');
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

        // Add to array
        const newIdea = {
            text: ideaText,
            person: selectedPerson,
            timestamp: timestamp
        };

        ideas.push(newIdea);
        localStorage.setItem('groupIdeas', JSON.stringify(ideas));

        // Update UI
        renderIdeas();

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

    // Initial render and focus
    renderIdeas();
    ideaInput.focus();
});

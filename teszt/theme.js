document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
            updateThemeButton(savedTheme);
        } else {
            body.classList.add('light-theme');
            updateThemeButton('light-theme');
        }
    }

    function updateThemeButton(currentTheme) {
        if (themeToggleButton) {
            if (currentTheme === 'light-theme') {
                themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                updateThemeButton('dark-theme');
            } else {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
                updateThemeButton('light-theme');
            }
        });
    }

    loadTheme();
});
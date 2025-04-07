// Téma váltás kezelése
const themeToggleButton = document.getElementById('theme-toggle');

// Ellenőrizzük a tárolt témát
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Ha nincs tárolt téma, alapértelmezett a világos téma
        document.body.classList.add('light-theme');
    }
}

// Téma váltás
themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});

// Betöltjük a témát, ha már be van állítva
loadTheme();

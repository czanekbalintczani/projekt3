// Bejelentkezés és kijelentkezés funkciók
const loginForm = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');

// Bejelentkezés kezelése
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(`user-${username}-password`);
    const role = localStorage.getItem(`user-${username}-role`);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        window.location.href = 'index.html'; // átirányítás a főoldalra
    } else {
        alert('Hibás felhasználónév vagy jelszó!');
    }
});

// Kijelentkezés
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = 'login.html'; // visszairányítás a bejelentkező oldalra
    });
}

// Admin jogosultságok ellenőrzése
function checkAdminPrivileges() {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
        window.location.href = 'index.html'; // nem admin felhasználók átirányítása a főoldalra
    }
}

// Ha az oldal admin felület, ellenőrizzük a jogosultságot
if (document.body.classList.contains('admin-page')) {
    checkAdminPrivileges();
}

// Ha már be vagy jelentkezve, átirányítunk a főoldalra
if (localStorage.getItem('username')) {
    window.location.href = 'index.html';
}

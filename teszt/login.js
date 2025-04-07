const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(`user-${username}`);
    const storedRole = localStorage.getItem(`user-${username}-role`);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', storedRole);

        window.location.href = 'index.html';
    } else {
        alert('Hibás felhasználónév vagy jelszó!');
    }
});

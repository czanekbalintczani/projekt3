document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;
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
});
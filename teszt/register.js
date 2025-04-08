document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const adminKeyInput = document.getElementById('admin-key');

        const username = usernameInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const adminKey = adminKeyInput.value;

        const isAdmin = adminKey === 'admin123';

        if (password === confirmPassword) {
            localStorage.setItem(`user-${username}`, password);
            localStorage.setItem(`user-${username}-role`, isAdmin ? 'admin' : 'user');
            alert('Regisztráció sikeres!');
            window.location.href = 'login.html';
        } else {
            alert('A jelszavak nem egyeznek!');
        }
    });
});
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const adminKey = document.getElementById('admin-key').value;

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

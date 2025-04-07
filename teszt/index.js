window.onload = function() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (username && role) {
        if (role === 'admin') {
            document.getElementById('admin-panel').style.display = 'block';
        }
        document.getElementById('welcome-message').innerText = `Üdvözlünk, ${username}!`;
    }

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = 'login.html';
    });
};

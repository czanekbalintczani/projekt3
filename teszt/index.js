document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const loginButton = document.getElementById('login-btn');
    const loggedInMenu = document.getElementById('logged-in-menu');
    const logoutButton = document.getElementById('logout-btn');
    const adminPanel = document.getElementById('admin-panel');
    const welcomeMessage = document.getElementById('welcome-message');

    if (username && role) {
        loginButton.style.display = 'none';
        loggedInMenu.style.display = 'block';
        if (role === 'admin') {
            adminPanel.style.display = 'block';
        }
        if (welcomeMessage) {
            welcomeMessage.textContent = `Üdvözöljük újra, ${username}!`;
        }
    } else {
        loginButton.style.display = 'block';
        loggedInMenu.style.display = 'none';
        adminPanel.style.display = 'none';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            window.location.href = 'login.html';
        });
    }
});
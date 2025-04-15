
const loginForm = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(`user-${username}-password`);
    const role = localStorage.getItem(`user-${username}-role`);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        window.location.href = 'index.html'; 
    } else {
        alert('Hibás felhasználónév vagy jelszó!');
    }
});


if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = 'login.html'; 
    });
}


function checkAdminPrivileges() {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
        window.location.href = 'index.html'; 
    }
}

if (document.body.classList.contains('admin-page')) {
    checkAdminPrivileges();
}

if (localStorage.getItem('username')) {
    window.location.href = 'index.html';
}

const addAdminButton = document.getElementById('add-admin-button');
const logoutButton = document.getElementById('logout-button');

addAdminButton.addEventListener('click', () => {
    const newAdminUsername = document.getElementById('new-admin-username').value;
    const newAdminPassword = document.getElementById('new-admin-password').value;

    if (newAdminUsername && newAdminPassword) {
        localStorage.setItem(`admin-${newAdminUsername}`, newAdminPassword);
        alert(`Sikeresen hozzáadva: ${newAdminUsername}`);
    } else {
        alert('Kérlek, add meg a felhasználónevet és a jelszót!');
    }
});

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});
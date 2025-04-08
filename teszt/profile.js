document.addEventListener('DOMContentLoaded', function() {
    const profileDetails = document.getElementById('profile-details');
    const logoutButton = document.getElementById('logout-btn');
    const profileEditForm = document.getElementById('profile-edit-form');
    const username = localStorage.getItem('username');
    const storedEmail = localStorage.getItem(`user-${username}-email`);

    if (username) {
        profileDetails.innerHTML = `
            <p><i class="fas fa-user"></i> Felhasználónév: ${username}</p>
            <p><i class="fas fa-envelope"></i> Email: <span id="current-email">${storedEmail || 'Nincs megadva'}</span></p>
            `;

        // Az űrlap előzetes feltöltése
        if (storedEmail) {
            document.getElementById('email').value = storedEmail;
        }
    } else {
        window.location.href = 'login.html';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            window.location.href = 'login.html';
        });
    }

    if (profileEditForm) {
        profileEditForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newEmail = document.getElementById('email').value;
            localStorage.setItem(`user-${username}-email`, newEmail);
            document.getElementById('current-email').textContent = newEmail;
            alert('Profil adatok mentve!');
        });
    }
});
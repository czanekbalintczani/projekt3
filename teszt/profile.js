const profileDetails = document.getElementById('profile-details');
const username = localStorage.getItem('username');
const email = localStorage.getItem(`user-${username}-email`);
const profileImage = localStorage.getItem('profileImage');

if (username) {
    profileDetails.innerHTML = `
        <p>Felhasználónév: ${username}</p>
        <p>Email: ${email || 'Nincs megadva'}</p>
        ${profileImage ? `<img src="${profileImage}" alt="Profilkép" style="width: 100px; height: 100px;">` : '<p>Nincs profilkép</p>'}
    `;
} else {
    window.location.href = 'login.html';
}
const role = localStorage.getItem('role');
profileDetails.innerHTML += `<p>Szerepkör: ${role || 'nincs megadva'}</p>`;
profileDetails.innerHTML += `<button id="logout-btn">Kijelentkezés</button>`;
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  window.location.href = 'login.html';
});
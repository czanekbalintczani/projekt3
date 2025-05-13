const images = [
    { title: "Credobus Inovell", src: "/pic/tikuld/rwe.jpg", sender: "Szegedi István", date: "2023. október 8.", desc: "RWE-894 a vidéki pályaudvaron várva az indulást." },
    { title: "Credobus Econell", src: "/pic/tikuld/czb.jpg", sender: "Czanek Bálint", date: "2021. szeptember 14.", desc: "Egy Credobus Econell 12 típusú busz váza érkezi Mosonmagyaróvárról a Kühne gyárból" },
    { title: "Mercedes-Benz Conecto G", src: "/pic/tikuld/mb.jpg", sender: "Szegedi István", date: "2024 november 20.", desc: "RVY-642 csanaki vezérgép 28-as járatban LOC 2 parkolóba" },
    { title: "Új logós Inovell", src: "/pic/tikuld/ino.jpg", sender: "Novák Richárd", date: "2025 február 14.", desc: "Megjelentek az első új arculatos buszok is!" },
    { title: "Budapesti látkép", src: "/pic/tikuld/zsom.jpg", sender: "Fogta Béla", date: "2028 február 2.", desc: "Egy bárány a farkasok között" },
    { title: "Új logós Inovell", src: "/pic/tikuld/ino.jpg", sender: "Novák Richárd", date: "2025 február 14.", desc: "Megjelentek az első új arculatos buszok is!" },
    { title: "Új logós Inovell", src: "/pic/tikuld/ino.jpg", sender: "Novák Richárd", date: "2025 február 14.", desc: "Megjelentek az első új arculatos buszok is!" },
    { title: "Új logós Inovell", src: "/pic/tikuld/ino.jpg", sender: "Novák Richárd", date: "2025 február 14.", desc: "Megjelentek az első új arculatos buszok is!" },
    { title: "Mercedes-Benz Conecto G", src: "/pic/tikuld/mb2.jpg", sender: "Szegedi István", date: "2024 november 20.", desc: "RVY-642 csanaki vezérgép a LOC 2 parkolóba" }];





Array.from({ length: 20 }, (_, i) => ({
    title: `Busz #${i + 1}`,
    src: "/pic/vid/hcc475.jpg",
    sender: "Ismeretlen",
    date: "2025-05-01",
    desc: "Leírás nem érhető el."
}));

let centerIndex = 1;
let superlikeUsed = false;

const gallery = document.getElementById("gallery");

function renderGallery() {
    gallery.innerHTML = "";
    for (let i = centerIndex - 1; i <= centerIndex + 1; i++) {
        const index = (i + images.length) % images.length;
        const img = images[index];
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.classList.add(i === centerIndex ? "active" : "inactive");
        card.innerHTML = `
            <div class="card-title">${img.title}</div>
            <img src="${img.src}" alt="${img.title}">
            <div class="card-details">
                <p><strong>Beküldte:</strong> ${img.sender}</p>
                <p><strong>Időpont:</strong> ${img.date}</p>
                <p><strong>Leírás:</strong> ${img.desc}</p>
            </div>
            ${i === centerIndex ? `
            <div class="card-actions">
                <button onclick="handleVote('dislike')" id="dislikeBtn">👎</button>
                <button onclick="handleVote('like')" id="likeBtn">👍</button>
            </div>` : ""}
        `;
        if (i !== centerIndex) {
            card.addEventListener("click", () => {
                centerIndex = index;
                renderGallery();
            });
        }
        gallery.appendChild(card);
    }
}

function showNotification(message, color = "#4CAF50") {
    const note = document.createElement("div");
    note.className = "notification";
    note.style.backgroundColor = color;
    note.innerText = message;
    document.getElementById("notification-container").appendChild(note);
    setTimeout(() => note.remove(), 3000);
}

function handleVote(type) {
    const btn = document.getElementById(type + "Btn");
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 400);

    if (type === "like") {
        showNotification("Örülök hogy tetszett");
    } else if (type === "dislike") {
        showNotification("Sajnálom hogy nem tetszett", "#f44336");
    } else if (type === "superlike") {
        if (!superlikeUsed) {
            superlikeUsed = true;
            showNotification("Köszönöm a támogatást!", "#2196f3");
            const superlikeBtn = document.getElementById("superlikeBtn");
            superlikeBtn.disabled = true;
            superlikeBtn.style.filter = "grayscale(100%) opacity(0.6)";
        } else {
            showNotification("Egy nap csak egy használható", "#ff9800");
            return;
        }
    }

    centerIndex = (centerIndex + 1) % images.length;
    setTimeout(renderGallery, 500);
}

renderGallery();
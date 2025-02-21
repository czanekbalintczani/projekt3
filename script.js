document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("toggle-darkmode");
    const body = document.body;
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    const modal = document.getElementById("video-modal");
    const showVideoButton = document.getElementById("show-video");
    const closeModal = document.querySelector(".close");
    const galleryModal = document.getElementById("gallery-modal");
    const closeGallery = document.querySelector(".close-gallery");
    const table = document.querySelector("table tbody");

    // Sötét mód kapcsoló
    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Minta adatok
    const data = [
        { tipus: "Volvo", rendszam: "ABC-123", elozo_rendszam: "XYZ-789", evjarat: 2012 },
        { tipus: "Ikarus", rendszam: "DEF-456", elozo_rendszam: "LMN-321", evjarat: 2008 }
    ];

    function renderTable() {
        table.innerHTML = "";
        data.forEach((row, index) => {
            let tr = `<tr>
                <td>${row.tipus}</td>
                <td>${row.rendszam}</td>
                <td>${row.elozo_rendszam}</td>
                <td>${row.evjarat}</td>
                <td><button class="gallery-btn" data-index="${index}">📷 Galéria</button></td>
            </tr>`;
            table.innerHTML += tr;
        });

        // Galéria gomb eseménykezelők
        document.querySelectorAll(".gallery-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                openGallery(index);
            });
        });
    }
    renderTable();

    function openGallery(index) {
        const galleryContainer = document.querySelector(".gallery-container");
        galleryContainer.innerHTML = `
            <img src="images/busz_${index}_1.jpg" alt="Busz 1">
            <img src="images/busz_${index}_2.jpg" alt="Busz 2">
        `;
        galleryModal.style.display = "flex";
    }

    closeGallery.addEventListener("click", () => {
        galleryModal.style.display = "none";
    });

    showVideoButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

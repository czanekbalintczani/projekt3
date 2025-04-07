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

    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }

    const data = [
<<<<<<< Updated upstream
        { tipus: "Volvo", rendszam: "ABC-123", elozo_rendszam: "XYZ-789", evjarat: 2012 },
        { tipus: "Ikarus", rendszam: "DEF-456", elozo_rendszam: "LMN-321", evjarat: 2008 },
        { tipus: "Volvo", rendszam: "GHI-789", elozo_rendszam: "ABC-123", evjarat: 2015 },
        { tipus: "Ikarus", rendszam: "JKL-012", elozo_rendszam: "MNO-345", evjarat: 2000 },
        // További adatok
=======
        { db:1, tipus: "Volvo", rendszam: "ABC-123", elozo_rendszam: "XYZ-789", evjarat: 2012 },
        { db:1, tipus: "Ikarus", rendszam: "DEF-456", elozo_rendszam: "LMN-321", evjarat: 2008 }
>>>>>>> Stashed changes
    ];

    function renderTable(filteredData) {
        table.innerHTML = "";
        filteredData.forEach((row, index) => {
            let tr = `<tr>
                <td>${row.db}</td>
                <td>${row.tipus}</td>
                <td>${row.rendszam}</td>
                <td>${row.elozo_rendszam}</td>
                <td>${row.evjarat}</td>
                <td><button class="gallery-btn" data-index="${index}">📷 Galéria</button></td>
            </tr>`;
            table.innerHTML += tr;
        });

        document.querySelectorAll(".gallery-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                openGallery(index);
            });
        });
    }

    function searchTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(row => 
            row.tipus.toLowerCase().includes(searchTerm) ||
            row.rendszam.toLowerCase().includes(searchTerm) ||
            row.elozo_rendszam.toLowerCase().includes(searchTerm) ||
            row.evjarat.toString().includes(searchTerm)
        );
        renderTable(filteredData);
    }

    function filterTable() {
        const selectedFilter = filterSelect.value;
        const filteredData = data.filter(row => 
            selectedFilter === "" || row.tipus.toLowerCase() === selectedFilter.toLowerCase()
        );
        renderTable(filteredData);
    }

    searchInput.addEventListener("keyup", searchTable);
    filterSelect.addEventListener("change", filterTable);

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

    renderTable(data); // Kezdeti renderelés
});

// Adatok JSON formátumban
const buszAdatok = [
    { id: 1, tipus: "Irisbus Crossway", rendszam: "NKW-902", elozoRendszam: "Y 260 003", evjarat: "2010", beszerzes: "2016.02.10." },
    { id: 2, tipus: "Irisbus Crossway", rendszam: "NKW-905", elozoRendszam: "Y 260 687", evjarat: "2010", beszerzes: "2016.02.10." },
    { id: 3, tipus: "Irisbus Crossway", rendszam: "NKW-906", elozoRendszam: "Y 255 410", evjarat: "2010", beszerzes: "2016.02.10." },
    { id: 4, tipus: "Irisbus Crossway", rendszam: "NKW-907", elozoRendszam: "Y 267 079", evjarat: "2011", beszerzes: "2016.02.10." },
    { id: 5, tipus: "Irisbus Crossway", rendszam: "NKW-908", elozoRendszam: "Y 260 567", evjarat: "2010", beszerzes: "2016.02.10." },
    { id: 6, tipus: "Volvo 8900 LE", rendszam: "SWR-556", elozoRendszam: "-", evjarat: "2021", beszerzes: "2021.11.22." },
    { id: 7, tipus: "Volvo 8900 LE", rendszam: "SWR-557", elozoRendszam: "-", evjarat: "2021", beszerzes: "2021.11.23." },
    { id: 8, tipus: "Volvo 8900 LE", rendszam: "SWR-558", elozoRendszam: "-", evjarat: "2021", beszerzes: "2021.11.23." },
    { id: 9, tipus: "Volvo 8900 LE", rendszam: "SWR-559", elozoRendszam: "-", evjarat: "2021", beszerzes: "2021.11.23." },
    { id: 10, tipus: "Volvo 8900 LE", rendszam: "SWR-560", elozoRendszam: "-", evjarat: "2021", beszerzes: "2021.11.23." },
    // További adatok...
];

// Táblázat feltöltése
function tablazatFeltoltes() {
    const tablaBody = document.querySelector("table tbody");
    tablaBody.innerHTML = ""; // Táblázat ürítése

    buszAdatok.forEach(busz => {
        const sor = document.createElement("tr");
        sor.innerHTML = `
            <td>${busz.id}.</td>
            <td>${busz.tipus}</td>
            <td>${busz.rendszam}</td>
            <td>${busz.elozoRendszam}</td>
            <td>${busz.evjarat}</td>
            <td>${busz.beszerzes}</td>
            <td><button class="galeria-gomb" onclick="galeriaMegnyitas(${busz.id})">📷</button></td>
        `;
        tablaBody.appendChild(sor);
    });
}

// Galéria megnyitása
function galeriaMegnyitas(buszId) {
    const busz = buszAdatok.find(b => b.id === buszId);
    if (busz) {
        const galeriaPopup = document.getElementById("galeriaPopup");
        galeriaPopup.innerHTML = `
            <button class="bezaras-gomb" onclick="galeriaBezaras()">Bezárás</button>
            <div>
                <img src="busz${buszId}_1.jpg" alt="${busz.tipus} ${busz.rendszam}" onclick="nagyitottKepMegjelenitese(this.src)">
                <img src="busz${buszId}_2.jpg" alt="${busz.tipus} ${busz.rendszam}" onclick="nagyitottKepMegjelenitese(this.src)">
            </div>
        `;
        galeriaPopup.style.display = "block";
    }
}

// Galéria bezárása
function galeriaBezaras() {
    document.getElementById("galeriaPopup").style.display = "none";
}

// Nagyított kép megjelenítése
function nagyitottKepMegjelenitese(src) {
    document.getElementById("nagyitottKep").src = src;
    document.getElementById("nagyitottKepPopup").style.display = "block";
}

// Nagyított kép bezárása
function nagyitottKepBezaras() {
    document.getElementById("nagyitottKepPopup").style.display = "none";
}

// Sötét mód váltása
function sotetModValtasa() {
    document.body.classList.toggle("sotet-mod");
}

// Oldal betöltésekor feltöltjük a táblázatot
document.addEventListener("DOMContentLoaded", tablazatFeltoltes);
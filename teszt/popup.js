// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 4000);

// Cikk popup
const articles = {
    1: {
        title: "2025. április 4.",
        content: "Több új olvasói fotóval frissült a 'Ti küldtétek' rovat. Köszönjük a beküldéseket!"
    },
    2: {
        title: "2025. március 25.",
        content: "Év eleji állományváltozások Győr-Moson-Sopron megyében. Részletek az állomány oldalon."
    }
};

function showArticle(id) {
    const popup = document.getElementById("popup-overlay");
    const content = document.getElementById("popup-content");

    content.innerHTML = `<h2>${articles[id].title}</h2><p>${articles[id].content}</p>`;
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}

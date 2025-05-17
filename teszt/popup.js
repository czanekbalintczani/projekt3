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
    },
    3: {
        title: "2025. május 12.",
        content: "A Tour de Hongrie biztosítása érdekében több helyen forgalomkorlátozásokra és parkolási tilalmakra kell számítani: A célterületen tilos lesz megállni a Nagysándor József utcában már május 12-én hétfőn 18 órától. A teljes lezárás ezen az útszakaszon 13-án kedden 8 órától 21 óráig tart majd.Az Ipar utcán május 13-án 18 órától  nem lehet majd megállni. A teljes lezárás 14-én 8 órakor kezdődik. Emellett hétfőn lezárják a parkolókat is az ETO Park körül. Az egyiket már 9, a másikat 18 órától. A verseny útvonalán – ami az alábbi térképen a sárgával jelölt utcákat érinti -, május 14-én 8-16 óra között tilos a megállás. A teljes lezárás várhatóan 15:30-tól 16 óráig tart majd."
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

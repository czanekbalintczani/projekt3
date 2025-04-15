const updates = {
    1: `
        <h2>2025. április 4.</h2>
        <p>Több új olvasói fotóval, köztük az új MÁV-csoportos arculatot elsők között hordozó megyei autóbusz fotóival frissült a gyoribuszok.hu <strong>Ti küldtétek</strong> rovata.</p>
    `,
    2: `
        <h2>2025. március 25.</h2>
        <p>Év eleji állományváltozások Győr-Moson-Sopron megyében.<br>Részletek a <strong>HÍREK</strong> menüpont alatt.</p>
    `,

};

function showArticle(id) {
    const content = updates[id];
    if (!content) return;

    document.getElementById("updates").style.display = "none";
    document.getElementById("article-details").style.display = "block";
    document.getElementById("article-content").innerHTML = content;
}

function goBack() {
    document.getElementById("article-details").style.display = "none";
    document.getElementById("updates").style.display = "block";
}

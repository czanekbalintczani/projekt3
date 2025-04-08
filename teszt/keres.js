function renderBuses(data) {
    const busList = document.getElementById('busList');
    busList.innerHTML = '';
    data.forEach(bus => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bus.type}</td>
            <td>${bus.plate}</td>
            <td>${bus.year}</td>
            <td><button class="gallery-button" onclick="openGallery(${bus.id})">Galéria</button></td>
        `;
        busList.appendChild(row);
    });
}
function sortBuses(criteria) {
    let sortedData;
    if (criteria === 'type') {
        sortedData = [...busData].sort((a, b) => a.type.localeCompare(b.type));
    } else if (criteria === 'plate') {
        sortedData = [...busData].sort((a, b) => a.plate.localeCompare(b.plate));
    } else if (criteria === 'year') {
        sortedData = [...busData].sort((a, b) => a.year - b.year);
    }
    renderBuses(sortedData);
}
function searchBus() {
    const searchQuery = document.getElementById('busSearch').value.toLowerCase();
    const filteredBuses = busData.filter(bus => bus.type.toLowerCase().includes(searchQuery) || bus.plate.toLowerCase().includes(searchQuery));
    renderBuses(filteredBuses);
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
renderBuses(busData);
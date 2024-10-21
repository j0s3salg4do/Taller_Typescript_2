const series = [
    { id: 1, name: 'Suits', description: 'Un joven con memoria fotográfica comienza a trabajar en un prestigioso bufete de abogados sin tener título de derecho.', imageUrl: 'suits.jpg' },
    { id: 2, name: 'Peaky Blinders', description: 'Una familia de gánsteres en Birmingham, Inglaterra, justo después de la Primera Guerra Mundial.', imageUrl: 'peakyblinders.jpg' },
    { id: 3, name: 'La Casa de Papel', description: 'Un grupo de criminales realiza el mayor atraco en la historia de España, bajo el mando del enigmático "El Profesor".', imageUrl: 'lacasadepapel.jpg' },
    { id: 4, name: 'Dark', description: 'Misterios en un pequeño pueblo alemán donde la desaparición de niños revela secretos familiares y una conexión con el tiempo.', imageUrl: 'dark.jpg' },
];

function renderSeriesList() {
    const seriesList = document.getElementById('series-list');
    if (seriesList) {
        let listContent = '';
        for (let i = 0; i < series.length; i++) {
            listContent += `
                <div class="card mb-2" style="cursor: pointer;" onclick="showDetail(${series[i].id})">
                    <div class="card-body">
                        <h5 class="card-title">${series[i].name}</h5>
                    </div>
                </div>
            `;
        }
        seriesList.innerHTML = listContent;
    }
}

function showDetail(id: number) {
    const serie = series.find(s => s.id === id);
    const seriesDetail = document.getElementById('series-detail');
    if (seriesDetail && serie) {
        seriesDetail.innerHTML = `
            <div class="card">
                <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.name}">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                </div>
            </div>
        `;
    }
}

renderSeriesList();

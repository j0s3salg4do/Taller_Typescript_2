var series = [
    { id: 1, name: 'Suits', description: 'Un joven con memoria fotográfica comienza a trabajar en un prestigioso bufete de abogados sin tener título de derecho.', imageUrl: 'suits.jpg' },
    { id: 2, name: 'Peaky Blinders', description: 'Una familia de gánsteres en Birmingham, Inglaterra, justo después de la Primera Guerra Mundial.', imageUrl: 'peakyblinders.jpg' },
    { id: 3, name: 'La Casa de Papel', description: 'Un grupo de criminales realiza el mayor atraco en la historia de España, bajo el mando del enigmático "El Profesor".', imageUrl: 'lacasadepapel.jpg' },
    { id: 4, name: 'Dark', description: 'Misterios en un pequeño pueblo alemán donde la desaparición de niños revela secretos familiares y una conexión con el tiempo.', imageUrl: 'dark.jpg' },
];
function renderSeriesList() {
    var seriesList = document.getElementById('series-list');
    if (seriesList) {
        var listContent = '';
        for (var i = 0; i < series.length; i++) {
            listContent += "\n                <div class=\"card mb-2\" style=\"cursor: pointer;\" onclick=\"showDetail(".concat(series[i].id, ")\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(series[i].name, "</h5>\n                    </div>\n                </div>\n            ");
        }
        seriesList.innerHTML = listContent;
    }
}
function showDetail(id) {
    var serie = series.find(function (s) { return s.id === id; });
    var seriesDetail = document.getElementById('series-detail');
    if (seriesDetail && serie) {
        seriesDetail.innerHTML = "\n            <div class=\"card\">\n                <img src=\"".concat(serie.imageUrl, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.description, "</p>\n                </div>\n            </div>\n        ");
    }
}
renderSeriesList();

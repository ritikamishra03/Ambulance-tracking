// Initialize and add the map
let map;

function initMap() {
    var map = L.map('map', {
        center: [22.7196, 75.8577],
        zoom: 13
    });

    var latlng = L.latLng(22.7196, 75.8577);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 8,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

}

initMap();


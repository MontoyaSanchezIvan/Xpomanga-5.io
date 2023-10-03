var mymap = L.map('mapa').setView([36.87864535868253, -2.440069065396971], 17);

L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
}).addTo(mymap);

var marker = L.marker([36.87864535868253, -2.440069065396971]).addTo(mymap);
marker.bindPopup("<b>¡Aquí estamos!</b>").openPopup();


//Create map
var map = L.map('map').setView([-1.456510, -48.477517], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoicnViZW5zYnJhZ2EiLCJhIjoiY2p4ZXlvamZ1MDVsejN1cXVlZmdmbHNzbSJ9._Km-CBTnfHGV_XD7QLrDOg'
}).addTo(map);

//Geolocation
map.locate({
	setView: true,
	maxZoom: 15
});

//Add popup
var popup = L.popup();

function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent("You clicked the map at " + e.latlng.toString())
	.openOn(map);
}

map.on('click', onMapClick);

//Add marker on user location
function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng).addTo(map)
	.bindPopup("Você está aqui.").openPopup();
}

map.on('locationfound', onLocationFound);

//Add coordinates on textbox
map.on('click', function(e) {
	var lat = e.latlng.lat;
	var lng = e.latlng.lng;
	document.getElementById('coordlat').value = lat;
	document.getElementById('coordlng').value = lng;
});

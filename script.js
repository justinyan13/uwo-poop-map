var map = L.map('map',{
  center: [43.64701, -79.39425],
  zoom: 15
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var poopIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/398061/pile-of-poo.svg',
    iconSize: [38, 95], // size of the icon
    });

var marker = L.marker([43.64701, -79.39425], {icon: poopIcon}).addTo(map);



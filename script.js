var map = L.map('map', {
  center: [43.00440161562366, -81.27666879177272],
  zoom: 15,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var poopIcon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/398061/pile-of-poo.svg',
  iconSize: [38, 95], // size of the icon
  popupAnchor: [0, -15],
});

var customPopup =
  "Bill's Favorite Sona!<br><img src='https://media3.giphy.com/media/17C41UvchStTkd92UQ/giphy.gif?cid=790b76113bd14c764941c46c1d72d451d49057dc8e5bdce3&rid=giphy.gif&ct=g' alt='maptime logo gif' width='350px'/>";

var customOptions = {
  maxWidth: '500',
  className: 'custom',
};

var marker = L.marker([43.004566832424494, -81.27834767566313], {
  icon: poopIcon,
})
  .bindPopup(customPopup, customOptions)
  .addTo(map);

// spencer engineering marker
var customPopupEngineering =
  "Engineering 2nd Floor ⭐⭐⭐⭐<br><img src='https://giphy.com/embed/bWM8K7vMziAJavYko6' alt='maptime logo gif' width='350px'/>";

var customOptionsEngineering = {
  maxWidth: '500',
  className: 'custom',
};

var marker2 = L.marker([43.00559199077692, -81.27611799436883], {
  icon: poopIcon,
})
  .bindPopup(customPopupEngineering, customOptionsEngineering)
  .addTo(map);
;

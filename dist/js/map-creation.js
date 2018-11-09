const data = [
  {
    "name": "Bank Generation",
    "address": "Av. Paulista, 2163 - Bela Vista",
    "agencyNumber": "2163",
    "phone": "(11) 2159-4050",
    "lat": -23.558090,
    "long": -46.660580
  },
  {
    "name": "Bank Generation",
    "address": "Av. Paulista, 2421 - Bela Vista",
    "agencyNumber": "2421",
    "phone": "0800 729 0722",
    "lat": -23.556621,
    "long": -46.662494
  },
  {
    "name": "Bank Generation",
    "address": "Av. Paulista, 1230 - Bela Vista",
    "agencyNumber": "1230",
    "phone": "(11) 4003-3001",
    "lat": -23.563929,
    "long": -46.652656
  }
]
  
function showAgenciesLocation() {
  const map = L.map('mapContainer').setView([-23.557633, -46.662270], 18);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const popup = L.popup();

  const orangePin = L.icon({
    iconUrl: '/dist/js/marker-icon-orange.png'
  });

  const bluePin = L.icon({
    iconUrl: '/dist/js/marker-icon-blue.png'
  });

  popup
  .setLatLng([-23.557633, -46.662270])
  .setContent("Você está aqui!")
  .addTo(map)
  L.marker([-23.557633, -46.662270], {icon: orangePin}).addTo(map)

  data.map(agency => {
    L.marker([agency.lat, agency.long], { icon: bluePin }).addTo(map)
      .bindPopup(`<div class="info-bubble">
        <p class="info-text">${agency.name}</p>
        <p class="info-text">${agency.address}</p>
        <p class="info-text">Agência: ${agency.agencyNumber}</p>
        <p class="info-text">Telefone: ${agency.phone}</p>
      </div>`)
  })

  function onMapClick(e) {
    popup
    .openOn(map);
  }
  map.on('click', onMapClick);
} showAgenciesLocation()

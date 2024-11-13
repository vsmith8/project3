let map;
let marker;
let infoWindow;

function initMap() {
  
  const center = { lat: 44.429, lng: -110.584 }; 

  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 8,
  });


  marker = new google.maps.Marker({
    position: { lat: 44.429, lng: -110.584 }, 
    map: map,
    title: "This is a custom marker",
  });
  
  infoWindow = new google.maps.InfoWindow({
    content: "<h3>Custom Marker</h3><p>This is an example of a custom marker with an info window.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  google.maps.event.addListener(map, "click", function (event) {
    const clickedLocation = event.latLng;

    new google.maps.Marker({
      position: clickedLocation,
      map: map,
      title: "New Marker",
    });
  });
}

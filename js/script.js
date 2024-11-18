function initMap() {
  var el = document.getElementById('map');
  var ace = new google.maps.LatLng(42.401489, -86.272621);

  var mapOptions = {
    center: ace,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: ace,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
  });

  var contentString = '<h1>Wolverine Ace Hardware</h1>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  
  const pic = document.createElement("img");

  pic.src =
  "images/download.jpg";

  const beachFlagMarkerView = new AdvancedMarkerElement({
    map,
    position: ace,
    content: pic,
    title: "A marker using a custom PNG Image",
  });
}

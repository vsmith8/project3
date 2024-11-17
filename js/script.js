function initMap() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(42.401489, -86.272621);

  var mapOptions = {
    center: myLocation,
    zoom: 16,
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
    position: myLocation,
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

  var secondLocation = new google.maps.LatLng(42.402640, -86.282971);

  var secondMarker = new google.maps.Marker({
    position: secondLocation,
    map: myMap,
    animation: google.maps.Animation.DROP, // Drop animation for the icon
  });

  var secondInfoWindow = new google.maps.InfoWindow({
    content: '<h1>North Beach and South Haven Pier</h1><p>This really fun part of town on the public beach with easy pier and harbor access.</p>'
  });

  google.maps.event.addListener(secondMarker, 'mouseover', function() {
    secondInfoWindow.open(myMap, secondMarker);
  });
}

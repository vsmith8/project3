function initMap() {
  // Get the map container by its ID
  var el = document.getElementById('map');

  // Set the initial location for the map
  var myLocation = new google.maps.LatLng(42.403115, -86.275943);

  // Map options
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

  // Create the map with the specified options
  var myMap = new google.maps.Map(el, mapOptions);

  // Create a marker at the initial location
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
  });

  // Content for the info window on the first marker
  var contentString = '<h1>West End of Downtown South Haven</h1><p>The western end of the South Haven downtown area. Just around the corner is this incredible hot dog restaurant called Chomp. I am starving right now. Send help. :( </p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Add a mouseover event listener to the first marker to show the info window
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });

  // Add a second marker at a different location (North Beach)
  var secondLocation = new google.maps.LatLng(42.402640, -86.282971);

  var secondMarker = new google.maps.Marker({
    position: secondLocation,
    map: myMap,
    animation: google.maps.Animation.DROP, // Drop animation
  });

  var secondInfoWindow = new google.maps.InfoWindow({
    content: '<h1>North Beach and South Haven Pier</h1><p>This really fun part of town on the public beach with easy pier and harbor access.</p>'
  });

  // Add mouseover event for the second marker to show its info window
  google.maps.event.addListener(secondMarker, 'mouseover', function() {
    secondInfoWindow.open(myMap, secondMarker);
  });

  // Initialize a Street View panorama for the given location
  var streetViewControl = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
    position: myLocation,
    pov: { heading: 165, pitch: 0 }
  });

  // Set the Street View on the map
  myMap.setStreetView(streetViewControl);
}

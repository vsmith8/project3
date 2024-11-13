function initMap() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(42.403115, -86.275943);

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

  var contentString = '<h1>West End of Downtown South Haven</h1><p>The western end of the South Haven downtown area. Just around the corner is this incredible hot dog restaurant called Chomp. I am starving right now. Send help. :( </p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  
 // add custom street view
  var streetViewControl = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
    position: myLocation,
    pov: { heading: 165, pitch: 0 }
  });
  
  myMap.setStreetView(streetViewControl);
}

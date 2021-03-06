//Google Maps Scripts
 var map = null;
//When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, 'load', init);
 google.maps.event.addDomListener(window, 'resize', function() {
   map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

 function init() {
  //Basic options for a simple Google Map
  //For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
   var mapOptions = {
    //How zoomed in you want the map to start at (always required)
     zoom: 15,

    //The latitude and longitude to center the map (always required)
     center: new google.maps.LatLng(40.6700, -73.9400), // New York

   // Disables the default Google Maps UI components
     disableDefaultUI: true,
     scrollwheel: false,
     draggable: true,

    //How you would like to style the map.
    //This is where you would paste any style found on Snazzy Maps.
     styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 40
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 50
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 50
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#5cf1be"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#5cf1be"
      }, {
        "lightness": 80
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#5cf1be"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  };

  //Get the HTML DOM element that will contain your map
  //We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  //Create the Google Map using out element and options defined above
   map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
   var image = 'img/location-white.png';
   var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
   var beachMarker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     icon: image
   });
 }
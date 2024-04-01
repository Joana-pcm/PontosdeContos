"use strict";
window.onload = function() {
	
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(41.149078, -8.621882),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d1d1d1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#878787"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#727272"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#171717"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#9e9e9e"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
	};
    
		
	var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    
   var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.157013, -8.627876),
        map: map,
        icon: "img/mf_mark.png",
        animation: google.maps.Animation.DROP,

        title: 'Mundo Fantasma'});
    
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(41.152844, -8.614280),
        map: map,
        icon: "img/cv_mark.png",
        animation: google.maps.Animation.DROP,
        size: new google.maps.Size(20, 32),
        title: 'Confraria Vermelha'});
    
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(41.149346, -8.614853),
        map: map,
        icon: "img/pt_mark.png",
        animation: google.maps.Animation.DROP,
        size: new google.maps.Size(20, 32),
        title: 'Poetria'});
    
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(41.146908, -8.614777),
        map: map,
        icon: "img/ll_mark.png",
        animation: google.maps.Animation.DROP,
        size: new google.maps.Size(20, 32),
        title: 'Lello'});
    
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(41.143485, -8.614247),
        map: map,
        icon: "img/cm_mark.png",
        animation: google.maps.Animation.DROP,
        size: new google.maps.Size(20, 32),
        title: 'Chaminé da Mota'});
    
  
    // desenhar caminhos
    
    var locations = ['Shopping Center Brasília, 4050-115 Porto, Portugal',
        'Rua dos Bragas 32, 4050-183 Porto',
        'Rua das Oliveiras 72, 4050-448 Porto',
        'R. das Carmelitas 144, 4050-161 Porto',
        'R. das Flores 18, 4050-485 Porto'];
    
    var waypoints = [];
    for (var n = 0; n < locations.length; n++) waypoints.push({
        location: locations[n],
        stopover: true
    });
    
    var directions_renderer;
    var directions_service;
    var directions_request;
    var status;
    
    var directionsOptions = {
        polylineOptions: {
            strokeColor: '#666666'
        },
        suppressMarkers: true,
    }

    directions_renderer = new google.maps.DirectionsRenderer(directionsOptions);
    directions_service = new google.maps.DirectionsService();
    directions_renderer.setMap(map);
    directions_request = {
        origin: locations[0],
        destination: locations[locations.length - 1],
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.WALKING,
        optimizeWaypoints: true
    };
    directions_service.route(directions_request, function(response, status) {
        
        if (status == google.maps.DirectionsStatus.OK) directions_renderer.setDirections(response);
        else window.alert('Impossível encontrar o caminho.');
        
    });
      }
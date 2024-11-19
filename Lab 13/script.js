mapboxgl.accessToken = "pk.eyJ1IjoiZWRpc29ueXV6aGVuZyIsImEiOiJjbTF0YmZ3b2MwMGxzMmtweHRnamw5Y2trIn0.ExO2dvkfY0gRsPxIxcQZ4w ";

const map = new mapboxgl.Map({
	container: "Zheng",
	style: 'mapbox://styles/edisonyuzheng/cm3hkt8vd00d501rv0mu058bf',
	center: [-122.42548, 37.78923],
	zoom: 12.54,
	pitch: 45.00,
	bearing: -40.00,
	minZoom: 9
	});

map.on('load', function () {
	// MORE CODE WILL GO INSIDE HERE
	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://edisonyuzheng.4wdrgj27'
      });

    map.addLayer({
    'id':'restaurantLayer',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'Historical_Restaurant_Inspect-bk13mv',
        "print": {
        'circle-opacity': 0.3,
			'circle-color':
				['step',
					['to-number', ['get', 'inspection_score']],
					'#66ccff',  
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]
        }
    });

   console.log('My name is YOUR-NAME');
   map.on('mouseenter', 'restaurantLayer', (e) => {
   	console.log(e.features[0])
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
    })

})

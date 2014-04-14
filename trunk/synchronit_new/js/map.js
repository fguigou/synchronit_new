$(window).load(function(){ // after loading the DOM
    $("#ajax_contact_form").submit(function(){
			// this points to our form
			var str = $(this).serialize(); // Serialize the data for the POST-request
			$(this).html("<div class=\"notification_ok\"><h2>Message was sent, thank you!</h2></div>");// If a message is sent, the user thanks
			$.ajax({
				type: "POST",
				url: "contact.php",
				data: str,
				success: function (msg){
					$("#note").ajaxComplete(function (event, request, settings) {
						if (msg == 'OK'){
							result = "<div class=\"notification_ok\">Message was sent, thank you!</div>";
							$("#fields-main").hide();
						}
						else {
							result = msg;
						}
					});
				}
			});
			return false;
		});
});

//Google Map	
	var mapSwiss;
	var mapGer;
	var mapUy;
	var mapFra;
	 var styles = [
			{
			  stylers: [
				{ hue: "#533f1b" },
				{ saturation: -80 },
				{ lightness: -20 }
			  ]
			},{
			  featureType: "road.arterial",
			  elementType: "geometry",
			  stylers: [
				{ lightness: 100 },
				{ visibility: "simplified" }
			  ]
			},{
			  featureType: "road",
			  elementType: "labels",
			  stylers: [
				{ visibility: "off" }
			  ]
			}
		  ];
		  
		  
		function initialize() {
		     swissMap();
		     germanMap();
		     uruguayMap();
		     franceMap();
		}
		
		function swissMap() {
		 // Create an array of styles.
		 

		  // Create a new StyledMapType object, passing it the array of styles,
		  // as well as the name to be displayed on the map type control.
		  var styledMap = new google.maps.StyledMapType(styles,
			{name: "Styled Map"});
			
			// Map Coordinates
			var myLatlng = new google.maps.LatLng(47.21626,8.572229);
			var mapOptions = {
				zoom: 16,
				center: myLatlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			mapSwiss = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			//Marker Coordinates
			 var marker = new google.maps.Marker({
			  position:  new google.maps.LatLng(47.21626,8.572229),
			  map: mapSwiss
			});
			
			 mapSwiss.mapTypes.set('map_style', styledMap);
			 mapSwiss.setMapTypeId('map_style');

		}
		
	
		
		function germanMap() {
		  var styledMap = new google.maps.StyledMapType(styles,
			{name: "Styled Map II"});
			
			// Map Coordinates
			var myLatlng = new google.maps.LatLng(48.137647,11.534657);
			var mapOptions = {
				zoom: 16,
				center: myLatlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			mapGer = new google.maps.Map(document.getElementById('map-canvas-ger'), mapOptions);
			
			//Marker Coordinates
			 var marker = new google.maps.Marker({
			  position:  new google.maps.LatLng(48.137647,11.534657),
			  map: mapGer
			});
			
			 mapGer.mapTypes.set('map_style', styledMap);
			 mapGer.setMapTypeId('map_style');

		}
		
		function uruguayMap() {
			  var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map III"});
				
				// Map Coordinates
				var myLatlng = new google.maps.LatLng(-34.906953,-56.167823);
				var mapOptions = {
					zoom: 16,
					center: myLatlng,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				mapUy = new google.maps.Map(document.getElementById('map-canvas-uy'), mapOptions);
				
				//Marker Coordinates
				 var marker = new google.maps.Marker({
				  position:  new google.maps.LatLng(-34.906953,-56.167823),
				  map: mapUy
				});
				
				 mapUy.mapTypes.set('map_style', styledMap);
				 mapUy.setMapTypeId('map_style');
				 
			}
		
		function franceMap() {
			  var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map IV"});
				
				// Map Coordinates
				var myLatlng = new google.maps.LatLng(43.698713,7.268892);
				var mapOptions = {
					zoom: 16,
					center: myLatlng,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				mapFra = new google.maps.Map(document.getElementById('map-canvas-fra'), mapOptions);
				
				//Marker Coordinates
				 var marker = new google.maps.Marker({
				  position:  new google.maps.LatLng(43.698713,7.268892),
				  map: mapFra
				});
				
				 mapFra.mapTypes.set('map_style', styledMap);
				 mapFra.setMapTypeId('map_style');
			}
		
		google.maps.event.addDomListener(window, 'load', initialize);

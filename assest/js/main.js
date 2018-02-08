function initMap(){
	
	var laboratoriaChile = { lat:-33.4488897, lng:-70.6692655 }
	var map = new google.maps.Map(document.getElementById('map'), { 
		Zoom: 18,
		center:laboratoriaChile 
  });
	var marketLaboratoria = new google.maps.Marker({
		position: laboratoriaChile,
		map:map

  });


	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click",buscar);

  var latitud, longitud;
  var funcionExito = function (position){
  	 latitud = position.coords.latitude;
  	longitud = position.coords.longitude;
  

	 var miUbicacion = new google.maps.Marker({
			position : {lat:latitud, lng:longitud},
			nimation: google.maps.Animation.DROP,
			map: map
	 	});

	 map.setZoom(18);
	 map.setCenter({lat:latitud, lng:longitud});
  }

	var funcionError = function (error){
		alert("Tenemos un problema con encontrar tu ubicacion");
	}

//document.getElementById("encuentrame").addEventListener("click",buscar);

	var inputPartida = document.getElementById("punto-partida");
	var inputDestino = document.getElementById("punto-destino");

	new google.maps.places.Autocomplete(inputPartida);
	new google.maps.places.Autocomplete(inputDestino);

	var directionsService = new google.maps.DirectionsService();//obtener coordenadas
	var directionsDisplay = new google.maps.DirectionsRenderer();//traduce coordenadas de la ruta visible

document.getElementById("traza-ruta").addEventListener("click",trazaRuta);
	var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
		directionsService,route({
				origin: inputPartida.value,
				destination: inputDestino.value,
				travelMode: "DRIVING"
			}, function(response, status){
				if (status === "ok"){
					directionsDisplay.setDirections(response);
				}else{
					window.alert("no encontramos una ruta");
				};
		});
	}
	directionsDisplay.setMap(map);
	 var trazaRuta = function(){
	 	   calculateAndDisplayRoute(directionsService,directionsDisplay);
	 };
	 //document.getElementById("traza-ruta").addEventListener("click",trazaRuta);
}

/*
function findMe(){
	var output = document.getElementById('map'); //llamamos al id del html
	  if(navigator.geolocation){ //verificar que el navegador soporte geolocation
	  	 output.innerHTML = "<p>Tú navegador soporta geolocalización</P>";
		}else{
		 output.innerHTML = "<p>Tú navegador no soporta geolocalización</P>";
		}
		function localizacion(posicion){//funcion que se obtiene latitud y longitude que nos encontramos
			var latitud = posicion.coords.latitude; 
			var longitude = posicion.coords.latitude;
			output.innerHTML = "<p>Latitud:"+latitud+"<br>Longitude"+longitude+"</P>"; //imprime

      var imgURL =      


		}
		function error(){
	        output.innerHTML = "<p>No se pudo obtener tú ubicación</P>";
		}
            navigator.geolocation.getCurrentPosition(localizacion,error)//para obtener la ubicación actual del usuario se usa el metodo getCurr..., se le pasan como parametros las dos funciones creadas
}*/
//--------------------------------------------------------------------------------------------------
// lo primero que hay que hacer es que mi navegador soporte la geolocalizacion
// despues se crean las funciones que reciben como paramatros nuestro metodo getCurretposition
// que es la funcion localizacion y funcion arror y por ultimo se pasa como parametro
// la locacion y error .-
//-------------------------------------------------------------------------------------------------

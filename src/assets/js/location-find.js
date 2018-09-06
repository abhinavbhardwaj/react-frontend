function initMap() {
  var input = document.getElementById('enter_location');

  var autocomplete = new google.maps.places.Autocomplete(input);
 
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
	var enter_lat = document.getElementById('enter_lat').innerHTML = place.geometry.location.lat();
    var enter_lon = document.getElementById('enter_lon').innerHTML = place.geometry.location.lng();	
	$('#enter_latitude').val(enter_lat);
	$('#enter_longitude').val(enter_lon);
	
	$('#slatitude').val(enter_lat);
	$('#slongitude').val(enter_lon);
	
    document.getElementById('placeInfo').innerHTML = '<div><strong>' + place.name + '</strong><br>' + address;    
  });
}
	
	var x = document.getElementById("demo");
	function getLocation() {
		$('.sub_loc').hide();
		$(".yrloc .spinner").show();
		$(".yrloc .fa-compass").hide();	
		if (navigator.geolocation) {
			
			navigator.geolocation.getCurrentPosition(showPosition);
		} else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		}						
	}

	function showPosition(position) {	
		var yrlat = x.innerHTML = position.coords.latitude;
		var yrlon = x.innerHTML = position.coords.longitude;
		var latlng = new google.maps.LatLng(yrlat, yrlon);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			var yradd = results[1].formatted_address;
			$('#enter_location').val(yradd);
			$('#enter_latitude').val(yrlat);
			$('#enter_longitude').val(yrlon);		
			$('#slocation').val(yradd);
			$('#slatitude').val(yrlat);
			$('#slongitude').val(yrlon);
			$('input[name="location"]').val(yradd);
			$('input[name="latitude"]').val(yrlat);
			$('input[name="longitude"]').val(yrlon);
			var data = { action: 'is_user_logged_in', enter_location:yradd, enter_latitude:yrlat, enter_longitude:yrlon };
			jQuery.post(ajaxurl, data);
			
		});
		 $('.sub_loc').show();
		$(".yrloc .spinner").hide();
		$(".yrloc .fa-compass").show();	
		
	}
	setTimeout(function() {
	    $('.s_msg').hide();
	},5000);
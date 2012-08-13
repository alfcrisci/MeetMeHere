function runMap() {

	var map = L.map('map').setView([12, -29], 3);

		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
		}).addTo(map);

		var fullScreen = new L.Control.FullScreen(); 
		var bingGeocoder = new L.Control.BingGeocoder('Your-API-Key'); //Sign up here: http://www.bingmapsportal.com/
		var hash = new L.Hash();





		var marker = L.marker();

		function onMapClick(e) {

			marker
			.setLatLng(e.latlng)
			L.marker(e.latlng).addTo(map)
			.bindPopup("<form id=payment><fieldset><ol><li><label for=name></label><input id=name name=name type=text placeholder='To?' required autofocus></li><li><label for=name></label><input id=name name=name type=text placeholder='From?' required autofocus></li><li><label for=phone></label><input id=phone name=phone type=tel placeholder='Phone #? Eg. 447500000000' required></li><li><label for=notes>Notes</label><textarea id=notes name=notes rows=2 required>" + e.latlng.toString() + "</textarea></li></ol></fieldset><fieldset><button type=submit  ACTION = 'sms.php'>Send!</button></fieldset></form>").openPopup()				
			.openOn(map);

		}

		map.on('click', onMapClick);


		map.addControl(fullScreen);
		map.addControl(bingGeocoder);
		hash.init(map);

		}

window.onload = runMap;   
function runMap() {


    var map = L.map('map').setView([12, - 29], 3);

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-warden/{z}/{x}/{y}.png', {
        maxZoom: 17,
        doubleClickZoom: false
    }).addTo(map);

    var bingGeocoder = new L.Control.BingGeocoder('AmFJ03ozVugKu0Y_uijzwvFEKfKY5VCesm1eiBqGhchxQ3uKFUQMYsKJLNdfHsIR');
    var hash = new L.Hash();


    function onMapClick(e) {
        var zoom = map.getZoom();



        var latlngURL = '#' + zoom + '/' + e.latlng.lat.toFixed(3) + '/' + e.latlng.lng.toFixed(3);
        var latlngStr = +e.latlng.lat.toFixed(3) + ',' + e.latlng.lng.toFixed(3);



        var marker = new L.marker(e.latlng, {draggable: true})
        	.addTo(map)
        	.bindPopup("<form method='post' id=payment action='assets/text/sms.php'><fieldset><ol><li><label for=name></label><input id=name name=to type=text placeholder='To?' required autofocus></li><li><label for=name></label><input id=name name=from type=text placeholder='From?' required autofocus></li><li><label for=phone></label><input id=phone name=phone type=tel placeholder='Their Phone #?' required></li><li id=location><textarea id=location name=location rows=2 required>" + latlngStr + "</textarea></li><li id=url><textarea id=url name=url rows=2 required>" + latlngURL + "</textarea></li><li><textarea id=notes name=notes rows=2 required>Lets meet here!</textarea></li></ol></fieldset><fieldset><button type=submit id=submit>Send!</button></fieldset></form>").openPopup()
    }



    map.on('dblclick', onMapClick);

    hash.init(map);
    map.addControl(bingGeocoder);
}

window.onload = runMap;
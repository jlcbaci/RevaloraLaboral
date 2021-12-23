var myModule = {};
jQuery(function($) {
  $(document).ready(function() {
    var map1;
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map1 = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);

    var service = new google.maps.places.AutocompleteService();
    var geocoder = new google.maps.Geocoder();

    $('#address_search').typeahead({
      source: function(query, process) {
        service.getPlacePredictions({
          input: query
        }, function(predictions, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            process($.map(predictions, function(prediction) {
              return prediction.description;
            }));
          }
        });
      },
      updater: function(item) {
        geocoder.geocode({
          address: item
        }, function(results, status) {
          if (status != google.maps.GeocoderStatus.OK) {
            alert('Cannot find address');
            return;
          }
          map.setCenter(results[0].geometry.location);
          map.setZoom(12);
        });
        return item;
      }
    });

  });

  myModule.locateMap2 = function() {
    var address = $('#address').val();
    var map2;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var myOptions = {
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
        map2.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map2,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  };

});
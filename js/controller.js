
let Controller = function($scope) {
  


  let vm = this;

  vm.map = { 
    center: { 
      latitude: 33.7482665, 
      longitude: -84.389121
    }, 
    zoom: 10,
    markers: [],
    events: {
      click: function (map, eventName, originalEventArgs) {
        var e = originalEventArgs[0];
        var lat = e.latLng.lat(),lon = e.latLng.lng();
        var marker = {
          id: Date.now(),
          coords: {
            latitude: lat,
            longitude: lon
          },
          icon: '{url:    "developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" }',
        };
        vm.map.markers.push(marker);
        console.log(vm.map.markers);
        $scope.$apply();
      }
    }
  };



};

Controller.$inject = ['$scope'];

export default Controller;
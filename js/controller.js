let Controller = function($scope) {
  

  $scope.map = { 
    center: { 
      latitude: 33.7482665, 
      longitude: -84.389121
    }, 
    zoom: 10
  };


};

Controller.$inject = ['$scope'];

export default Controller;
let config = function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: './rootTemp.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'Controller as vm',
      templateUrl: './homeTemp.html'
    })
  ;

  uiGmapGoogleMapApiProvider.configure({
    china: true
  });


};

config.$inject = ['$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider'];

export default config;
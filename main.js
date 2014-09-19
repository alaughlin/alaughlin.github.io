(function () {
  var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

  portfolioApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pinless', {
        templateUrl: 'pages/pinless.html',
      })
      .when('/asteroids', {
        templateUrl: 'pages/asteroids.html'
      })
      .when('/chess', {
        templateUrl: 'pages/chess.html'
      })
      .when('/skills', {
        templateUrl: 'pages/skills.html'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html'
      })
    $locationProvider.html5Mode(true);
  });
})();
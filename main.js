(function () {
  var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

  portfolioApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pinless', {
        templateUrl: 'pages/pinless.html'
      })
      .when('/snake', {
        templateUrl: 'pages/snake.html'
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
      .otherwise({
        redirectTo: '/pinless'
      })
    $locationProvider.html5Mode(true);
  });
})();
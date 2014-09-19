(function () {
  var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

  portfolioApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/pinless.html'
      })
      .when('/', {
        templateUrl: 'pages/asteroids.html'
      })
      .when('/', {
        templateUrl: 'pages/chess.html'
      })
      .when('/', {
        templateUrl: 'pages/skills.html'
      })
      .when('/', {
        templateUrl: 'pages/contact.html'
      })
  });

})();
(function () {
  var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

  portfolioApp.config(function ($routeProvider) {
    $routeProvider
      .when('/projects/pinless', {
        templateUrl: 'pages/pinless.html',
        controller: 'pinlessCtrl'
      })
      .when('/projects/asteroids', {
        templateUrl: 'pages/asteroids.html'
      })
      .when('/projects/chess', {
        templateUrl: 'pages/chess.html'
      })
      .when('/skills', {
        templateUrl: 'pages/skills.html'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html'
      })
  });

  portfolioApp.controller('pinlessCtrl', function ($scope) {
    console.log("fired");
  });

})();
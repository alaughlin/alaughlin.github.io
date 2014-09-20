(function () {
  var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

  portfolioApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pinless', {
        templateUrl: 'pages/pinless.html',
        controller: 'mainController'
      })
      .when('/snake', {
        templateUrl: 'pages/snake.html',
        controller: 'mainController'
      })
      .when('/chess', {
        templateUrl: 'pages/chess.html',
        controller: 'mainController'
      })
      .when('/skills', {
        templateUrl: 'pages/skills.html',
        controller: 'mainController'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/pinless'
      })
    $locationProvider.html5Mode(true);
  });

  portfolioApp.controller('mainController', function () {
    clearInterval(game.runningGame);
  });
})();
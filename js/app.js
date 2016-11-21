angular.module('endZombie', ['ui.router'])
.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/js/views/home.html",
    })
    .state('game', {
      url: "/game",
      templateUrl: "/js/views/game.html"
    })
    .state('winner', {
      url: "/game/winner",
      templateUrl: "/js/views/winner.html"
    })

    ;


  $urlRouterProvider.otherwise('/');
}

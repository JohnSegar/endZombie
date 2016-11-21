angular.module('endZombie', ['ui.router'])
.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/js/views/home.html",
    });


  $urlRouterProvider.otherwise('/');
}

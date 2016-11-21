angular.module('endZombie')
  .controller('ZombiesController', ZombiesController);

  ZombiesController.$inject = ['$http', '$state'];

  function ZombiesController($http, $state){
    var self = this;

    self.getZombies = getZombies;

    function getZombies(){
      $http
        .get('/js/zombies.json')
        .then(function(response){
          self.data = response.data;
          console.log(self.data);
          $state.go('game');
        });
      }
  return self;
}

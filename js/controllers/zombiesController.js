angular.module('endZombie')
  .controller('ZombiesController', ZombiesController);

  function ZombiesController() {
    this.zombies = [
      {
        name: "MASTER ZOMBIE",
        type: "master_zombie",
        hp: 150,
        damage: 12
      },
      {
        name: "SUPER ZOMBIE",
        type: "super_zombie",
        hp: 100,
        damage: 15
      },
      {
        name: "ZOMBIE A",
        type: "zombie",
        hp: 75,
        damage: 20
      },
      {
        name: "ZOMBIE B",
        type: "zombie",
        hp: 75,
        damage: 20
      }
    ];
    return this;
  }



function getHomepage(req, res){
  res.send("You are at the homepage!");
}

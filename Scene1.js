class Scene1 extends Phaser.Scene
{
   constructor()
   {
      // name of scene instance
      super("bootGame");
   }


   preload()
   {
      // load images into memory
      this.load.image("background", "assets/images/background.png");
      this.load.image("ship1", "assets/images/ship.png");
      this.load.image("ship2", "assets/images/ship2.png");
      this.load.image("ship3", "assets/images/ship3.png");
      
      this.load.image("player", "assets/images/playersprite.png");
   }   


   create()
   { 
      // create text object
      this.add.text(20, 20, "Loading game...");

      // switch to Scene2
      this.scene.start("playGame");
   }
}
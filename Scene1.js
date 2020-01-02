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
      
      this.load.image("player", "assets/images/playersprite3.png");

      this.load.spritesheet("playerIdle", "assets/images/player_spritesheet_idle.png",{
         frameWidth: 13,
         frameHeight: 16
      });
   }   


   create()
   { 
      // create text object
      this.add.text(20, 20, "Loading game...");

      // load player anim
      this.anims.create({
         key: "player_idle",
         frames: this.anims.generateFrameNumbers("playerIdle"),
         frameRate: 10,
         repeat: -1
      });

      // switch to Scene2
      this.scene.start("playGame");
   }
}
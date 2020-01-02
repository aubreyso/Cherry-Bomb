class Scene2 extends Phaser.Scene
{
   constructor()
   {
      // name of scene instance
      super("playGame");
   }


   create()
   {
      // TOP TEXT
      this.add.text(20, 20, "CHERRY\nBOMBERS", {font: "25px Impact", fill: "gray"});


      // CREATE PLAYERS
      // create playerOne object
      this.playerOne = new Player(this, config.width/2 - 50, config.height/2, true);
      this.playerTwo = new Player(this, config.width/2 + 50, config.height/2, false);

      // CREATE PLAYER INPUT KEYS
      // playerOne input keys
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      // playerTwo input keys
      this.cursorKeys = this.input.keyboard.createCursorKeys();
   }


   update()
   {
      this.playerOne.moveManager(this);
      this.playerTwo.moveManager(this);
   }
}
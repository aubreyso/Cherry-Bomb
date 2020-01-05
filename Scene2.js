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

      // CREATE GROUPS
      this.players = this.physics.add.group();
      this.bullets = this.physics.add.group();

      // CREATE PLAYERS
      this.stem = new Stem(this, config.width/2, config.height/2);
      this.playerOne = new Player(this, config.width/2 - 50, config.height/2, true);
      this.playerTwo = new Player(this, config.width/2 + 50, config.height/2, false);

      // CREATE PLAYER INPUT KEYS
      // playerOne walk
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      // playerTwo walk
      this.cursorKeys = this.input.keyboard.createCursorKeys();

      // playerOne jump/sit
      this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
      this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

      // playerTwo jump/sit
      this.keyNum1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE);
      this.keyNum2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO);

      //this.physics.add.collider(this.playerOne, this.playerTwo);

      // create bullet instances
      for (var i=0; i<5; i++)
         {var bullet = new Bullet(this, config.width/2+200, config.height/8+(100*i));}
      // overlap function
      this.physics.add.overlap(this.players, this.bullets, this.hurtPlayer, null, this);
   }


   hurtPlayer(player, bullet)
   {
      bullet.destroy();
      console.log("ouch!");
   }


   update()
   {
      this.playerOne.movementManager(this);
      this.playerTwo.movementManager(this);
      this.stem.updatePosition(this);
   }
}
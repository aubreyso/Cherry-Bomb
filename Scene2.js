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
      this.playerOne = this.physics.add.sprite(config.width/2 - 50, config.height/2, "playerIdle");
      this.playerOne.play("player_idle");
      this.playerOne.setScale(4);
      this.playerOneFlipped = false;

      // create playerTwo object
      this.playerTwo = this.physics.add.sprite(config.width/2 + 50, config.height/2, "playerIdle");
      this.playerTwo.play("player_idle");
      this.playerTwo.setScale(4);
      this.playerTwoFlipped = false;

      // prevent players from leaving screen
      this.playerOne.body.collideWorldBounds = true;
      this.playerTwo.body.collideWorldBounds = true;

      // playerOne input keys
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

      // playerTwo input keys
      this.cursorKeys = this.input.keyboard.createCursorKeys();


      // CUSTOM CLASS TESTING
      this.playerTest = new Player(this);
   }


   update()
   {
      //this.movePlayerOneManager();
      this.movePlayerTwoManager();
      this.playerTest.moveManager(this);
   }


   movePlayerOneManager()
   {
      //console.log(this.playerOne.x+" "+this.playerOne.y);
      //console.log(this.normPosX(this.playerOne), this.normPosY(this.playerOne));

      this.playerOne.setVelocity(0);

      // LEFT
      //if (Phaser.Input.Keyboard.JustDown(this.keyA)) //single press
      if (this.keyA.isDown)
      {
         this.playerOne.setVelocityX(-gameSettings.playerSpeed);
         // flip sprite
         if (this.playerOneFlipped == false)
            this.flipSprite(this.playerOne);
         this.playerOneFlipped = true;
      }
      // RIGHT
      else if (this.keyD.isDown)
      {
         this.playerOne.setVelocityX( gameSettings.playerSpeed);
         // flip sprite
         if (this.playerOneFlipped == true)
            this.flipSprite(this.playerOne);
         this.playerOneFlipped = false;
      }
      // UP
      if (this.keyW.isDown)
      {
         this.playerOne.setVelocityY(-gameSettings.playerSpeed);
      }
      // DOWN
      else if (this.keyS.isDown)
      {
         this.playerOne.setVelocityY( gameSettings.playerSpeed);
      }
   }

   movePlayerTwoManager()
   {
      this.playerTwo.setVelocity(0);

      // LEFT
      if (this.cursorKeys.left.isDown)
      {
         this.playerTwo.setVelocityX(-gameSettings.playerSpeed);
         // flip sprite
         if (this.playerTwoFlipped == false)
            this.flipSprite(this.playerTwo);
         this.playerTwoFlipped = true;
      }
      // RIGHT
      else if (this.cursorKeys.right.isDown)
      {
         this.playerTwo.setVelocityX( gameSettings.playerSpeed);
         // flip sprite
         if (this.playerTwoFlipped == true)
            this.flipSprite(this.playerTwo);
         this.playerTwoFlipped = false;       
      }
      // UP
      if (this.cursorKeys.up.isDown)
      {
         this.playerTwo.setVelocityY(-gameSettings.playerSpeed);
      }
      // DOWN
      else if (this.cursorKeys.down.isDown)
      {
         this.playerTwo.setVelocityY( gameSettings.playerSpeed);
      }
   }

   // flips player sprite
   flipSprite(player)
   {
      player.flipX = !player.flipX;
   }

   // return normalized x position
   normPosX(player) {return (player.x-20)/920;}
   // return normalized y position
   normPosY(player) {return (player.y-32)/476;}
}
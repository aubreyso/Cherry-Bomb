class Scene2 extends Phaser.Scene
{
   constructor()
   {
      // name of scene instance
      super("playGame");
   }


   create()
   {
      // set class variable for background
      //this.background = this.add.image(0, 0, "background");
      //this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      //this.background.setOrigin(0, 0);

      // add ship objects to game
      //this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship1");
      //this.ship2 = this.add.image(config.width/2     , config.height/2, "ship2");
      //this.ship3 = this.add.image(config.width/2 + 50, config.height/2, "ship3");

      // create text object
      this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

      // create playerOne object
      this.playerOne = this.physics.add.image(config.width/2 - 50, config.height/2, "player");
      this.playerOne.setScale(4);
      this.playerOneFlipped = false;

      // create playerTwo object
      this.playerTwo = this.physics.add.image(config.width/2 + 50, config.height/2, "player");
      this.playerTwo.setScale(4);
      this.playerTwoFlipped = false;

      // prevent players from leaving screen
      this.playerOne.body.collideWorldBounds = true;
      this.playerTwo.body.collideWorldBounds = true;

      // PLAYER ONE INPUT KEYS
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

      // PLAYER TWO INPUT KEYS
      this.cursorKeys = this.input.keyboard.createCursorKeys();
   }

   update()
   {
      //this.moveShip(this.ship1, 1);
      //this.moveShip(this.ship2, 2);
      //this.moveShip(this.ship3, 3);

      //this.background.tilePositionY -= 0.5;
      this.movePlayerOneManager();
      this.movePlayerTwoManager();
   }


   movePlayerOneManager()
   {
      //console.log(this.playerOne.x+" "+this.playerOne.y);
      //console.log(this.normPosX(this.playerOne), this.normPosY(this.playerOne));

      this.playerOne.setVelocity(0);

      // LEFT
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

   flipSprite(player)
   {
      player.flipX = !player.flipX;
   }

   // moves ship down screen by speed
   moveShip(ship, speed)
   {
      ship.y += speed;
      if (ship.y > config.height)
      {
         this.resetShipPos(ship);
      }
   }


   // resets ship to y=0, x=random when ship
   resetShipPos(ship)
   {
      ship.y = 0;
      var randomX = Phaser.Math.Between(0, config.width);
      ship.x = randomX;
   }

   // return normalized x position
   normPosX(player) {return (player.x-20)/920;}

   // return normalized y position
   normPosY(player) {return (player.y-32)/476;}
}
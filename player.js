/* Player Class
   handles:
   1. player construction
   2. player movement
*/
class Player extends Phaser.GameObjects.Sprite
{
   //movementSpeed = 150;
   //movementSpeed = 350; // DEBUG MOVESPEED
   movementSpeed = 200; // DEBUG MOVESPEED

   constructor(scene, x, y, p1)
   {
      // add to scene
      super(scene, x, y, "playerIdle");
      scene.add.existing(this);

      // set physics
      scene.physics.world.enableBody(this);
      this.body.collideWorldBounds = true;

      // set visuals
      this.play("player_idle");
      this.setScale(gameSettings.spriteScale);
      this.flipped = false;

      // set playerOne/playerTwo controls
      this.p1 = p1;

      // add to players group
      scene.players.add(this);
   }


   movementManager(scene)
   {
      this.body.setVelocity(0);
      var root2 = Math.sqrt(2);

      // PLAYER 1 CONTROLS
      if (this.p1)
      {
         // LEFT
         if (scene.keyA.isDown)
         {
            // flip sprite
            if (this.flipped == false) this.flipSprite();
            this.flipped = true;
            // up left
            if (scene.keyW.isDown)
            {
               this.body.setVelocityX(-this.movementSpeed/root2);
               this.body.setVelocityY(-this.movementSpeed/root2);
            }
            // down left
            else if (scene.keyS.isDown)
            {
               this.body.setVelocityX(-this.movementSpeed/root2);
               this.body.setVelocityY( this.movementSpeed/root2);
            }
            // left
            else
               this.body.setVelocityX(-this.movementSpeed);
         }
         // RIGHT
         else if (scene.keyD.isDown)
         {
            // flip sprite
            if (this.flipped == true) this.flipSprite();
            this.flipped = false;
            // up right
            if (scene.keyW.isDown)
            {
               this.body.setVelocityX( this.movementSpeed/root2);
               this.body.setVelocityY(-this.movementSpeed/root2);
            }
            // down right
            else if (scene.keyS.isDown)
            {
               this.body.setVelocityX(this.movementSpeed/root2);
               this.body.setVelocityY(this.movementSpeed/root2);
            }
            // right
            else
               this.body.setVelocityX( this.movementSpeed);
         }
         // UP
         else if (scene.keyW.isDown)
         {
            this.body.setVelocityY(-this.movementSpeed);
         }
         // DOWN
         else if (scene.keyS.isDown)
         {
            this.body.setVelocityY( this.movementSpeed);
         }
         // JUMP
         if (Phaser.Input.Keyboard.JustDown(scene.keyJ)) console.log("player1 jump");
         // SIT
         if (scene.keyK.isDown) console.log("player1 sit");
      }
      // PLAYER 2 CONTROLS
      else
      {
         // LEFT
         if (scene.cursorKeys.left.isDown)
         {
            // flip sprite
            if (this.flipped == false) this.flipSprite();
            this.flipped = true;
            // up left
            if (scene.cursorKeys.up.isDown)
            {
               this.body.setVelocityX(-this.movementSpeed/root2);
               this.body.setVelocityY(-this.movementSpeed/root2);
            }
            // down left
            else if (scene.cursorKeys.down.isDown)
            {
               this.body.setVelocityX(-this.movementSpeed/root2);
               this.body.setVelocityY( this.movementSpeed/root2);
            }
            // left
            else
               this.body.setVelocityX(-this.movementSpeed);
         }
         // RIGHT
         else if (scene.cursorKeys.right.isDown)
         {
            // flip sprite
            if (this.flipped == true) this.flipSprite();
            this.flipped = false;
            // up right
            if (scene.cursorKeys.up.isDown)
            {
               this.body.setVelocityX( this.movementSpeed/root2);
               this.body.setVelocityY(-this.movementSpeed/root2);
            }
            // down right
            else if (scene.cursorKeys.down.isDown)
            {
               this.body.setVelocityX(this.movementSpeed/root2);
               this.body.setVelocityY(this.movementSpeed/root2);
            }
            // right
            else
               this.body.setVelocityX( this.movementSpeed);
         }
         // UP
         else if (scene.cursorKeys.up.isDown)
         {
            this.body.setVelocityY(-this.movementSpeed);
         }
         // DOWN
         else if (scene.cursorKeys.down.isDown)
         {
            this.body.setVelocityY( this.movementSpeed);
         }
         // JUMP
         if (Phaser.Input.Keyboard.JustDown(scene.keyNum1)) console.log("player2 jump");
         // SIT
         if (scene.keyNum2.isDown) console.log("player2 sit");
      }
   }

   // flips player sprite
   flipSprite() {this.flipX = !this.flipX;}

   // V BROKEN!! V

   /*// return normalized x position
   normPosX() {return (this.x-20)/920;}
   //normPosX() {return (this.x-26)/(config.width-26);}

   // return normalized y position
   normPosY() {return (this.y-32)/476;}
   //normPosY() {return (this.y-32)/(config.height-64);}*/
}
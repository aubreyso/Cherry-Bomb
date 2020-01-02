class Player extends Phaser.GameObjects.Sprite
{
   constructor(scene)
   {
      // add to scene
      var x = scene.playerOne.x;
      var y = scene.playerOne.y;
      super(scene, x, y, "playerIdle");
      scene.add.existing(this);

      // set physics
      scene.physics.world.enableBody(this);
      this.body.collideWorldBounds = true;

      // set visuals
      this.play("player_idle");
      this.setScale(4);
      this.flipped = false;
   }


   moveManager(scene)
   {
      this.body.setVelocity(0);

      // LEFT
      if (scene.keyA.isDown)
      {
         this.body.setVelocityX(-gameSettings.playerSpeed);
         // flip sprite
         if (this.flipped == false)
            this.flipSprite();
         this.flipped = true;
      }
      // RIGHT
      else if (scene.keyD.isDown)
      {
         this.body.setVelocityX( gameSettings.playerSpeed);
         // flip sprite
         if (this.flipped == true)
            this.flipSprite();
         this.flipped = false;
      }
      // UP
      if (scene.keyW.isDown)
      {
         this.body.setVelocityY(-gameSettings.playerSpeed);
      }
      // DOWN
      else if (scene.keyS.isDown)
      {
         this.body.setVelocityY( gameSettings.playerSpeed);
      }
   }


   // flips player sprite
   flipSprite()
   {
      this.flipX = !this.flipX;
   }
}
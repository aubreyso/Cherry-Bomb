/* Stem Class
   handles:
   1. stem construction
   2. animation updates
   3. physics?
*/
class Stem extends Phaser.GameObjects.Image
{
   movementSpeed = 500;

   constructor(scene, x, y)
   {
      // add to scene
      super(scene, x, y, "stemTop");
      scene.add.existing(this);

      // set physics
      scene.physics.world.enableBody(this);
      //this.body.collideWorldBounds = true;

      // set visuals
      this.setScale(4);
   }


   updatePosition(scene)
   {
      this.body.setVelocity(0);

      // playerOne position
      var x1 = scene.playerOne.x;
      //var y1 = scene.playerOne.y;
      // playerTwo position
      var x2 = scene.playerTwo.x;
      //var y2 = scene.playerTwo.y;

      var xTarget = (x1 + x2)/2;
      //var xTarget = Math.floor((x1 + x2)/2);
      if (this.x < xTarget)
         this.body.setVelocityX(this.movementSpeed);
         //this.x += 1;
      else if (this.x > xTarget)
         this.body.setVelocityX(-this.movementSpeed);
         //this.x -= 1;
   }
}
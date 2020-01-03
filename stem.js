/* Stem Class
   handles:
   1. stem construction
   2. animation updates
   3. physics?
*/
class Stem extends Phaser.GameObjects.Image
{
   movementSpeed = 350;

   constructor(scene, x, y)
   {
      // add to scene
      //super(scene, x, y, "stemTop");
      super(scene);
      this.stemTop = scene.add.image(x, y, "stemTop");
      this.stemTop.setScale(4);
      //scene.add.existing(this);

      // playerOne position
      var x1 = scene.playerOne.x;
      var y1 = scene.playerOne.y;
      // playerTwo position
      var x2 = scene.playerTwo.x;
      var y2 = scene.playerTwo.y;
      // compute midpoints
      var xTarget = (x1 + x2)/2;
      var yTarget = (y1 + y2)/2 - 70;
      //var r1 = scene.add.line(x1, y1, xTarget, yTarget, 140, 0, 0x58a164);

      // set visuals
      this.setScale(4);
   }


   updatePosition(scene)
   {
      // playerOne position
      var x1 = scene.playerOne.x;
      var y1 = scene.playerOne.y;
      // playerTwo position
      var x2 = scene.playerTwo.x;
      var y2 = scene.playerTwo.y;
      // compute midpoints
      var xTarget = (x1 + x2)/2;
      var yTarget = (y1 + y2)/2 - 70;
      // set stem position to midpoints
      this.stemTop.x = xTarget;
      this.stemTop.y = yTarget;
   }
}
/* Stem Class
   handles:
   1. stem construction
   2. animation updates
   3. physics?
*/
class Stem extends Phaser.GameObjects.Image
{
   movementSpeed = 350;

   // [distance, stress as class fields]

   constructor(scene, x, y)
   {
      super(scene);
      // add stem rod (left)
      this.stemL = scene.add.image(x, y, "stemRod");
      this.stemL.setOrigin(0.5,0);
      this.stemL.setScale(4);
      // add stem top
      this.stemTop = scene.add.image(x, y, "stemTop");
      this.stemTop.setScale(4);
   }


   updatePosition(scene)
   {
      // playerOne position
      var x1 = scene.playerOne.x;
      var y1 = scene.playerOne.y;
      // playerTwo position
      var x2 = scene.playerTwo.x;
      var y2 = scene.playerTwo.y;

      // compute distance between players
      var dist = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
      // offset y value for stretch look
      var stretchOffset = Math.max(dist-100, 0);
      stretchOffset = Math.min(stretchOffset, 60); // 10 above "true mid", since helmet

      // compute midpoints
      var xTarget = (x1 + x2)/2;
      var yTarget = (y1 + y2)/2 - 70 + stretchOffset;
      // set stem positions to midpoints
      this.stemTop.x = xTarget;
      this.stemTop.y = yTarget;
      this.stemL.x = xTarget;
      this.stemL.y = yTarget;

      // STEM ROD
      // scale length rod1
      this.stemL.scaleY = 10;

      // rotate rod1 
      var yDiff1 = -(yTarget-y1);               // get adjacent length
      var rot1 = Math.acos(yDiff1/(dist/2));    // get angle of rotation using arccos
      this.stemL.setRotation(rot1);             // rotate rod
   }
}
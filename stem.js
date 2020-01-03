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
      super(scene);
      this.stemTop = scene.add.image(x, y, "stemTop");
      this.stemTop.setScale(4);

      // [add connection lines]
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
      console.log(dist);
      // offset y value for stretch look
      var stretchOffset = Math.max(dist-100, 0);
      stretchOffset = Math.min(stretchOffset, 60);
      // compute midpoints
      var xTarget = (x1 + x2)/2;
      var yTarget = (y1 + y2)/2 - 70 + stretchOffset;
      // set stem position to midpoints
      this.stemTop.x = xTarget;
      this.stemTop.y = yTarget;
   }
}
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
      this.stemL.setScale(gameSettings.spriteScale);

      // add stem rod (right)
      this.stemR = scene.add.image(x, y, "stemRod");
      this.stemR.setOrigin(0.5,0);
      this.stemR.setScale(gameSettings.spriteScale);

      // add stem top
      this.stemTop = scene.add.image(x, y, "stemTop");
      this.stemTop.setScale(gameSettings.spriteScale);
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
      this.stemL.y = yTarget+5;
      this.stemR.x = xTarget;
      this.stemR.y = yTarget+5;

      // rotate rod1 
      var adj1 = -(yTarget-y1+15);                                                  // adjacent length
      var hyp1 = Math.sqrt(Math.pow((xTarget-x1),2) + Math.pow((yTarget-y1+15),2)); // hypotnuse length
      var rot1 = Math.acos(adj1/hyp1);                                              // get angle of rot
      if (x1 < x2) this.stemL.setRotation(rot1);                                    // rotate rod
      else         this.stemL.setRotation(-rot1);
      this.stemL.scaleY = hyp1/4;                                                   // scale length rod1
      this.stemL.scaleY = 8;

      // rotate rod2 
      var adj2 = -(yTarget-y2+15);                                                  // adjacent length
      var hyp2 = Math.sqrt(Math.pow((xTarget-x2),2) + Math.pow((yTarget-y2+15),2)); // hypotnuse length
      var rot2 = Math.acos(adj2/hyp2);                                              // get angle of rot
      if (x1 < x2) this.stemR.setRotation(-rot2);                                   // rotate rod
      else         this.stemR.setRotation(rot2);
      this.stemR.scaleY = hyp2/4;                                                   // scale length rod1
      this.stemR.scaleY = 8;
   }
}
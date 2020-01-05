/* Projectile Class
   handles:
   1. projectile construction
   2. projectile movement
*/
class Bullet extends Phaser.GameObjects.Image
{
   constructor(scene, x, y)
   {
      super(scene, x, y, "bulletSmall");
      scene.add.existing(this);

      // set physics
      scene.physics.world.enableBody(this);
      this.body.collideWorldBounds = true;

      // set visuals
      this.setScale(gameSettings.spriteScale);

      // add to bullets group
      scene.bullets.add(this);
   }
}
// Store gameplay config variables
var gameSettings = {
      playerSpeed: 200,
}

// Store game instance config variables   
var config = {
   width: 960,
   height: 540,
   backgroundColor: 0x303030,
   scene: [Scene1, Scene2],
   physics: {
      default: "arcade",
      arcade:{
         debug: false
      }
   },
   pixelArt:true
}

// Create new instance of Phaser game with config
var game = new Phaser.Game(config);

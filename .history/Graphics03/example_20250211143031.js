function setup() {
    createCanvas(500,500);
  }
  function draw(){
    background(220);
  }

  class SpriteAnimation{
    constructor(spritesheet, startU, startV, duration)
    {
        this.spritesheet = spritesheet;
        this.u = startU;
        this.v = startV;
        
    }
  }
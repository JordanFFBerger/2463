let spelunkyguy;
let animation;
function setup() {
    createCanvas(500,500);

    animation = new
  }
  function draw(){
    background(220);
    image(spelunkyguy, 0, 0, 80, 80, 0, 0, 80, 80);
  }
function preload(){
  spelunkyguy = loadImage("SpelunkyGuy.png");
}
  class SpriteAnimation{
    constructor(spritesheet, startU, startV, duration)
    {
        this.spritesheet = spritesheet;
        this.u = startU;
        this.v = startV;
        this.duration = duration;
    }
    draw(){
        image(this.spritesheet, 0, 0, 80, 80, this.u*80, this.v*80)
    }
  }
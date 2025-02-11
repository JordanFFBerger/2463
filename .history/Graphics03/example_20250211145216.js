let spelunkyguy;

function setup() {
    createCanvas(500,500);
  }
  function draw(){
    background(220);
    image(spelunkyguy, 0, 0, 80, 80, 0, 0, );
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
  }
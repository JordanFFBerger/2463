let alucard;

function setup() {
    createCanvas(500,500);
  }
  function draw(){
    background(220);
    image(alucard, 0, 0);
  }
function preload(){
  alucard = loadImage("3228.png");
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
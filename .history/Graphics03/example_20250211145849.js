let spelunkyguy;
let animation;
function setup() {
    createCanvas(500,500);

    animation = new SpriteAnimation(spelunkyguy, 0,1, 8);
  }
  function draw(){
    background(220);
    animation.draw();
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
        this.frameCount =
    }
    draw(){
        image(this.spritesheet, 0, 0, 80, 80, this.u*80, this.v*80, 80, 80);
        this.u++;
        if(this.u === this.startU + this.duration)
        {
            this.u = this.startU;
        }
    }
  }
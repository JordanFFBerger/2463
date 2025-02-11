let spelunkyguy;
let animation;
function setup() {
    createCanvas(400,400);

    animation = new SpriteAnimation(spelunkyguy,1,0,8);
  }
  function draw(){
    background(220);
    animation.draw();
  }
function preload(){
    
  spelunkyguy = loadImage("SpelunkyGuy.png");
}
class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.currentAnimation = null;
        this.animations = ()
    }

    draw(){

    }
}
  class SpriteAnimation{
    constructor(spritesheet, startU, startV, duration)
    {
        this.spritesheet = spritesheet;
        this.u = startU;
        this.v = startV;
        this.duration = duration;
        this.startU = startU;
        this.frameCount = 0;
    }
    draw(){
        image(this.spritesheet, 0, 0, 80, 80, this.u*80, this.v*80, 80, 80);
        this.frameCount++;
        if(this.frameCount % 6 === 0)
            this.u++;
        if(this.u === this.startU + this.duration)
        {
            this.u = this.startU;
        }
    }
  }
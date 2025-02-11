let spelunkyguy;
let character;
function setup() {
    createCanvas(400,400);
    character = new Character(0,0);
    character.addAnimation = ("right"new SpriteAnimation(spelunkyguy,1,0,8);
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
        this.animations = {}
    }
    addAnimation(key, animation) {
        this.animations[key]= animation;
    }
    draw(){
      let animation = this.animations[this.currentAnimation];
      if (animation){
         animation.draw();
      }
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
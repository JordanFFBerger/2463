let spelunkyguy;
let character;

function setup() {
    createCanvas(400,400);

    character = new Character(0,0);
    character.addAnimation("right",new SpriteAnimation(spelunkyguy,1,0,8));
    character.addAnimation("left",new SpriteAnimation(spelunkyguy,1,0,8));
    character.addAnimation("stand", new SpriteAnimation(spelunkyguy,0,0,1));
    character.currentAnimation = "stand";
  }
  function draw(){
    background(220);
    character.draw();
  }
function preload(){
    
  spelunkyguy = loadImage("SpelunkyGuy.png");
}
class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.currentAnimation = null;
        this.animations = {};
    }
    addAnimation(key, animation) {
        this.animations[key]= animation;
    }
    draw(){
      let animation = this.animations[this.currentAnimation];
      if (animation){
        switch (this.currentAnimation){
            case "right"
        }
         push();
         translate(this.x, this.y);
         animation.draw();
         pop();
      }
    }
}
function keyPressed(){
    switch(keyCode)
    {
        case LEFT_ARROW:
            character.currentAnimation = "left";
            break;
        case RIGHT_ARROW:
            character.currentAnimation = "right";
            break;
    }
}
function keyReleased(){
    character.currentAnimation = "stand";
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
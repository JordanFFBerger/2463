let GameStates = Object.freeze({
    START: "start",
    PLAY: "play",
    END: "end"
});

let bug;

let gameState = GameStates.START;

function setup() {
    createCanvas(400,400);
    imageMode(CENTER);

    c
  }
  function draw(){
    background(220);
    switch(gameState){
        case GameStates.START:
            
            break;
        case GameStates.PLAY:
            break;
        case GameStates.END:
            break;
    }
  }
function preload(){
  
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
            case "right":
                this.x += 2;
                break;
            case "left":
                this.x -= 2;
                break;
        }
         push();
         translate(this.x, this.y);
         animation.draw();
         pop();
      }
    }
     keyPressed(){
        switch(keyCode)
        {
            case LEFT_ARROW:
                character.currentAnimation = "left";
                character2.currentAnimation = "left";
                character3.currentAnimation = "left";
                this.animations[this.currentAnimation].flipped = true;
                this.lastFrame = true;
                break;
            case RIGHT_ARROW:
                character.currentAnimation = "right";
                character2.currentAnimation = "right";
                character3.currentAnimation = "right";
                this.animations[this.currentAnimation].flipped = false;
                this.lastFrame = false;
                break;
        }
    }
    keyReleased(){
        character2.currentAnimation = "stand";
        character.currentAnimation = "stand";
        character3.currentAnimation = "stand";
        if (this.lastFrame === true)
            {
                console.log("does flip");
                this.animations[this.currentAnimation].flipped = true;
            }
        else{
            this.animations[this.currentAnimation].flipped = false;
        }
        
    }
}
function keyPressed() {
    character.keyPressed();
    character2.keyPressed();
    character3.keyPressed();
}

function keyReleased(){
    character.keyReleased();
    character2.keyReleased();
    character3.keyReleased();
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
        this.flipped = false;
        this.lastFrame = false;
    }
    draw(){
        let s = (this.flipped) ? -1 : 1;
        
        scale(s,1);
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
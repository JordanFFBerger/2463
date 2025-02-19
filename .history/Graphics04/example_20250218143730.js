let GameStates = Object.freeze({
    START: "start",
    PLAY: "play",
    END: "end"
});
let time = 10;
let bug;
let score = 0;
let gameState = GameStates.START;

function setup() {
    createCanvas(400,400);
    imageMode(CENTER);

  }
  function draw(){
    background(220);
    switch(gameState){
        case GameStates.START:
            textAlign(CENTER,CENTER);
            textSize(20);
            text("Left Click to Start", width/2, height/2);
            break;
        case GameStates.PLAY:
            textAlign(LEFT, TOP);
            text("score: " + score,0,0);
            textAlign(RIGHT,TOP);
            text("time, width, 0);
            break;

        case GameStates.END:
            break;
    }
  }

class Enemy {
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
}

function mouseClicked() {

    switch (gameState){
        case GameStates.START:
         gameState = GameStates.PLAY;
            break;
        case GameStates.PLAY:
            break;
        case GameStates.END:
            break;
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
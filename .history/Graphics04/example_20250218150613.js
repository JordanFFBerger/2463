let GameStates = Object.freeze({
    START: "start",
    PLAY: "play",
    END: "end"
});
let time = 10;
let bug;
let score = 0;
let gameState = GameStates.START;
let textPadding = 10;
function getRandomInt(){
    min = 400;
    max = 400;
    return Math.floor(Math.random() * (max - min + 1));
}
function preload(){
    bug = loadImage("bug.png");
}
function setup() {
    createCanvas(400,400);
    imageMode(CENTER);
    enemy = new Enemy(getRandomInt,getRandomInt);
    enemy.addAnimation("right", new SpriteAnimation(bug,1,0,6));
    enemy.addAnimation("left", new SpriteAnimation(bug,1,0,6));
    
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
            time -= deltaTime/1000;
            if(time <= 0)
            {
                gameState = GameStates.END;
            }
            textAlign(LEFT, TOP);
            text("score: " + score,textPadding, textPadding);
            textAlign(RIGHT,TOP);
            text("time: " + Math.ceil(time), width-textPadding, textPadding);

            break;

        case GameStates.END:
            textAlign(CENTER, CENTER);
            text("Final Score: " + score, width/2, height/2);
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
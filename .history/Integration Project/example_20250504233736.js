

let GameStates = Object.freeze({
    START: "start",
    PLAY: "play",
    END: "end"
});
let bug;
let obstacle;
let obstacleArray = [];
let bugArray = [];
let lives = 1;
let gameState = GameStates.START;
let textPadding = 10;
let hero;
let time = 0;
let nextObstacle;
let i;
let obstacle1;
let waitTime;
let walkSound;
let squishSound;
let gameOverSound;
let Music;
let sequence;
let port;
let zeroButton;
let connectButton;
let cursorX, cursorY;
let gravity = 5;
let score = 0;
let speed = 0.001;
let flag1 = false;
let flag2 = false;
let airFlag = false;
let groundY = 300;
let yVel = 0;
let obstacleAssignment;
let miles;
let respawnFlag = false;
function getRandomInt(){
    min = 0+textPadding;
    max = 300-textPadding;
    return Math.floor(Math.random() * (max - min) + min);
}
function preload(){
    bug = loadImage("bug.png");
    obby = loadImage("obstacles.png");
}
function setup() {
   

    createCanvas(400,400);
    imageMode(CENTER);
    hero = new Hero(40,groundY-50);
    hero.addAnimation("right", new SpriteAnimation(bug,0,0,5));
    hero.addAnimation("death", new SpriteAnimation(bug,6,0,7));
    hero.currentAnimation = "right";
    obstacle1 = new Obstacle(300, groundY-15);
    obstacle1.addAnimation("X", new SpriteAnimation(obby,0,0,1));
    obstacle1.addAnimation("XX", new SpriteAnimation(obby,1,0,1))
    obstacle1.addAnimation("O", new SpriteAnimation(obby,2,0,4));
    obstacle1.currentAnimation = "X";
    port = createSerial();
    connectButton = createButton("Connect");
    connectButton.mousePressed(connect);
    zeroButton = createButton("Zero Joystick");
    zeroButton.mousePressed(zero);
    cursorX = width/2;
    cursorY = height/2;
    bugArray.push(hero);
    obstacleArray.push(obstacle1);
    console.log(obstacleArray);
     
    

  }
  function draw(){
    background(220);
    
           
    

    switch(gameState){
        case GameStates.START:
            textAlign(CENTER,CENTER);
            textSize(20);
            text("Connect, Zero, and Begin", width/2, height/2);
            
            startAudioContext();
            //sequence.stop();
            break;
        case GameStates.PLAY:
            
            hero.draw();
            obstacle1.draw();
            time += deltaTime/1000;
            miles = Math.ceil(time/2)
            if(lives == 0)
            {
                //gameOverSound.start();
                gameState = GameStates.END;
            }
            textAlign(LEFT, TOP);
            text("LIVES REMAINING: " + lives,textPadding, textPadding);
            textAlign(RIGHT,TOP);
            text("MILES: " + miles, width-textPadding, textPadding);
             
            break;

        case GameStates.END:
            //sequence.stop();
           // walkSound.stop();
            textAlign(CENTER, CENTER);
            text("DISTANCE TRAVELED: " + miles + " MILES", width/2, height/2);
            break;
    }
  }


class Obstacle  {
     constructor(x,y){
        this.x = x;
        this.y = y
        this.currentObstacle = null;
        this.animations = {};

     }
     addAnimation(key, animation) {
        this.animations[key]= animation;
        }
     draw(){
        let animation = this.animations[this.currentAnimation];
        if (animation){
            switch (this.currentObstacle){
                case "X":
                    this.currentAnimation = "X";
                    break;
                case "XX":
                    this.currentAnimation = "XX";
                    break;
                case "O":
                    this.currentAnimation = "O";
                    break;
            }
              if(this.x >= 20)
              {
                  this.x -= 2 //time;
              }
              else{
                    
                    console.log("Next Obstacle");
                    this.x = 400;
                    translate(this.x, this.y);
                    setTimeout(() => obstaclePlacement(), 300);
                
              }    
                      
          
           push();
           translate(this.x, this.y);
          
           
           
           animation.draw();
           pop();
        }
     }
}

class Hero {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.currentAnimation = null;
        this.animations = {};
        this.dead = false;
    }
    
    addAnimation(key, animation) {
        this.animations[key]= animation;
    }
    draw(){
      let animation = this.animations[this.currentAnimation];
        if(this.y + 20 <= groundY)
        {
            this.y += gravity;
        }
        if(this.x == obstacle1.x )
        {
            if(this.y == obstacle1.y && obstacle1.x == this.x)
            {
                console.log(this.x, this.y)
                this.currentAnimation = "death";
                lives--;
            }
            if(obstacle1.currentAnimation = "O")
                {
                    lives--;
                    this.currentAnimation = "death";
                }

            
        }
         this.y += yVel;
         yVel /= 1.2;
                    
        
         push();
        
         
         translate(this.x, this.y);
         animation.draw();
         pop();

         strokeWeight(4); stroke('gold');
         line(0, groundY, width, groundY);
      
    }
    keyPressed(){
        if (keyCode == 32)
        {
            console.log("spacebar pressed");
           if(this.y + 20 >= groundY)
           {
             console.log("Airborne");
             yVel = -35;
           }
        }
    }
    
    
  

}
function keyPressed(){
    switch (gameState){
        case GameStates.START:
        break;
        case GameStates.PLAY:
            hero.keyPressed();
            break;
        case GameStates.END:
            walkSound.stop();
            sequence.stop();
            score = 0;
            time = 0;
        
            gameState = GameStates.START;
            break;

    }
}
function mouseClicked() {

    switch (gameState){
        case GameStates.START:
         if(flag1 && flag2)
         {
            sequence.start(Tone.now());
            walkSound.start();
            gameState = GameStates.PLAY;
         }
            //sequence.start(Tone.now());
            //walkSound.start();
            gameState = GameStates.PLAY;
            break;
        case GameStates.PLAY:

        
            break;
        case GameStates.END:
            walkSound.stop();
            sequence.stop();
            score = 0;
            time = 0;
        
            gameState = GameStates.START;
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
        
        image(this.spritesheet, 0, 0, 80, 80, this.u*80, this.v*80, 80, 80);
        scale(s,1);
        this.frameCount++;
        if(this.frameCount % 6 === 0)
            this.u++;
        if(this.u === this.startU + this.duration)
        {
            this.u = this.startU;
        }
    }
  }
 function pnP(){

    bugArray.pop();
    if(lives > 1) {
        newLife = new Hero(0, 300);
        newLife.addAnimation("right", new SpriteAnimation(bug,0,0,5));
        newLife.addAnimation("death", new SpriteAnimation(bug,6,0,7));
        newLife.currentAnimation = "right";
        bugArray.push(newLife);
    }
    else{
        lives--;
        gameState = GameStates.END;
    }
    

 }
function obstaclePlacement() {
    obstacleAssignment = getRandomInt();
    console.log(obstacleAssignment);
    

    if(obstacleAssignment % 2 == 0)
    {
        if(miles > 15)
        {
            obstacle1.currentObstacle = "XX";
        }
        else{
           obstacle1.currentObstacle = "X";
        }
        obstacle1.y = groundY -15;
    }
    else
    {
        obstacle1.currentObstacle = "O";
        obstacle1.y = getRandomInt();
    }
    



}
 function startAudioContext() {
    if (Tone.context.state != 'running') {
        Tone.start();
        console.log("Audio Context Started");
    }
    else {
        console.log("Audio Context is already running");
    }
    }
function setTempo(){
    Tone.Transport.bpm.value = 100 + (score *10);
}

function connect() {
    port.open("Arduino", 9600);
    flag1 = true;
}

function zero(){
    if (port.opened()){
        port.write('zero\n');
    }
    flag2 = true;
}
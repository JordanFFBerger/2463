

let GameStates = Object.freeze({
    START: "start",
    PLAY: "play",
    END: "end"
});
let time = 30;
let bug;
let bugArray = [];
let score = 0;
let gameState = GameStates.START;
let textPadding = 10;
let enemy;
let i;
let waitTime;
let walkSound;
let squishSound;
let gameOverSound;
let Music;
let sequence;
let port;
let zeroButton;
function getRandomInt(){
    min = 0+textPadding;
    max = 400-textPadding;
    return Math.floor(Math.random() * (max - min) + min);
}
function preload(){
    bug = loadImage("bug.png");
    squishSound = new Tone.Player("media/bugSquish.mp3").toDestination();
    gameOverSound = new Tone.Player("media/gameOver.mp3").toDestination();
    walkSound = new Tone.Player("media/walkSound.mp3").toDestination();
}
function setup() {
    Music = new Tone.Synth().toDestination();
    
    sequence = new Tone.Sequence((time, note) => {
        Music.triggerAttackRelease(note, 0.1, time);
    }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
    
    Tone.Transport.bpm.value = 100;
    Tone.Transport.start();

    sequence.loop = true;
    gain = new Tone.Gain();

    createCanvas(400,400);
    imageMode(CENTER);
    enemy = new Enemy(getRandomInt(),getRandomInt());
    enemy.addAnimation("right", new SpriteAnimation(bug,0,0,5));
    enemy.addAnimation("left", new SpriteAnimation(bug,0,0,5));
    enemy.addAnimation("death", new SpriteAnimation(bug,6,0,7));
    enemy.currentAnimation = "right";
    zeroButton = createBUtton("Zero Joystick");
    zeroButton.mousePressed(zero);
    bugArray.push(enemy);
        
    

  }
  function draw(){
    background(220);
    connect;
    let str = port.readUntil('\n');
    if(str !== "") {
        const values = str.split(',');
        if (values.length == 3)
        {
           let x = Number(values[0]);
           let y = Number(values[1]);
           let sw = Number(values[2]);
           console.log(x + "," + y + "," + sw);
        }
    }

    switch(gameState){
        case GameStates.START:
            textAlign(CENTER,CENTER);
            textSize(20);
            text("Left Click to Start", width/2, height/2);
            
            startAudioContext();
            sequence.stop();
            break;
        case GameStates.PLAY:
            
            enemy.draw();
            
            time -= deltaTime/1000;
            if(time <= 0)
            {
                gameOverSound.start();
                gameState = GameStates.END;
            }
            textAlign(LEFT, TOP);
            text("score: " + score,textPadding, textPadding);
            textAlign(RIGHT,TOP);
            text("time: " + Math.ceil(time), width-textPadding, textPadding);
             
            break;

        case GameStates.END:
            sequence.stop();
            walkSound.stop();
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
        this.dead = false;
    }
    
    addAnimation(key, animation) {
        this.animations[key]= animation;
    }
    draw(){
      let animation = this.animations[this.currentAnimation];
      if (animation){
        switch (this.currentAnimation){
            case "right":
                if(this.x <= 380)
                {
                    this.x += 2 + score;
                }
                else
                    enemy.currentAnimation = "left";
                    this.animations[this.currentAnimation].flipped = true;
                    this.lastFrame = true;
                break;
            case "left":
                if(this.x >= 20)
                    {
                        this.x -= 2 + score;
                    }
                
                else
                    enemy.currentAnimation = "right";
                    this.animations[this.currentAnimation].flipped = false;
                    this.lastFrame = false;
                break;
                    
        }   
         push();
         translate(this.x, this.y);
        
         
         
         animation.draw();
         pop();
      }
    }
  
  mousePressed() {

    console.log("EX: " + this.x,  "EY: "+ this.y, "MX: " + mouseX, "MY: " + mouseY);
            if(mouseX + mouseY <= (this.x+this.y+textPadding) && mouseX+mouseY >= (this.x+this.y-2*textPadding) )
            {
                console.log("Squished");
                enemy.currentAnimation = "death";
                squishSound.start();
                score +=1;
                setTempo();
                
                
            
                setTimeout(() => pnP(), 300);
                


            }
     
   }

}

function mouseClicked() {

    switch (gameState){
        case GameStates.START:
         
         sequence.start(Tone.now());
         walkSound.start();
         gameState = GameStates.PLAY;
         
            break;
        case GameStates.PLAY:

            enemy.mousePressed();
            break;
        case GameStates.END:
        walkSound.stop();
        sequence.stop();
        score = 0;
        time = 30;
        
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
 function pnP(){

    bugArray.pop();
    enemy = new Enemy(getRandomInt(),getRandomInt());
    enemy.addAnimation("right", new SpriteAnimation(bug,0,0,5));
    enemy.addAnimation("left", new SpriteAnimation(bug,0,0,5));
    enemy.addAnimation("death", new SpriteAnimation(bug,6,0,7));
    enemy.currentAnimation = "right";
    walkSound.playbackRate = 1 + (score/100);
    walkSound.start();
    walkSound.loop = true;
    walkSound.loopEnd = 2;
    bugArray.push(enemy);

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
    prototype.open("Arduino", 9600);
}

function zero(){
    if (port.opened()){
        port.write('zero\n');
    }
}
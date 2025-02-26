let sampler, button1;
function setup() {
    createCanvas(400,400);
    button1 = createButton("Play Sample");
    button1.position(10,30);
}

function preload(){
    sampler = new Tone.Player("media/Flamethrower.mp3");
    sampler2 = new Tone.Player("media/GigaDrain.mp3");
    sampler3 = new Tone.Player("media/HitSuperEffective.mp3");
    sampler4 = new Tone.Player("media/IceBeam.mp3");
}

  function draw(){
    background(220);
  }
function 
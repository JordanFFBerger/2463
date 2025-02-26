let sampler, button1;
function setup() {
    createCanvas(400,400);
    button1 = createButton("Play Sample");
}

function preload(){
    sampler = new Tone.Player("media/Flamethrower.mp3")
    sampler = new Tone.Player("media/Flamethrower.mp3")
}
}
  function draw(){
    background(220);
  }
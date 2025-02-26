
function setup() {
    createCanvas(400,400);
    button1 = createButton("Play Sample");
}

function preload(){
    sampler = new Tone.Player("media/")
}
  function draw(){
    background(220);
  }
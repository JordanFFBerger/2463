
let sampler, sampler2, sampler3, sampler4, button1, button2, button3, button4;
function setup() {
    createCanvas(400,400);
    button1 = createButton("Hot");
    button1.position(10,20);
    button1.mousePressed(() => sampler.start());
    button2 = createButton("Cold");
    button2.position(10,0);
    button3 = createButton("Leech");
    button3.position(10,40);
    button4 = createButton("Ouch");
    button4.position(10,60);
}

function preload(){
    samples = new Tone.Players({ 

    });
}

  function draw(){
    background(220);
  }

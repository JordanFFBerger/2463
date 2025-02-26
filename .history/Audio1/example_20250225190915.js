
let samples, button1, button2, button3, button4;
function setup() {
    createCanvas(400,400);
    button1 = createButton("Hot");
    button1.position(10,20);
    button1.mousePressed(() => {samples.player("hot").start()});
    button2 = createButton("Cold");
    button2.position(10,0);
    button2.mousePressed(() => {samples.player("cold").start()});
    button3 = createButton("Leech");
    button3.position(10,40);
    button3.mousePressed(() => {samples.player("leech").start()});
    button4 = createButton("Ouch");
    button4.position(10,60);
    button4
}

function preload(){
    samples = new Tone.Players({ 

        hot: "media/Flamethrower.mp3",
        cold: "media/IceBeam.mp3",
        leech: "media/GigaDrain.mp3",
        ouch: "media/HitSuperEffective.mp3"

    }).toDestination();
}

  function draw(){
    background(220);
  }

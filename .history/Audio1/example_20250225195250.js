
let samples, button1, button2, button3, button4, startContext;
let feedback = new Tone.FeedbackDelay(.1,2).toDestination
function setup() {
    createCanvas(400,400);
    startContext = createButton("Start Audio Context");
    startContext.position(0,0)
    startContext.mousePressed(startAudioContext())
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
    button4.mousePressed(() => {samples.player("ouch").start()});
}

function preload(){
    samples = new Tone.Players({ 

        hot: "media/Flamethrower.mp3",
        cold: "media/IceBeam.mp3",
        leech: "media/GigaDrain.mp3",
        ouch: "media/HitSuperEffective.mp3"

    }).connect(feedback);
}

  function draw(){
    background(220);
  }

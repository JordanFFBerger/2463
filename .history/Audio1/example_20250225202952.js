
let samples, button1, button2, button3, button4, startContext;
let feedback = new Tone.FeedbackDelay(.1,.2).toDestination();
function setup() {
    createCanvas(400,400);
    startContext = createButton("Start Audio Context");
    startContext.position(100,0)
    startContext.mousePressed(startAudioContext);
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
    feedbackSlider = createSlider(0, 1, 0, 0.01);
    feedbackSlider.position(10,100);
    feedbackSlider.input(() => {feedback.delayTime.value = feedbackSlider.value()});
    delayTimeSlider = createSlider(0, 0.99, 0, 0.01);
    delayTimeSlider.position(200, 100);
    delayTimeSlider.input(() => {})
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
    text("Delay Time: " + feedbackSlider.value(), 15,90)
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


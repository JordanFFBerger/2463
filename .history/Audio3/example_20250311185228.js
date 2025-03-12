let basicSynth, filt;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(350, "lowpass", -50).toDestination();
 basicSynth = new Tone.Synth().connect
}


function draw(){
 background(220);
}
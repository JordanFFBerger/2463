let basicSynth, filt;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(300, "lowpass");
}


function draw(){
 background(220);
}
let basicSynth, filt, LFOfilt;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(300, "lowpass", -48).toDestination();
 basicSynth = new Tone.Synth({
   
 }).connect(filt);
 LFOfilt = new Tone.LFO(10,200,2000).start();
 LFOfilt.connect(filt.frequency);
}


function draw(){
 background(220);
}

function mouseClicked(){
 basicSynth.triggerAttackRelease(random[200,400], 5);
 console.log("Clicked");
}
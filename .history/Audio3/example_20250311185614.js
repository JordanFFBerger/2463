let basicSynth, filt, LFOfilt;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(350, "lowpass", -50).toDestination();
 basicSynth = new Tone.Synth({
    envelope: {
        attack: 0.2,
        decay: 0.4,
        sustain: 0.9,
        release: 0.4
    }
 }).connect(filt);
 
}


function draw(){
 background(220);
}
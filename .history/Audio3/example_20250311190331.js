let basicSynth, filt, LFOfilt;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(350, "lowpass", -48).toDestination();
 basicSynth = new Tone.Synth({
    envelope: {
        attack: 0.2,
        decay: 0.4,
        sustain: 0.9,
        release: 0.4
    }
 }).connect(filt);
 LFOfilt = new Tone.LFO(10,200,2000).start();
 LFOfilt.connect(filt.frequency);
}


function draw(){
 background(220);
}

function mouseClicked(){
 basicSynth.triggerAttackRelease(random[200,400]);
}
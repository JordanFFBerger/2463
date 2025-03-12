let basicSynth, filt, LFOfilt, random;

function setup(){
 createCanvas(400,400);
 filt = new Tone.Filter(300, "lowpass", -48).toDestination();
 basicSynth = new Tone.Synth({
    envelope: {
        attack: 0.2,
        decay: 0.4,
        sustain: 0.9,
        release: 0.4
    }
 }).connect(filt);
 LFOfilt = new Tone.LFO(15,200,2000).start();
 LFOfilt.connect(filt.frequency);
}


function draw(){
 background(220);
}

function mouseClicked(){
 random = random(200,400);
 basicSynth.triggerAttackRelease(200, 5);
 console.log("Clicked");
}
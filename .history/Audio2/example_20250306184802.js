let synth1, filt, rev;

function setup(){
    createCanvas(400,400);
    filt = new Tone .Filter(1000, "lowpass").toDesintation();
    rev = new Tone.Reverb(1.5).connect(filt);
    synth1 = new Tone.Synth({
        envelope
    })
}

function draw() {
    background(220);
}
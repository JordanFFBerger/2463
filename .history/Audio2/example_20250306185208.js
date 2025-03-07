let synth1, filt, rev;
let keyNotes = {
    'a': "A1",
    's': "A2",
    'd': "A3",
    'f': "A4",
    
}
function setup(){
    createCanvas(400,400);
    filt = new Tone .Filter(1000, "lowpass").toDesintation();
    rev = new Tone.Reverb(1.5).connect(filt);
    synth1 = new Tone.Synth({
        envelope: {
            attack: 0.2,
            decay: 0.4,
            sustain: 0.9,
            release: 0.4
        }
    }).connect(rev)
}

function draw() {
    background(220);
}
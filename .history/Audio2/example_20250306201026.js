let synth1, filt, rev, polyCracker;
let activeKey = null;
let keyNotes = {
    'a': "C2",
    's': "D2",
    'd': "E2",
    'f': "F2",
    'g': "G2", 
    'h': "A2",
    'j': "B2",
    'k': "C3"
}
function setup(){
    createCanvas(400,400);
    filt = new Tone .Filter(1000, "lowpass").toDestination();
    rev = new Tone.Reverb(1.5).connect(filt);
    synth1 = new Tone.Synth({
        envelope: {
            attack: 0.2,
            decay: 0.4,
            sustain: 0.9,
            release: 0.4
        }
    }).connect(rev)
    synth1.portamento.value = .2;
    polyCracker = new Tone.PolySynth(Tone.Synth);
}

function draw() {
    background(220);
}

function keyPressed() {
    let pitch = keyNotes[key];
    if( pitch && key !== activeKey){
        synth1.triggerRelease();
        activeKey = key;
        synth1.triggerAttack(pitch);
    }
}
function keyReleased() {
    if (key == activeKey)
    {
        synth1.triggerRelease();
        activeKey = null;
    }
}
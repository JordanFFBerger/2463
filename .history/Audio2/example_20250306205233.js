let synth1, filt, rev, polyCracker;

//i initially had a metal synth as indicated by metal 
// notes but it did not sound very good so 
// i swapped it out for FMSynth instead
let activeKey = null;
let vibrato = new Tone.vibrato(0.2,0.2).toDestination();
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

let metalNotes = {
    'q' : "C1",
    'w': "D1",
    'e': "E1",
    'r': "F1",
    't': "G1",
    'y': "A1",
    'u': "B1"
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
    frequencySlider = createSlider(0, 1, 0, 0.01);
    frequencySlider.position(10,100);
    frequencySlider.input(() =>{vibrato.frequency.value = frequencySlider.value()});
    depthSlider = createSlider(0,1,0, 0.01);
    depthSlider.position(200, 100);
    synth1.portamento.value = .2;
    polyCracker = new Tone.PolySynth(Tone.FMSynth).connect(rev);
    polyCracker.set({
        envelope: {
            attack: 0.5,
            decay: 0.7,
            sustain: 0.3,
            release:  0.2
        },
        oscillator: {
            type: 'sawtooth'
        }
    })
    polyCracker.volume.value = -5;
}

function draw() {
    background(220);
}

function keyPressed() {
    let pitch = keyNotes[key];
    let metalPitch = metalNotes[key];
    if( pitch && key !== activeKey){
        synth1.triggerRelease();
        activeKey = key;
        synth1.triggerAttack(pitch);
    }
    else if (metalPitch)
    {
        polyCracker.triggerAttack(metalPitch);
    }
}
function keyReleased() {
    let metalPitch = metalNotes[key];
    if (key == activeKey)
    {
        synth1.triggerRelease();
        activeKey = null;
    }
    else if (metalPitch)
    {
        polyCracker.triggerRelease(metalPitch);
    }
}
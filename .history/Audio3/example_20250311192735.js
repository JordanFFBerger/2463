let basicSynth, filt, LFOfilt, randomval, laserGun, flag, Pnoise;


flag = false;

function setup(){
 createCanvas(400,400);
 
 filt = new Tone.Filter(300, "lowpass", -48).toDestination();
 Pnoise = new Tone.Noise("white").start().connect(filt);
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
 if(flag == true)
 {
    image(laserGun, 0, 0, 400, 400);
 }
}
function preload(){
    laserGun = loadImage("media/download.png");
}
function mouseClicked(){
 flag = true;
 basicSynth.triggerAttackRelease(random(200,400), 5);
 console.log("Clicked");
 
}
let port;
let button1, button2;
let buttonStatus = "";
let backgroundColor;
let buttonState = 
function setup() {
    createCanvas(400,400);
    colorMode(HSB);
    port = createSerial();
    button1 = createButton("Connect To Arduino");
    button1.mousePressed(connectToSerial);
    button2 = createButton("turn light on/off");
    button2.mousePressed(onOff)
    backgroundColor = color(220);
}

function draw() {
    background(backgroundColor);


    function onOff(){
        if(button)
      
    }
    let str = port.readUntil("\n");
    if (str !== ""){
            buttonStatus = str;
            let val = Number(str);
            if(!isNaN(val))
            {
                let hue = map(val, 0, 132, 0, 360);
                backgroundColor = color(hue, 255, 255);
           
            }
    }
    
    text(buttonStatus, 20, 20);
}

function connectToSerial()
{
    port.open('Arduino', 9600);
}


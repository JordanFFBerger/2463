let port;
let button1;
let buttonStatus = "";
let backgroundColor;
function setup() {
    createCanvas(400,400);

    port = createSerial();
    button1 = createButton("Connect To Arduino");
    button1.mousePressed(connectToSerial);
}

function draw() {
    background(backgroundColor);

    let str = port.readUntil("\n");
    if (str !== ""){
        buttonStatus = str;
        let val = Number(str);
        if(!isNaN(val))
        {
           let hue = map(val, 0, 132, 0, 360);
        }
    }
    text(buttonStatus, 20, 20);
}

function connectToSerial()
{
    port.open('Arduino', 9600);
}
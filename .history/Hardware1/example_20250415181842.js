let port;
let button1;
function setup() {
    createCanvas(400,400);

    port = createSerial();
    button1 = createButton("Connect To Arduino");
    button1.mousePressed(connectToSerial);
}

function draw() {
    background(220);

    let str = port.readUntil("\n");
    if (str !== )
}

function connectToSerial()
{
    port.open('Arduino', 9600);
}
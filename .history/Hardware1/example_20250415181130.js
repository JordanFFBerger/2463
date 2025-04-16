let port;
let button1;
function setup() {
    createCanvas(400,400);

    port = createSerial();
    button1 = createButton("Connect To Arduino");
    button1.mousePressed()
}

function draw() {
    background(220);
}
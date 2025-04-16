let port;
let button1;
function setup() {
    createCanvas(400,400);

    port = createSerial();
    button1 = createButton("Connect To Arduino")
}

function draw() {
    background(220);
}
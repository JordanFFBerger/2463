function setup() {
    createCanvas(400, 200);
    angleMode(DEGREES);
  }
  
  function draw() {
    noStroke();
    background(0, 0, 0);
    fill(255, 255, 0);
    circle(100,100, 150);
    fill(255,0,0);
    square(225, 25, 125);
    arc(225, 75, 100, 100,180, 0);
  }
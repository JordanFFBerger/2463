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
    square(225, 25, 150);
    arc(275, 75, 150, 125 ,180, 0);
  }
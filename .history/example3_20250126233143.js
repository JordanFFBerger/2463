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
    rect(225, 75, 150, 125);
    arc(300, 75, 150, 125 ,180, 0);
  }
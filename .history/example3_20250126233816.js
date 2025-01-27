function setup() {
    createCanvas(400, 200);
    angleMode(DEGREES);
  }
  
  function draw() {
    noStroke();
    background(0, 0, 0);
    
    fill(255, 255, 0);
    circle(100,100, 150);
    fill(0,0,0);
    arc(80, 100, 150, 125, 135, 225);
    fill(255,0,0);
    rect(225, 75, 150, 100);
    arc(300, 75, 150, 125 ,180, 0);
    fill (255,255,255)
    circle(255, 100, 50)
  }
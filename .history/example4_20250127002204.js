function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    strokeWeight(4);
    stroke(255,255,255);
    background(50,0,255);
    fill(24,100,50);
    circle (200, 200, 200);
    fill(255,0,0);
    noStroke();
    circle (200,200,60);
    
    stroke(255,255,255);
    strokeWeight(4);
    beginShape();
    vertex(200,100);
    vertex(180, 170);
    endShape(CLOSE);
    beginShape();
    vertex(200,100);
    vertex()
    endShape(CLOSE);
  }
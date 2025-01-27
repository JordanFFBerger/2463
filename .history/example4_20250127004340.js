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
    vertex(175, 170);
    
    endShape(CLOSE);
    beginShape();
    vertex(200,100);
    vertex(220,170);
    endShape(CLOSE);
    beginShape();
    vertex(220,170);
    vertex(300,170);
    endShape(CLOSE);
    beginShape();
    vertex(300,170);
    vertex(240, 225);
    endShape(CLOSE);
    beginShape();
    vertex(240, 225);
    vertex(250, 290);
    endShape(CLOSE);
    beginShape();
    vertex(250, 290);
    vertex(200, 225);
    endShape(CLOSE);
    beginShape();
    vertex(200,225);
    vertex(165, 290)
    endShape(CLOSE);
    beginShape();
    vertex(165,290);
    vertex(155, 225);
    endShape(CLOSE);
    beginShape();
    vertex(155, 225);
    vertex(100, 170)
    endShape(CLOSE);
  }
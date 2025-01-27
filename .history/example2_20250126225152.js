function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    
    background(255, 255, 255);
    noStroke();
    fill('red');
    alpha(10);
    circle (300, 100, 100);
    fill('blue');
    circle (255, 150, 100);
    fill('green');
    circle (340, 150, 100);
  }
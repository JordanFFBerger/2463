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
    
    stroke(255,255,255);
    strokeWeight(4);
    arc(200,200,100,100,60,120);
function star(x,y,n, r1, r2, angle)
{
    let theta = TAU / n
     beginShape();
     for(let i = 0; i < n; i++)
     {
       
        vertex(x + cos(i*theta) * r1, y + sin(i*theta) * r2);
        vertex(x + cos)
     }
} 
  }
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    strokeWeight(4);
    stroke(255,255,255);
    background(50,0,255);
    fill(24,100,50);
    star(10, 10, 5,  200, 100, 0);
function star(x,y,n, r1, r2, angle)
{
    let theta = TAU / n
     beginShape();
     for(let i = 0; i < n; i++)
     {
       
        vertex(x + cos(i*theta) * r1, y + sin(i*theta) * r2);
        vertex(x + cos((i+.5)*theta) * r2, y + sin((i+.5) * theta) * r2 );
     }
    endShape(CLOSE);
} 
  }
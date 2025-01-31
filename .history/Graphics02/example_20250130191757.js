function setup() {
    // Create the canvas
    createCanvas(710, 400);
  
    colorMode(RGB);
    // Set background to black
    background(255,255,255);
  
    // Set width of the lines
    strokeWeight(10);
  
    // Set color mode to hue-saturation-brightness (HSB)
    
  
    // Set screen reader accessible description
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  function draw(){
    noStroke();
    //red
    fill(255,0,0);
    square(0, 20 ,20);
    //green
    fill(0,255,0);
    square(0, 45, 20);
    //blue
    fill(0,0,255);
    square(0,70,20);
    //yellow
    fill (255,255,0);
    square (0,95,20);
    //magenta
    fill(255,0,255);
    square (0,120,20);
    //cyan
    fill(0,255,255);
    square(0,145,20);
    //brown
    fill(150,75,0);
    square(0,170,20);
    //white
    fill(255,255,255);
    square(0,195,20);
    //black
    fill(0,0,0);
    square(0,220,20);

  }
  function mouseClicked() {
    console.log(mouseX, mouseY);
    let red;
    let blue;
    let green;
    
    if(mouseX >= 0 && mouseX <= 20 && mouseY <= 240){
        //making sure it does not pick the pixels 
    

    }
    stroke(red, green, blue);
  }
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
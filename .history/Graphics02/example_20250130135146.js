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
    square(0,)
  }
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    
    stroke(0, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
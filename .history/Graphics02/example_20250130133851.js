function setup() {
    // Create the canvas
    createCanvas(710, 400);
    colorMode(RGB);
  
    // Set background to black
    background(255,255,255);
  
    // Set width of the lines
    strokeWeight(10);
  
    
  
    // Set screen reader accessible description
    describe('Simple paint program');
  }
  
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
     
    stroke(0,90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
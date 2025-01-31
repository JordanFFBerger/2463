function setup() {
    // Create the canvas
    createCanvas(710, 400);
  
    // Set background to black
    background(0);
  
    // Set width of the lines
    strokeWeight(10);
  
    colorMode(RGB);
  
    // Set screen reader accessible description
    describe('Simple paint program');
  }
  
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
     
    stroke(90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
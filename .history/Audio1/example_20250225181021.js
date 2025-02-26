function setup() {
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
    
    
    if(mouseX >= 0 && mouseX <= 20 && mouseY <= 240){
        if(mouseY >= 20 && mouseY <=40)
        {
            red = 255;
            blue = 0;
            green = 0;
            console.log("Red");
        }
        if(mouseY >= 45 && mouseY <= 65)
        {
            red = 0;
            blue = 0;
            green = 255;
            console.log("Green");
        }
        if(mouseY >= 70 && mouseY <= 85)
        {
            red = 0;
            blue = 255;
            green = 0;
            console.log("Blue");
        }
        if(mouseY >= 95 && mouseY <= 110)
        {
            red = 255;
            green = 255;
            blue = 0;
            console.log("Yellow");
        }
        if(mouseY >= 120 && mouseY <= 135)
        {
           red = 255;
           green = 0;
           blue = 255;
           console.log("Magenta");
        }
        if(mouseY >= 145 && mouseY <= 160)
        {
            red = 0;
            green = 255;
            blue = 255;
            console.log("Cyan");
        }
        if(mouseY >= 170 && mouseY <= 185)
        {
            red = 150;
            green = 75;
            blue = 0;
            console.log("Brown");
        }
        if(mouseY >= 195 && mouseY <= 210)
        {
            red = 255;
            blue = 255;
            green = 255;
            console.log("White");
        }
        if(mouseY >= 220 && mouseY <= 235)
        {
            red = 0;
            blue = 0;
            green = 0;
            console.log("Black");
        }
    

    }
    console.log("Red: ", red, "Green: ", green, "Blue: ", blue)
    
  }
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    stroke(red, green, blue);

    if(mouseX >= 20 & mouseX <=40 & mouseY <=235)
    {
       console.log("Inside of Palette")
    }
    else{
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
  }
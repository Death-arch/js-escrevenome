function setup() {
    createCanvas(1280, 1280);
    background("purple");
  }
  
  function draw() {
    circle("pink")
    fill("purple")
    
    // console.log(mouseIsPressed)
    
    if(mouseIsPressed)  {
        rect(mouseX, mouseY, 20, 35)
    }
  }
  
  
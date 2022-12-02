function setup() {
  // put setup code here
  var width = 700;
  var height = 750;
  createCanvas(windowWidth, windowHeight);
  background('#FFC4F8');
}

function draw() {
  // put drawing code here

  if(mouseIsPressed === true){
  fill('#B488FF');
  stroke('#6B36FF');
  ellipse(mouseX, mouseY, 100, 150);
  }
  else{
    fill('#97D9FF');
    stroke('#4992FF');
    square(mouseX, mouseY, 125);
    }

}

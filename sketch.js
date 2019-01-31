function setup() {
  createCanvas(700, 300);
    background(255,255,51);
}

function draw() {

  //rectangel
  rectMode(CENTER);
  fill(0,190,10);
  //rect(250,100,35,35);
  //ellipse
  noStroke(); // by using a no stroke and a alpha channel we can 
  //make it look like a paint softwate
  fill(25,25,120);
  ellipse(mouseX,mouseY,15,15,90);
  
}
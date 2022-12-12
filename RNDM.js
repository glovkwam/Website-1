var bgColor;

let count = 0;
let button;

function setup() {
  
  createCanvas(400, 400);
  bgColor = color( random(255), random(255), random(255) );
  createButton("RR");
  angleMode(DEGREES);

button = createButton ("RR");
button.mousePressed();
button.style("padding", "20px");
button.style("background-color", "#28b07a");
}



function draw() {
  if (count<360){
     count++
   }else if (count==360)(count=0)
  bigTri();
  bigTri(2,2);
  smallTri();
  medTri();
  

}
function mousePressed(){
	bgColor = color( random(255), random(255), random(255) );
    background(bgColor);

}

function smallTri(){
  push();
  fill(120, 0, 105);
  beginShape();
  vertex(width * 0.1, height * 0.1);
  vertex(width * 0.25, height * 0.3);
  vertex(width * 0.12, height * 0.26);
  vertex(width * 0.12, height * 0.19);

  endShape(CLOSE);
  pop();
}

function medTri(){
  push();
  translate(width / 2, height / 2);
  rotate(count);
  translate(width * -0.5, height * -0.5);
  fill(random(225),random(225),random(225));
  beginShape();
  vertex(width * 0.2, height * 0.4);
  vertex(width * 0.8, height * 0.2);
  vertex(width * 0.4, height * 0.6);
  endShape(CLOSE);
  pop();
}

function bigTri(xpos,ypos){ 
  push();
  translate(width/xpos,height/ypos);
  rotate(count*.25);
  translate(width*-.5,height*-.5)
  fill(120, 200, 5);
  beginShape();
 vertex(width * 0.4, height * 0.1);
  vertex(width * 0.8, height * 0.7);
  vertex(width * 0.2, height * 0.8);
  endShape(CLOSE);
  pop();
  
}
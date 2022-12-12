let mic;
let ground;
let stars;
let sunX = 0;

let myInt = 52;
let yoff = 0;
const dots = [];
var x = 280;
var y = 280;
function setup() {
  createCanvas(500, 500);
  frameRate(10);
  mic = new p5.AudioIn();
  mic.start();
  stars = createGraphics(width, height);
  stars.background(32, 0, 64);
  for (let i = 0; i < 1000; i++) {
    stars.stroke(255);
    stars.strokeWeight(2);
    stars.point(random(width), random(height));
  }
  ground = createGraphics(width, height * 0.25);
  ground.background(32);
  for (let i = 0; i < 1000; i++) {
    ground.noStroke();
    ground.fill(0, random(50), 0);
    ground.square(random(ground.width), random(ground.height), 10);
  }
}

function draw() {
  image(stars, 0, 0);
  image(ground, 0, height * 0.75);

  push();
  translate(width / 2, height / 2);
  let da = PI / 200;
  let dx = 0.03;
  let xoff = 0;

  beginShape();
  for (let a = 0; a <= TWO_PI; a += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * a) * map(n, 0, 1, 5, 300);
    let x = r * cos(a);
    let y = r * sin(a);
    if (a < PI) {
      xoff += dx;
    } else {
      xoff -= dx;
    }
    //point(x, y);
    vertex(x, y);
  }
  endShape();
  pop();
  yoff += 0.01;
  push();
  fill(229, 220, 170);
  noStroke();
  circle(sunX, height / 9, 50);
  sunX = (sunX + 3) % width;
  print(sunX);
  pop();
  push();
  stroke(100);
  strokeWeight(10); // Resulting strokeweight is 5
  line(250, 200, 300, 50, 90, 100);
  pop();
  push();
  stroke(100);
  strokeWeight(10); // Resulting strokeweight is 5
  line(250, 210, 200, 50, 90, 90);
  pop();
  body();
  head();
  leftEye(width / 2.1, height / 2.4);
  rightEye();
  mouth();
  curve();
  translate(width / 20, height / 20);

  stroke(25);
  fill(229, 40, 170);
  strokeWeight(1);

  //if(myInt == 52){comsole.log("YES"))else if (myInt!=2)(console.log("NO"))}

  //let number =0
  // while (number <= 12){
  //console.log(number);
  //number++;
  //}
 for (var i=0;i<10;i++) {
  var xDis = random(-180, 180);
  var yDis = random(-180, 180);
  butterfly(mouseX+xDis, mouseY+yDis);
 }
 
 x = x+random(-5, 6);
 y = y+random(-4, 4);
 butterfly(x, y);
}

function mouth() {
  ellipse(height / 2, width / 2.2, 30, mic.getLevel() * 400);
}

function head() {
  fill(100, 10, 250);
  ellipse(width / 2, height / 2.3, 70);
}

function leftEye(xpos, ypos) {
  fill(25, 250, 10);
  ellipse(xpos, ypos, 10, 10);
}
function rightEye() {
  ellipse(width / 1.9, height / 2.4, 10, 10);
}
function body() {
  fill(108, 10, 250);
  ellipse(width / 2, height / 1.6, 50, 200);
}
function butterfly (x, y) {
 line(x-15,y-10,x,y);
  line(x+15,y-10,x,y);
 // fill(YELLOW);
  ellipse(x-25,y+20,35,30);
  ellipse(x-25,y+40,35,30);
  ellipse(x+25,y+20,35,30);
  ellipse(x+25,y+40,35,30);
  ellipse(x,y+30,30,60);
}
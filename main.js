function preload(){
}
function setup(){
    canvas = createCanvas(700,450);
    canvas.position(110,250);
    capture = createCapture(VIDEO);
    capture.hide();
}
function draw(){
    fill(225, 179, 255)
    stroke(110, 0, 181)
    rect(30, 20, 675, 25);
    rect(30, 20, 25, 425);
    rect(675, 20, 25, 425);
    rect(30, 425, 675, 25);
    image(capture,50,45,625,380);
    translate(50,40);
  noStroke();
  fill(255, 79, 214)
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 80);
    rotate(PI/5);
  }
  translate(640,0);
  noStroke();
  fill(255, 79, 214)
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 80);
    rotate(PI/5);
  }
  translate(0,375);
  noStroke();
  fill(255, 79, 214)
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 80);
    rotate(PI/5);
  }
  translate(20,400);
  noStroke();
  fill(255, 79, 214)
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 80);
    rotate(PI/5);
  }
}
let turn = true;
let spot1 = {
  x: 0,
  y: 0
};
let spot2 = {
  x: 0,
  y: 0
};
let col = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255, 255, 255);
}

function draw() {

}

function mousePressed() {

  

  if (turn) {
    spot1.x = mouseX;
    spot1.y = mouseY;
    turn = false;
  } else {
    spot2.x = mouseX;
    spot2.y = mouseY;
    
    
    col.r = map(spot1.x, 0, width, 0, 255);
    col.g = map(spot1.y+spot2.y, 0, height*2, 0, 255);
    col.b = map(spot2.x, 0, width, 0, 255);
    stroke(col.r, col.g, col.b,75);
    strokeWeight(24);
    line(spot1.x, spot1.y, spot2.x, spot2.y);
    
    
    spot1.x = spot2.x;
    spot1.y = spot2.y

  }
  //console.log(spot1.x + " " + spot1.y + " " + spot2.x + " " + spot2.y);

}
function windowResized() {
    
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}
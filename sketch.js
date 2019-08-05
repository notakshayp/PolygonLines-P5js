let pointerLayer;
let finish=false;
let turn = true;
let start = {
  x: 0,
  y: 0
};
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
  createCanvas(windowWidth, windowHeight);
  pointerLayer = createGraphics(windowWidth, windowHeight);
  pointerLayer.clear();

}

function draw() {
  background(255);
  image(pointerLayer, 0, 0);
  noStroke();
  col.r = map(spot1.x, 0, width, 0, 255);
  col.g = map(spot1.y + spot2.y, 0, height * 2, 0, 255);
  col.b = map(spot2.x, 0, width, 0, 255);
  stroke(col.r, col.g, col.b, 100);
  strokeWeight(24);
  if (turn == false) {
    line(spot1.x, spot1.y, mouseX, mouseY);
  }
  if (mouseX == start.x && mouseY == start.y) {
    fill('rgba(255,0,0,0.5)');
    
  } else {
    fill('rgba(0,0,255,0.5)');
  }

  ellipse(mouseX, mouseY, 24, 24);

  //pointerLayer.ellipse(mouseX,mouseY,24,24);
}

function mousePressed() {

  if (turn) {
    spot1.x = mouseX;
    spot1.y = mouseY;
    turn = false;
    start.x = spot1.x;
    start.y = spot1.y;
  } else {
    spot2.x = mouseX;
    spot2.y = mouseY;


    col.r = map(spot1.x, 0, width, 0, 255);
    col.g = map(spot1.y + spot2.y, 0, height * 2, 0, 255);
    col.b = map(spot2.x, 0, width, 0, 255);
    pointerLayer.stroke(col.r, col.g, col.b, 100);
    pointerLayer.strokeWeight(24);
if(abs(mouseX-start.x)<=24 && abs(mouseY-start.y)<=24)
{
    pointerLayer.line(spot1.x, spot1.y, start.x, start.y);
  turn = true;
}
    else
    {
          pointerLayer.line(spot1.x, spot1.y, spot2.x, spot2.y);

    }
    console.log(spot1.x + " " + spot1.y + " " + spot2.x + " " + spot2.y);
    spot1.x = spot2.x;
    spot1.y = spot2.y

    if (start.x == spot1.x && start.y == spot1.y) {
     // turn = true;

      console.log("end");
    }
  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  
  background(255, 255, 255);
}

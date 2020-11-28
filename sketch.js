
var fixedRect, movingRect
var fRect,mRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fRect = createSprite(100, 300, 50, 80);
  fRect.shapeColor = "green";
  fRect.debug = true;
  mRect = createSprite(1000,300,80,30);
  mRect.shapeColor = "green";
  mRect.debug = true;

  fRect.velocityX=5;
  mRect.velocityX=-5;

  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255);  

  /*movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }

  else {

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }*/

// bounce off algorithm

if (movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY=-5*(-1);
  fixedRect.velocityY=5*(-1);

}

if (fRect.x-mRect.x<fRect.width/2+mRect.width/2 && mRect.x-fRect.x<fRect.width/2+mRect.width/2){
  fRect.velocityX=5*(-1);
  mRect.velocityX=-5*(-1);
mRect.shapeColor="red";
}


  drawSprites();
}
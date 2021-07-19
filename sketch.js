var path;
var pathIMG;
var boy;
var boyIMG;
var leftinvi
var rightinvi
function preload(){
  //pre-load image
pathIMG = loadImage ("path.png")
boyIMG = loadAnimation ("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite (200,200);
boy = createSprite (180, 340, 30, 30);
boy.addAnimation ("running boy",boyIMG);
boy.scale= 0.08
path.addImage(pathIMG);
path.scale= 1.2
path.velocityY = 4;
leftinvi= createSprite (15,  300, 15,100)
leftinvi.visible = false
rightinvi= createSprite (380,  300, 15,100)
rightinvi.visible = false
}

function draw() {
  background(0);
  if (path.y > 400){
    path.y = height/2
  }
  boy.x = World.mouseX
  boy.collide (leftinvi)
  boy.collide (rightinvi)
drawSprites ();
}

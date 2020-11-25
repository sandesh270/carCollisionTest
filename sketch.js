var car , wall , wallI;
var speed , weight;
var back , block;
var greenCar , redCar , yellowCar , whiteCar;
function preload() {
wallI = loadImage("wall.png");
greenCar = loadImage("green.png");
redCar = loadImage("red.png");
yellowCar = loadImage("yellow.png");
whiteCar = loadImage("white.png");
back = loadImage("back.png");
}
function setup() {
  createCanvas(1600,400);
  car = createSprite(90,250,30,30);
  car.addImage(whiteCar);
  car.scale = 0.4;
  wall = createSprite(1500,200,60,200);
  wall.addImage(wallI);
  wall.scale = 0.5;
  block = createSprite(800,385,750,20);
  block.shapeColor = "white";
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}

function draw() {
  background(back);
  if(keyDown("SPACE")){
    car.velocityX = speed;
  }
  if(keyDown("R")){
    car.x = 90;
    car.y = 250;
    car.addImage(whiteCar);
  car.scale = 0.4;
  }
  if(wall.x-car.x < car.width/4.5 + wall.width/4.5){
    car.velocityX =0;
    var deformation = 0.5 * speed * weight * speed/22509;
    if(deformation>180){
      car.addImage(redCar);
      car.scale = 0.4;
    }
    if(deformation<180 && deformation>100){
      car.addImage(yellowCar);
      car.scale = 0.4;
    }
    if(deformation<100){
      car.addImage(greenCar);
      car.scale = 0.4;
    }
  }
  drawSprites();
  fill("red");
  textSize(30)
  text("press SPACE to run && R to restart" , 750 , 50);
}

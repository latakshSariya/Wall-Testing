
var thickness;
var bullet;
var wall;
var bulletRightEdge;
var wallLeftEdge;
var speed,weight;

function setup() {
  createCanvas(1000,400);

  speed=random(223,312);
  weight=random(30,52);
  thickness=random(22,83);
  
  
  bullet=createSprite(80, 200, 50, 5);
  bullet.shapeColor=("white");

 
  wall=createSprite(600, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;

}

function draw() {
  background(0);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
    wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
}
function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false;
}

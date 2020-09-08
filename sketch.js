var bullet,wall,speed,weight,damage,thickness

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,30,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="green";

  
}

function draw() {
  background(0);
  
  bullet.collide(wall);

  if(wall.x-bullet.x<wall.width/2+bullet.width/2&&
     bullet.x-wall.x<wall.width/2+bullet.width/2&&
     wall.y-bullet.y<wall.width/2+bullet.width/2&&
     bullet.y-wall.y<wall.width/2+bullet.width/2){

      bullet.velocityX=0;

      damage=0.5*weight*speed*speed/thickness*thickness*thickness;
      
      if(damage>=10) {
        wall.shapeColor="red";
      }
     }

  drawSprites();
    }
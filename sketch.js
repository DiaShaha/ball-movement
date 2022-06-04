var ball;

function setup() {
  createCanvas(700,700);
 ball=createSprite(500,500,20,20);
}

function draw() 
{
  background(30);
//ball.x=200;
//ball.velocityX=10;
  if(keyIsDown(RIGHT_ARROW)){
    ball.x += 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x -= 10;
  }
  if(keyIsDown(UP_ARROW)){
    ball.y -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.y += 10;
  }
drawSprites();
}





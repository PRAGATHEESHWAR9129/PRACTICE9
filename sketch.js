
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("BROWN");


if (keyIsDown(UP_ARROW)){
  background("GREEN");
}

  if (keyIsDown(DOWN_ARROW)){
    background("RED");
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("YELLOW");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("CYAN");
  }

drawSprites();

}





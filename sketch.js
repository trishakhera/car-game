var car,wall;

var weight,speed;

function setup() {
  createCanvas(1600,400);

  weight =random(400,1400);
  speed =random(50,90);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color("blue");

  wall = createSprite(1400,200,60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 *speed * weight* speed/22300;
	if(deformation>180)
	{
		car.shapeColor=color("red");
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color("yellow");
	}

  if(deformation<100)
	{
		car.shapeColor=color("green");
	}
  }  
  

  drawSprites();
}
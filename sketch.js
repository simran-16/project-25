
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject, groundObject;
var engine, world;

function setup() 
{
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(80, 450, 70);
	groundObject = new Ground(600, 600, width, 20);
	dustbinObj = new Dustbin(1000, 580);

	Engine.run(engine);
}

function draw()
{
	background(230);
	rectMode(CENTER);
  
	groundObject.display();
	dustbinObj.display();
	paperObject.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(paperObject.body, paperObject.body.position, {x: 130, y: -145});
	}
}


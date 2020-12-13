
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rooff;
var bobb;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobb = new bob(600,100,40,60,180);
	rooff = new roof(600,150,900,20,180);
	

	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




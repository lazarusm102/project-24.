
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var Ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new hammer(100,100,200,5);
	stone1 = new stone(200,200,100,100);
  rubber1 = new rubber(500,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

  hammer1.display();
  stone1.display();
  rubber.display();



  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof=new Roof(340, 150, 20, 300);
	bob1=new Bob(200, 350);
	bob2=new Bob(270, 350);
	bob3=new Bob(340, 350);
	bob4=new Bob(410, 350);
	bob5=new Bob(480, 350);
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
}




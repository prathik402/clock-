const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hr;
var mn;
var sc;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
let s = second();
text('Current second: \n' + s, 200, 50);
let m = minute();
text('Current minute: \n' + m, 100, 50);
let h = hour();
text('Current hour:\n' + h, 5, 50);
 
  push()
  translate(200,200)
  rotate(-90)
  rotate(scAngle);
  stroke("blue");
  strokeWeight(3);
  line(0,0,100,0);
  pop()
  push()
  translate(200,200)
  rotate(-90)
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  push()
  translate(200,200)
  rotate(-90)
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,70,0);
  pop()
  
  
  hr = hour();
  mn = minute();
  sc = second();
  drawSprites();
 
}




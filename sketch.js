const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall, ball;
var bob1Diameter = 40;
var bob2Diameter = 40;
var bob3Diameter = 40;
var bob4Diameter = 40;
var bob5Diameter = 40;

function preload(){

}

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(175, 100, 250, 20);

  bob1 = new Bob(100, 300);
  bob2 = new Bob(140, 300);
  bob3 = new Bob(180, 300);
  bob4 = new Bob(220, 300);
  bob5 = new Bob(260, 300);

  rope1 = new Rope(bob1.body, roof.body, -bob1Diameter*1.9, 0);
  rope2 = new Rope(bob2.body, roof.body, -bob2Diameter*0.9, 0);
  rope3 = new Rope(bob3.body, roof.body, bob3Diameter*0.01, 0);
  rope4 = new Rope(bob4.body, roof.body, bob4Diameter*1.1, 0);
  rope5 = new Rope(bob5.body, roof.body, bob5Diameter*2.1, 0);

  Engine.run(engine);
}


function draw(){
  background("lightGrey");
  Engine.update(engine);

  keyPressed();

  textSize(20);
  text(mouseX, 100, 30);
  text(mouseY, 200, 30);

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

  drawSprites();
}

function keyPressed(){
  if (keyDown(UP_ARROW)){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:40,y:-10});
  }
}
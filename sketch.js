var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600,400);
    
    engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(210, 350, 50, 50);
	bob2 = new Bob(255, 350, 50, 50);
	bob3 = new Bob(300, 350, 50, 50);
	bob4 = new Bob(345, 350, 50, 50);
	bob5 = new Bob(390, 350, 50, 50);

	roof = new Roof(300, 150, 300, 30);

	rope1 = new Rope(bob1.body, {x:210, y:150});
	rope2 = new Rope(bob2.body, {x:255, y:150});
	rope3 = new Rope(bob3.body, {x:300, y:150});
	rope4 = new Rope(bob4.body, {x:345, y:150});
	rope5 = new Rope(bob5.body, {x:390, y:150});
    
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
    background("peach");
    
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	roof.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	
    drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(UP_ARROW);
		Body.applyForce(bob1.body, bob1.body.position,{x:-350, y:-350});
	}
}




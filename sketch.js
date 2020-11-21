var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side
var side2
var side3

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
   
	side=new Ground(370,650,200,20);
	side2=new Ground(280,620,20,100);
	side3=new Ground(480,620,20,100);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  side.display();
  side2.display();
  side3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
  
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	// Look at the hints in the document and understand how to make the package body fall on
	Matter.Body.setStatic(packageBody,false);
  }
}




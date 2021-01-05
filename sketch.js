  //objects
var monkey,monkeyAnimation;
var ground,groundImage;
var obstacle,obstacleImage,obstacleGroup;
var banana,bananaImage,bananaGroup;
var bg;
var survival_time;

function preload(){
monkeyAnimation = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  
groundImage = loadImage("groung Image.jpg");
  
  obstacleImage = loadImage("obstacle.png");
  
  bananaImage = loadImage("banana.png");

}

function setup(){
  createCanvas(600,300);
  
  bg = createSprite(200,150,500,300);
  bg.addImage("groundImage",groundImage);
  bg.velocityX = -2;
  bg.scale = 2
  
 ground = createSprite(250,200,500,1) ;
  ground.visible = false;
  
  
  monkey = createSprite(50,150,10,10);
  monkey.addAnimation("monkey",monkeyAnimation)
  monkey.scale = 0.11 
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}

function draw(){
  background("white");
  
if(obstacleGroup.isTouching(monkey)){
  obstacleGroup.setVelocityXEach ( 0);
  bananaGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach ( -1);
  bananaGroup.setLifetimeEach(-1);
  bg.velocityX = 0;
  monkey.setVelocityY = 0;
  
}
  
  
   // jump when the space key is pressed
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (bg.x < 0){
    bg.x = bg.width/6;
  }
  
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacle();
  
  drawSprites();
  stroke("black"); 
  textSize(20); 
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnBanana(){
 // write your code here 
 if(frameCount%80 === 0){
    banana = createSprite(450,50,10,25);
  banana.addImage(bananaImage);
  banana.velocityX = -3;
   banana.scale = 0.1;
   banana.lifetime = 180;
    banana.y = Math.round(random(2,80));
   banana.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
   bananaGroup.add(banana);
 }
}

function spawnObstacle(){
 // write your code here 
 if(frameCount%300 === 0){
    obstacle = createSprite(450,200,10,25);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
   obstacle.scale = 0.2;
   obstacle.lifetime = 150;
   obstacleGroup.add(obstacle);
 }
}
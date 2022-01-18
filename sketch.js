var pusheen, catrunning, donut, donutImg, donutGroup;
var background1;
function preload(){
  catrunning = loadAnimation("pw1.png","pw2.png",
  "pw3.png","pw4.png")
  background1 = loadImage("bg1.png")
  donutImg = loadImage("donut.png");
  // background1 = loadImage("bg.png");
  // catcharged = loadImage("chargedcat.jpg")
}

function setup(){
  createCanvas(640,640)
  pusheen = createSprite(110,350,1,1);
 pusheen.addAnimation("running", catrunning);
 
  pusheen.scale=0.4;

    
  donutGroup = createGroup();
score=0;
pusheen.setCollider("circle",0,0,40);
pusheen.debug = true;
}
function draw(){
  background(background1);


   

   if( donutGroup.isTouching(pusheen)){


    donutGroup.remove(donut);
    donutGroup.destroyEach();
   
    score = score+1;
  }
 
  
 
  
  pusheen.x=World.mouseX;
  drawSprites();
  // fill("white")
  // text("Score:"+score,300,35);
}

// function spawnThunder(){
//   if(frameCount % 50 === 0){
   
//     
//     thunder.addImage(thunderImg);
//     thunder.scale=0.6;
   
    
//     thunder.addlifetime= 50;
    
//     thunder.depth=pusheen.depth;
    
    
//     thunderGroup.add(thunder);
//   }
// }
function spawndonuts(){
  if (frameCount % 30 === 0){
    donut= createSprite(10,10,40,10);
    donut.velocityY =-4;
    donut.y=Math.round(random(20,50))
    donut.addImage(donutImg);
     
    
    donut.scale=0.1;
    
     
    donut.addlifetime= 50;
   
 
   
   
    donutGroup.add(donuts);
  }
 }
 



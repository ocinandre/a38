var bow , arrow, background,redB,pinkB,greenB,blueB,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var gameState="inicio";
var score=0;

function preload(){
  
  backgroundImage = loadImage("fondo.png");
  arrowImage = loadImage("bala1.png");
  bowImage = loadImage("cohete.png");
  red_balloonImage = loadImage("imagen1.png");
  green_balloonImage = loadImage("imagen2.png");
  pink_balloonImage = loadImage("imagen3.png");
  blue_balloonImage = loadImage("imagen4.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crea el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crea el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.2;
   
  
   score = 0    
  redB=new Group();
  greenB=new Group(); 
  blueB=new Group();
  pinkB=new Group();
  arrowGroup=new Group();
 
}

function draw() {
 background(0);
  //fondo en movimiento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco en movimiento
  bow.y = World.mouseY

  
  



   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyDown("space")&& gameState === "inicio") {
    createArrow();
    
    
   
  }
   
  //crea enemigos de forma continua
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
   
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;

  }
  
   if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
     score=score+2;
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
     score=score+3;
  }
 
   if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  
 
  
  
  drawSprites();
  fill("white");
  text("Puntuación: "+ score, 300,50);
  
  
 
  inicio();


  
}



//crea las flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.5;
  redB.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.5;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.5;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.5
  pinkB.add(pink);
}
function inicio(){
  text("Pulsa spacio para inciar", 200,200);
  fill("white");
}
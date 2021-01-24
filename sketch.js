var tom,tomAnimation,tom2Animtion2,tomAnimation4;
var jerry,jerryAnim1,jerryAnim2,jerryAnim4;
var garden;

function preload() {
    //load the images here

    tomAnimation = loadImage("images/cat1.png");
    gardenAnim4 = loadImage("images/garden.png");
    jerryAnim1 = loadImage("images/mouse4.png");
    jerryAnim2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryAnim4 = loadImage("images/mouse4.png");
    tom2Animtion2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomAnimation42 = loadImage("images/cat4.png")
    
} 

function setup(){
    createCanvas(800,600);

    garden = createSprite(200,300,100,100);
    garden.addImage("grd",gardenAnim4);
    garden.scale=1.25;


    tom = createSprite(660,540,30,30);
    tom.addImage("tommy",tomAnimation);
    tom.addAnimation("tmj21",tom2Animtion2);
    tom.addImage("tjgj",tomAnimation42);
    tom.scale=0.1;

    jerry = createSprite(100,540,40,40);
    jerry.addImage("jer",jerryAnim1);
    jerry.addAnimation("jerr23",jerryAnim2);
    jerry.scale=0.1;

    
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

jerry.setCollider("rectangle",-15,-17,jerry.width,jerry.height-50); 

    if (keyWentDown("left")) {
        keyPressed();
    tom.velocityX=-4;

    }

    if(keyWentUp("left")){

        tom.velocityX=0;

    }

if(tom.isTouching(jerry)){
    over();
    tom.velocityX=0;
}

    drawSprites();
}


function keyPressed(){

    jerry.changeAnimation("jerr23",jerryAnim2);
    tom.changeAnimation("tmj21",tom2Animtion2)
    //For moving and changing animation write code here


}

function over(){

jerry.changeImage("jer", jerryAnim4);
tom.changeImage("tjgj",tomAnimation42);

}

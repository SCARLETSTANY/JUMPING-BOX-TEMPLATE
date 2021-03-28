var canvas;
var music;
var object1,object2,object3,object4,ball;
var movingSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingSprite = createSprite(random(10,750),300,20,20)
    movingSprite.shapeColor ="white";
    movingSprite.velocityX = 3
    movingSprite.velocityY = 3

object1 = createSprite(525,600,150,10)
object1.shapeColor = "green"
object2 = createSprite(725,600,150,10)
object2.shapeColor = "yellow"
object3 = createSprite(325,600,150,10)
object3.shapeColor = "blue"
object4 = createSprite(125,600,150,10)
object4.shapeColor = "red"
    //create box sprite and give velocity

}

function draw() {
    background ("black");
    //create edgeSprite
    
drawSprites();
}
    //add condition to check if box touching surface and make it box


var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,650);

    //create 4 different surfaces
 surface1=createSprite(35,645,150,20);
 surface1.shapeColor="darkblue";
 surface2=createSprite(200,645,150,20);
 surface2.shapeColor="orange";
 surface3=createSprite(365,645,150,20);
 surface3.shapeColor="pink";
 surface4=createSprite(530,645,150,20);
 surface4.shapeColor="darkgreen";


    //create box sprite and give velocity
    box=createSprite(300,300,20,20);
    box.shapeColor="white";
    box.velocityY=4;
    box.velocityX=4;
}

function draw() {
    background(rgb(169,169,169));
    music.play();
    //create edgeSprite
 Edges=createEdgeSprites();
 box.bounceOff(Edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1) ){
    box.shapeColor="darkblue";
    }
    if(surface2.isTouching(box)){
    box.shapeColor="orange";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3) ){
    box.shapeColor="pink";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4) ){
    box.shapeColor="darkgreen";
    }


    drawSprites();
}

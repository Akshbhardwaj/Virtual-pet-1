//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  happyDog1=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
 
  dog=createSprite(250,250);
  dog.addImage(dog1);
  dog.scale=0.2;
  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  
}


function draw() { 
  background(46,137,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    happyDog=createSprite(250,250)
    happyDog.addImage(happyDog1);
    happyDog.scale=0.2;
  
  }

  drawSprites();
  //add styles here
  
  fill("red");

  text("FOOD REMAINING : "+foodS,250,480);

}


function readStock(data){
 foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
 database.ref('/').update({
    Food:x
  })
}

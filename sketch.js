//Create variables here
var database;
var dog,dog1;
var Dog,happyDog;
var foodS,foodStock;


function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png")
  dog1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  Dog = createSprite(250,250,20,20);
  Dog.addImage(dog);
  Dog.scale = 0.11;

  database = firebase.database()
    console.log(database)
    foodStock = database.ref('Food');
    foodStock.on("value",readStock,showError);
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    happyDog.addImage(dog1)
  }

  drawSprites();
  //add styles here
  textSize(12)
  fill("red")
  text("NOTE : Press Up Arrow Key To Feed Drago Milk",150,20)
  text("Food remaining",+foodStock,150,50)

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function showError(){
  console.log("error in writing to the database")
}
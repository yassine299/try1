/*for rock*/
function change(){
  var number1;
  if( document.getElementById("rock")===rock){
    var number1=2;
  
 var randomhand= "index" + number1 +".png";

var randomimgsrc = "images/"+ randomhand;

var image1 = document.querySelectorAll("img")[0];

image1.src=randomimgsrc; 

var number2 = Math.floor(Math.random()*3)+1;

  var randomhand= "index" + number2 +".png";
  
  var randomimgsrc2 = "images/"+ randomhand;
  
  var image2 = document.querySelectorAll("img")[1];
  
  image2.setAttribute("src",randomimgsrc2);

if(number1>number2){
  document.querySelector("h2").innerHTML = "player win";
}
else if (number1<number2){
  document.querySelector("h2").innerHTML = "computer win";
}
else{
  document.querySelector("h2").innerHTML = "draw";
}
}
}
/*for paper*/
function change2(){
  var number1;
  if( document.getElementById("paper")===paper){
    var number1=1;
  
 var randomhand= "index" + number1 +".png";

var randomimgsrc = "images/"+ randomhand;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc); 

var number2 = Math.floor(Math.random()*3)+1;

  var randomhand= "index" + number2 +".png";
  
  var randomimgsrc2 = "images/"+ randomhand;
  
  var image2 = document.querySelectorAll("img")[1];
  
  image2.setAttribute("src",randomimgsrc2);

if(number1>number2){
  document.querySelector("h2").innerHTML = "player win";
}
else if (number1<number2){
  document.querySelector("h2").innerHTML = "computer win";
}
else{
  document.querySelector("h2").innerHTML = "draw";
}
}

}
/*for secisor*/
function change3(){
  var number1;
  if( document.getElementById("scissors")===scissors){
    var number1=3;
  
 var randomhand= "index" + number1 +".png";

var randomimgsrc = "images/"+ randomhand;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc); 

var number2 = Math.floor(Math.random()*3)+1;

  var randomhand= "index" + number2 +".png";
  
  var randomimgsrc2 = "images/"+ randomhand;
  
  var image2 = document.querySelectorAll("img")[1];
  
  image2.setAttribute("src",randomimgsrc2);

if(number1>number2){
  document.querySelector("h2").innerHTML = "player win";
  
document.getElementById("number2").innerHTML = nam.value;
}
else if (number1<number2){
  document.querySelector("h2").innerHTML = "computer win";
}
else{
  document.querySelector("h2").innerHTML = "draw";
}


}
}


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth -5 ;
canvas.height = window.innerHeight -6;

var c = canvas.getContext('2d');
var a = canvas.getContext('2d');


var speed = 5;
var i = 0;
var j = 0;
var xPos = 200;
var yPos = 200;
var fact = 0;
var radius = 30;
var r=0;
var l=0;
var d=0;
var u=0;
var lastkey;
var xTile = 0 ;
var yTile = 0 ;
var lung  = 92;
var lat   = 47.1;
var backg = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
             0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
             1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,
             1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,
             1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,
             1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,
             1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,
             1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,
             1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,
             1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,
             1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,
             1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,
             1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,
             1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,
             1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,
             1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,
             1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,
             1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,
             1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,
             1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var cicl = 0;
{
/*
window.onload = function(){
var img = new Image();
img.src = 'brick.png';
img.onload = function(){
c.drawImage(img , 100, 100 , lung , lat);
}
}
function tileBlack(xTile,yTile){
  var img = new Image();
  img.src = 'brick.png';
  img.onload = function(){
  a.drawImage(img , xTile, yTile, lung , lat);
}
}
function tileWhite(xTile,yTile){
  var img1 = new Image();
  img1.src = 'pavement.png';
  img1.onload = function(){
  a.drawImage(img1 , xTile, yTile, lung , lat);
}
}
function construction(){

for(i = 0; i < 441; i++){
        cicl++;
        if( backg[ i ] == 1 ){
          tileBlack(xTile,yTile);
        }
        if( backg[ i ] == 0){
          tileWhite(xTile,yTile);
        }

        xTile+=lung;

if( cicl == 21 ){
  yTile+=lat;
  xTile=0;
  cicl=0;
 }
}
xTile=0;
yTile=0;
}
*/
}//build



function spiderDown(){
  var spiderDown = new Image();
  spiderDown.src = 'resting.png';
  c.drawImage(spiderDown , xPos, yPos, lung , lat);
}




function animate(){

function move(e){
  if( e.keyCode == 39){
     r = true;
  }
  if( e.keyCode == 37){
   l = true;
  }
  if( e.keyCode == 38){
   d = true;
  }
  if( e.keyCode == 40){
   u = true ;
 }
}
function stop(e){

  if( e.keyCode == 39){
   r = false ;
  }
  if( e.keyCode == 37){
   l = false ;
  }
  if( e.keyCode == 38){
   d = false ;
  }
  if( e.keyCode == 40){
   u = false ;
 }
}

document.onkeyup = stop;
document.onkeydown = move;

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight );
    c.beginPath();
    spiderDown();
  


if(l){xPos-=speed}
if(r){xPos+=speed}
if(u){yPos+=speed}
if(d){yPos-=speed}
}
animate();

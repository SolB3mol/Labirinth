
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth -5 ;
canvas.height = window.innerHeight -6;

var c = canvas.getContext('2d');
var a = canvas.getContext('2d');

var motion = 0;
var speed = 5;
var i = 0;
var j = 0;
var xPos = 0;
var yPos = 50;
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
var lat   = 47;
var pelat = 34;
var pelung = 34;
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
var torchNum=1;
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
var xT = [];
var yT = [];
var lcol=0;
var colx=0;
var coly=0;
var lastx;
var lasty;
var xPosition;
var yPosition;
var q = '#000000';
var case1, case2, case3, case4, lastDirection = 0;

function torch1(){
  var torch1 = new Image();
  torch1.src = 'frame1.png';
  c.drawImage(torch1 , 195, 730, 63 , 64);
}
function torch2(){
  var torch2 = new Image();
  torch2.src = 'frame2.png';
  c.drawImage(torch2 , 195, 730, 63 , 64);
}
function torch3(){
  var torch3 = new Image();
  torch3.src = 'frame3.png';
  c.drawImage(torch3 , 195, 730, 63 , 64);
}
function torch4(){
  var torch4 = new Image();
  torch4.src = 'frame4.png';
  c.drawImage(torch4 , 195, 730, 63 , 64);
}
function torch(){

    torchNum++;
    if(torchNum  <=15 ){
      torch1();
    }
    if(torchNum  >15 && torchNum <=30 ){
      torch2();
    }
    if(torchNum  > 30 && torchNum <= 45 ){
      torch3();
    }
    if(torchNum > 45 && torchNum <=60 ){
      torch4();
    }

    if(torchNum == 60){
      torchNum = 0;
    }

}

function wallPosition(){
  for( i = 0; i < 21 ; i++){
      xT[i] = i * lung ;
      yT[i] = i * lat  ;
  }
}
 wallPosition();
function collision(){
   col = 0;
   lcol = 0;
   for( i =  0 ; i <  21 ; i++ ){
     for( j = 0 ; j <  21; j++){

         if( backg[ j*21 + i   ] == 1  ) {
           if((xPos + pelung > xT[i] && xPos<xT[i]+lung ) &&
               (yPos + pelat  > yT[j] && yPos<yT[j]+lat  )  ){
                col = 1;


               }

            }

         }
     }
   }
function directionValidation(){
  case1=0;
  case2=0;
  case3=0;
  case4=0;
  if(col == 1 ){
    xPosition = xPos;
    yPosition = yPos;

    xPos = lastx + 5;
    yPos = lasty;
    collision();
    if( col == 1 ){
      case1 = 1;
    }
      xPos = lastx - 5;
      yPos = lasty;
      collision();
      if( col == 1 ){
      case2 = 1;
    }
      xPos = lastx;
      yPos = lasty+5;
      collision();
      if( col == 1){
      case3 = 1 ;
      }
        xPos = lastx;
        yPos = lasty-5;
        collision();
        if( col == 1 ){
        case4 = 1;
        }
      }

if( (case1 == 1 && case3 == 1) || (case1 == 1 && case4 == 1)||
    (case2 == 1 && case3 == 1) || (case2 == 1 && case4 == 1) ){
  xPos = lastx;
  yPos = lasty;
}else{

 if (case1 == 1 && case2 == 0 && case3 == 0 && case4 == 0){
   xPos = lastx;
   yPos = yPosition;
}
 if (case1 == 0 && case2 == 1 && case3 == 0 && case4 == 0){
   xPos = lastx;
   yPos = yPosition;
 }
 ;
 if (case1 == 0 && case2 == 0 && case3 == 1 && case4 == 0){
   xPos = xPosition;
   yPos = lasty;
 }
 if (case1 == 0 && case2 == 0 && case3 == 0 && case4 == 1){
   xPos = xPosition;
   yPos = lasty;
 }
}

}
function spiderResting(){
  var spiderDown = new Image();
  spiderDown.src = 'resting.png';
  c.drawImage(spiderDown , xPos, yPos, pelung , pelat);
}
function spiderDown(){
  var spiderDown = new Image();
  spiderDown.src = 'resting.png';
  c.drawImage(spiderDown , xPos, yPos, pelung , pelat);
}
function spiderUp(){
  var spiderUp = new Image();
  spiderUp.src = 'spiderUp.png';
  c.drawImage(spiderUp , xPos, yPos, pelung , pelat);
}
function spiderRight(){
  var spiderRight = new Image();
  spiderRight.src = 'spiderRight.png';
  c.drawImage(spiderRight , xPos, yPos, pelung , pelat);
}
function spiderLeft(){
  var spiderLeft = new Image();
  spiderLeft.src = 'spiderLeft.png';
  c.drawImage(spiderLeft , xPos, yPos, pelung , pelat);
}
function spiderUpRight(){
  var spiderUpRight = new Image();
  spiderUpRight.src = 'spiderUpRight.png';
  c.drawImage(spiderUpRight , xPos, yPos, pelung , pelat);
}
function spiderUpLeft(){
  var spiderUpLeft = new Image();
  spiderUpLeft.src = 'spiderUpLeft.png';
  c.drawImage(spiderUpLeft , xPos, yPos, pelung , pelat);
}
function spiderDownRight(){
  var  spiderDownRight = new Image();
  spiderDownRight.src = 'spiderDownRight.png';
  c.drawImage( spiderDownRight, xPos, yPos, pelung , pelat);}
function spiderDownLeft(){
  var spiderDownLeft = new Image();
  spiderDownLeft.src = 'spiderDownLeft.png';
  c.drawImage(spiderDownLeft , xPos, yPos, pelung , pelat);
}

function directionAnimation(){

  if( r == true && l == false &&
      u == false && d == false ){
      spiderRight();
      lastDirection = 1;
    }else
  if( r == false && l == true &&
      u == false && d == false ){
      spiderLeft();
      lastDirection = 2;
    }else
  if( r == false && l == false &&
      u == true && d == false ){
      spiderDown();
      lastDirection = 3;
    }else
  if( r == false && l == false &&
      u == false && d == true ){
      spiderUp();
      lastDirection = 4;
    }else
  if( r == true && l == false &&
      u == true && d == false ){
      spiderDownRight();
      lastDirection = 5;
    }else
  if( r == false && l == true &&
      u == true && d == false ){
      spiderDownLeft();
      lastDirection = 6;
    }else
  if( r == true && l == false &&
      u == false && d == true ){
      spiderUpRight();
      lastDirection = 7;
    }else
  if( r == false && l == true &&
      u == false && d == true ){
      spiderUpLeft();
      lastDirection = 8;
    }else

      if( lastDirection == 1 ){
        spiderRight();
      }
      if( lastDirection == 2 ){
        spiderLeft();
      }
      if( lastDirection == 3 ){
        spiderDown();
      }
      if( lastDirection == 4 ){
        spiderUp();
      }
      if( lastDirection == 5 ){
        spiderDownRight();
      }
      if( lastDirection == 6 ){
        spiderDownLeft();
      }
      if( lastDirection == 7 ){
        spiderUpRight();
      }
      if( lastDirection == 8 ){
        spiderUpLeft();
      }
      if( lastDirection == 0){
        spiderRight();
      }

}
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


function animate(){

  lastx = xPos;
  lasty = yPos;

document.onkeyup = stop;
document.onkeydown = move;

    requestAnimationFrame(animate);
    c.clearRect(0, 0,innerWidth, innerHeight);
    c.beginPath();
    torch();
    directionAnimation();
    c.strokeStyle = '#FFFFFF';
    c.stroke;
    c.arc(300, 300, 50, 0, Math.PI*2, false );
    c.stroke;
if(l){xPos-=speed}
if(r){xPos+=speed}
if(u){yPos+=speed}
if(d){yPos-=speed}

collision();
directionValidation();


}
animate();

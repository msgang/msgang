// FLIPCLOCK by Mellow Man
//
// v1.1
//
// April 11th 2017
//
// NOTE: THIS VERSION WILL REQUIRE "CODEF_CORE.JS" BY NONAMENO

var clockcanvas;
clockcanvas=new canvas(640,132);

var clock_face=[];
clock_face[0]=new image('http://msgang.github.io/clock/flip_clock.png');
clock_face[1]=new image('http://msgang.github.io/clock/flip_clock_bl.png');

clock_face[0].initTile(76.8,131);
clock_face[1].initTile(76.8,131);

var DIGIT_WIDTH=76.8;
var DIGIT_HEIGHT=131;

function flip_clock(context,WhichFace,Xpos,Ypos,scale){
	if (scale==null) scale=1; // if no scale is selected, it will default at 1:1.

	if ((WhichFace!="black") && (WhichFace!="white")) WhichFace="white"; // if an incorrect face is selected, WHITE will default.

	if (WhichFace=="black"){
		Face=1;
	}

	if (WhichFace=="white"){
		Face=0;
	}

	clockcanvas.clear();

	var currentTime = new Date();
	var H=currentTime.getHours();
	var M=currentTime.getMinutes();
	var S=currentTime.getSeconds();

	var tempString1 = H + "";
	var HH = tempString1.split("");

	if (HH.length<=1){
		HH[1]=HH[0];
		HH[0]=0;
	}

	var tempString2 = M + "";
	var MM = tempString2.split("");

	if (MM.length<=1){
		MM[1]=MM[0];
		MM[0]=0;
	}

	var tempString3 = S + "";
	var SS = tempString3.split("");

	if (SS.length<=1){
		SS[1]=SS[0];
		SS[0]=0;
	}

	clock_face[Face].drawTile(clockcanvas,HH[0],0,0);
	clock_face[Face].drawTile(clockcanvas,HH[1],DIGIT_WIDTH*1,0);

	clock_face[Face].drawTile(clockcanvas,10,DIGIT_WIDTH*2+3,0);	

	clock_face[Face].drawTile(clockcanvas,MM[0],(DIGIT_WIDTH*3)-20,0);
	clock_face[Face].drawTile(clockcanvas,MM[1],(DIGIT_WIDTH*4)-20,0);

	clock_face[Face].drawTile(clockcanvas,SS[0],(DIGIT_WIDTH*5)+10,0);
	clock_face[Face].drawTile(clockcanvas,SS[1],(DIGIT_WIDTH*6)+10,0);

	clockcanvas.draw(context,Xpos,Ypos,1,0,scale,scale);		
}

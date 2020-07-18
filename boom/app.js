var $ = function (id){	return document.getElementById(id)}

var canvas, ctx, score;

var W = window.innerWidth;
var H = window.innerHeight;

var paused = false;

function init(){
	canvas = $("canvas");
	score = $("scoreDiv");
	ctx = canvas.getContext("2d");




	canvas.width = W;
	canvas.height = (H /100) * 70;
}



function newGame(){
	hideMenu();
	setInterval(draw, 1000/150);
}

                     /////Game/////
var narkata = new Image();
narkata.src ="img/narkata.jpg"
                //ricardo//
var ric = new Image(); 
ric.src ="img/ricardo.png";

var ricWidth = 80;
var ricHeight = 80;

var ricric = [];

ricric[0] = {
	x :  Math.floor(Math.random() * W - ricWidth),
	y : -(ricHeight * 2)
}

				//sanik//
var sanik = new Image();
sanik.src = "img/sanik.png";

var sanikWidth = 80;
var sanikHeight = 100;

var sanikXPos = sanikWidth;
var sanikYPos = (H/100)*70 - (sanikHeight * 2);

function left(){
	if(sanikXPos > 0){
	sanikXPos -= sanikWidth;
	}
}

function right(){
	if (sanikXPos < W - sanikWidth) {
		sanikXPos += sanikWidth;
	}
	
}


function gameOver(){
	alert("GAME OVER");
	location.reload();
}


function draw(){
	score++;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	score.innerHTML = score;
	ctx.drawImage(narkata, 0, 0);
	ctx.drawImage(sanik, sanikXPos, sanikYPos, sanikWidth, sanikHeight);


	for (var i = 0; i < ricric.length; i++) {
		ctx.drawImage(ric, ricric[i].x, ricric[i].y, ricWidth, ricHeight);

		ricric[i].y++;

		if(ricric[i].y == 100){
			ricric.push({
				x : Math.floor(Math.random() * W - ricWidth),
				y : -ricHeight
			})
		}

		if(sanikXPos + sanikWidth - 15 >= ricric[i].x
		&& sanikXPos <= ricric[i].x + ricWidth - 15
		&& sanikYPos + sanikHeight - 15>= ricric[i].y
		&& sanikYPos <= ricric[i].y + ricHeight - 15){
			gameOver();
		}
	}
	
	score.innerHTML = score;

}






function hideMenu(){
	$('menu').hidden = true;
}

function showMenu(){
	location.reload();
}
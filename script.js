var blockSize = 35;
var total_row =  22;//total row number
var total_col = 22; //total column number
var board;
var context;

var snakeX = blockSize * 2;
var snakeY = blockSize * 2;

// Set the total number of rows and columns
var speedX = 0; //speed of snake in x coordinate.
var speedY = 0; //speed of snake in Y coordinate.

var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;

window.onload = function () {
	// Set board height and width
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", changeDirection); //for movements
	// Set snake speed
	setInterval(update, 1000 / 10);
}



// Movement of the Snake - We are using addEventListener
function changeDirection(e) {
	if (e.code == "ArrowUp" && speedY != 1) {
		// If up arrow key pressed with this condition...
		// snake will not move in the opposite direction
		speedX = 0;
		speedY = -1;
	}
	else if (e.code == "ArrowDown" && speedY != -1) {
		//If down arrow key pressed
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && speedX != 1) {
		//If left arrow key pressed
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && speedX != -1) {
		//If Right arrow key pressed
		speedX = 1;
		speedY = 0;
	}
}


function placeFood() {

	
	foodX = Math.floor(Math.random() * total_col) * blockSize;
	
	
	foodY = Math.floor(Math.random() * total_row) * blockSize;
}

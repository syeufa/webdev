//board

let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//girl

let girlWidth = 72;
let girlHeight = 94;
let girlX = 50;
let girlY = boardHeight-girlHeight+20;
let girlImg;

let girl={
    x : girlX,
    y : girlY,
    width : girlWidth,
    height : girlHeight
}

//obstacles
let obstacleArray = [];

let obstacleWidth = 42;
let obstacleHeight = 70;

let obstacleX= 700;
let obstacleY= boardHeight-obstacleHeight;

let obstacleImg;


//physics
let velocityX = -8; //obstacle moving speed
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width= boardWidth;

    context = board.getContext("2d"); // used for drawing on da board <3

    // let backgroundImage = new Image();
    // backgroundImage.src = "./assets/background.jpg"; // Gantilah dengan path yang sesuai
    // backgroundImage.onload = function () {
    //     context.drawImage(backgroundImage, 0, 0, board.width, board.height);
    
    // }
    //draw initial girl
    //context.fillStyle="green";
    //context.fillRect(girl.x, girl.y, girl.width, girl.height);

    girlImg = new Image();
    girlImg.src = "./assets/girl-run.png";
    girlImg.onload = function(){
        context.drawImage(girlImg, girl.x, girl.y, girl.height, girl.width);
    }

    obstacleImg = new Image();
    obstacleImg.src = "./assets/obstacle(1).png";
    
    requestAnimationFrame(update);
    setInterval(placeObstacles, 1000);
    document.addEventListener("keydown", moveGirl);
} 

function update(){
    requestAnimationFrame(update);
    if (gameOver){
        return;
    }
    context.clearRect(0,0, board.width, board.height);

    //girl
    velocityY += gravity;
    girl.y = Math.min(girl.y + velocityY, girlY); // apply gravity to girl
    context.drawImage(girlImg, girl.x, girl.y, girl.height, girl.width);
    
    //obstacle
    for (let i = 0; i < obstacleArray.length; i++){
        let obstacle = obstacleArray[i];
        obstacle.x += velocityX;
        context.drawImage(obstacleImg, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        if(detectCollision(girl, obstacle)){
            context.clearRect(girl.x, girl.y, girl.width, girl.height);
            context.clearRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            gameOver = true;
            if (gameOver) {
                context.font = "45px courier";
                context.fillStyle = "black"; 
                context.fillText("Game Over", boardWidth / 2 - 125 , boardHeight / 2);
            }
            girlImg.src = "./assets/girl-fall.png";
            girlImg.onload = function(){
                context.drawImage(girlImg, girl.x, girl.y, girl.width, girl.height);
                updateScore(); 
            };
        } else if (obstacle.x + obstacle.width < girl.x) {
            // Jika girl berhasil melewati rintangan, tambahkan skor
            score++;
            updateScore();
        }
    
    }
}

function moveGirl(e){
    if (gameOver){
        return;
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && girl.y == girlY){
       //jump
       velocityY= -10;

    }
}


function placeObstacles(){
    //place obstacles
    let obstacle = {
        img : obstacleImg,
        x : obstacleX,
        y : obstacleY,
        width: obstacleWidth,
        height: obstacleHeight
    }

    let placeObstacleChance = Math.random(); 
    
    if (placeObstacleChance > .10){
    obstacle.img = obstacleImg;
    obstacleWidth = obstacleWidth;
    obstacleArray.push(obstacle);
    }

    if(obstacleArray.length>5){
        obstacleArray.shift();
    }

}

function detectCollision(a,b){
    return a.x < b.x + b.width && 
            a.x +a.width>b.x &&
            a.y < b.y + b.height &&
            a.y + a.height>b.y;
}

function updateScore() {
    context.font = "24px 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif";
    context.fillStyle = "black";
    context.fillText("Score: " + score, boardWidth - 120, 30);
}
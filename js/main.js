const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const aaaaaaaa = 0;
//ctx.beginPath();
//ctx.rect(20, 40, 50, 50);
//ctx.fillStyle = "#FF0000";
//ctx.fill();
//ctx.closePath();
 
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let dx = 1.9123564;
let dy = 2;
let barPos = 0;
let barMouse = 1;


function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ballX += dx;
    ballY += dy;
    if(ballX > canvas.width || ballX < 0) {
        dx = -dx;
    }
    if(ballY < 0) {//ballY > canvas.height || 
        dy = -dy;
    }
    if(ballY >= canvas.height) {
        console.log("balltouch");
        dy = 0;
        dx = 0;
        alert("게임 오버!")
        window.location.reload();
        ballY = 0;
    }
}

function drawBar() {
    ctx.beginPath();
    ctx.rect(barMouse, canvas.height-10, 70, 10);//(canvas.width-70+barPos)/2
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    if(ballX >= barMouse && ballX <= barMouse+70) {//(canvas.width-70+barPos)/2, canvas.width+barPos/2
        if(ballY >= canvas.height-10) {
            dx = dx;
            dy = -dy;
        }
    }
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBar();
}

var rand = function rand() {
    return Math.floor(Math.random() * (1 - (-1) + 1)) + (-1); 
}      

setInterval(draw, 1)

//function keyDownHandler(e) {
    //if(e.keyCode==37) {
        //왼쪽 방향키 누를시 변화
        //barPos += -20; 

    //} else if(e.keyCode==39) {
        //오른쪽 방향키 누를시 변화
        //barPos += 20; 
    //}
//}

//function keyUpHandler(e) {
    //if(e.keyCode==37) {
        //왼쪽 방향키 뗄 떄 변화
        //barPos += 0; 

    //} else if(e.keyCode==39) {
        //오른쪽 방향키 뗄 때 변화
       // barPos += 0; 
    //}
//}

function mousePosHandler(e) {
    //console.log(e);
    //drawBar();
    if(e.clientX-480 >= 0 && e.clientX-480 <= 410) {
        barMouse = e.clientX-490;
    }
    console.log(dx)
    //console.log(barMouse);
}


//document.addEventListener('keydown', keyDownHandler)
//document.addEventListener('keyup', keyUpHandler)
document.addEventListener('mousemove', mousePosHandler)
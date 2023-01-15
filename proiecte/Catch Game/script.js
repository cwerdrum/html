let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
canvas.width = canvas.parentElement.offsetWidth
canvas.height = canvas.parentElement.offsetHeight
let size = 200
let x = canvas.width/2 - size / 2
let y = canvas.height - 100
let moveLeft = false
let moveRight = false
let ballX = []
let ballY = []
let timeUntilSpawn = 100
let score = 0
let hiscore = 0
let diff = 0
let pause = false

function drawPlayer(){
    ctx.beginPath()
    ctx.rect(x,y,size,20)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawPlayer()
    ctx.font = '24px Consolas'
    ctx.fillText('Score: '+ score, 50,50)
    ctx.fillText('HighScore: '+ hiscore, 50,100)
    timeUntilSpawn -= 10
    if(timeUntilSpawn <= 0){
        spawnBall()
        timeUntilSpawn = 1000 - diff
    }
    drawBall()
}

function drawBall(){
    for(let i = 0; i < ballX.length; i++){
        if(ballY[i] + 10 >= y){
            if(ballX[i] + 10>x && ballX[i]-1 < x+ size){
                if(hiscore == score){
                    hiscore++
                }
                score++
                if(diff<500){
                    diff+=10
                }
            }
            else{
                score = 0;
                diff = 0
                pauseGame()
                ctx.beginPath()
                ctx.font = '128px Consolas'
                ctx.fillText('GAME OVER',canvas.width/2 - 300, canvas.height/2)
                ctx.closePath()
                ballX = []
                ballY = []
                return
            }
            ballX.splice(i,1)
            ballY.splice(i,1)
            i--
        }
        else{
            ctx.beginPath()
            ctx.arc(ballX[i], ballY[i],20,0,Math.PI*2)
            ctx.fillStyle = 'red'
            ctx.fill()
            ctx.closePath()
            ballY[i] += 5
        }
    }
}

let i1 = setInterval(draw, 10)
let i2 = setInterval(right,10)
let i3 = setInterval(left,10)

function pauseGame(){
    clearInterval(i1)
    clearInterval(i2)
    clearInterval(i3)
    pause = true
}

function startGame(){
    i1 = setInterval(draw, 10)
    i2 = setInterval(right,10)
    i3 = setInterval(left,10)
    pause = false
}

function right(){
    if(moveRight && x+size<canvas.width){
        x += 10
    }
}

function left(){
    if(moveLeft && x > 0){
        x -= 10
    }
}
canvas.parentElement.addEventListener('keydown',function(e){
    if(e.key == 'ArrowLeft'){
        moveLeft = true
    }
    if(e.key == 'ArrowRight'){
        moveRight = true
    }
    if(e.key == ' '){
        if(pause){
            startGame()
        }
        else{
            pauseGame()
        }
    }
})

canvas.parentElement.addEventListener('keyup',function(e){
    if(e.key == 'ArrowLeft'){
        moveLeft = false
    }
    if(e.key == 'ArrowRight'){
        moveRight = false
    }
})

function spawnBall(){
    let x = Math.floor(Math.random() * (canvas.width - 800) + 400)
    ballX.push(x)
    ballY.push(50)
}

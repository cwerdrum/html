const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = canvas.parentElement.offsetWidth
canvas.height = canvas.parentElement.offsetHeight

let snowX = []
let snowY = []
let snowR = []
let snowColor = []

for(let i = 0; i<500; i++){
    snowX.push(Math.floor(Math.random()*canvas.width))
    snowY.push(Math.floor(Math.random()*canvas.height))
    snowR.push(Math.floor(Math.random()*3+3))
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    snowColor.push('rgba('+r+','+g+','+b+','+(Math.random()+0.1)+')')
}

function drawRect(x,y,w,h){
    ctx.beginPath()
    ctx.rect(x,y,w,h)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()
}

function drawCircle(x,y,r,color){
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.shadowColor = 'white'
    ctx.shadowBlur = 10
    ctx.fill()
    ctx.closePath()
}

function drawSnowman(){
    drawCircle(canvas.width/2,canvas.height-100,100,'white')
    drawCircle(canvas.width/2,canvas.height-250,60,'white')
    drawCircle(canvas.width/2, canvas.height-340, 40,'white')
    drawCircle(canvas.width/2 - 10,canvas.height-350,3,'black')
    drawCircle(canvas.width/2 + 10,canvas.height-350,3,'black')
    drawRect(canvas.width/2-40,canvas.height-380,80,5)
    drawRect(canvas.width/2-20,canvas.height-400,40,20)
    ctx.beginPath()
    ctx.arc(canvas.width/2, canvas.height-330,10,0,Math.PI)
    ctx.lineWidth = 2;
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(canvas.width/2,canvas.height - 335)
    ctx.lineTo(canvas.width/2+30,canvas.height - 340)
    ctx.lineTo(canvas.width/2,canvas.height - 345)
    ctx.fillStyle = 'chocolate'
    ctx.fill()
    ctx.closePath()
}

function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawSnowman()
    for(let i = 0; i<snowX.length;i++)
    {
        drawCircle(snowX[i],snowY[i],snowR[i],snowColor[i])
        snowY[i]++
        if(snowY[i]>=canvas.height)
        {
            snowY[i] = 0
        }
    }
    window.requestAnimationFrame(draw)
}
window.requestAnimationFrame(draw)


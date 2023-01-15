const game = document.getElementById("game");
const canvas = document.getElementById("canvas");
const scoreDisplay = document.getElementById("score");
const problemDisplay = document.getElementById("problem");
const playerInput = document.getElementById("result");
const p = document.getElementById('green');
let gameScore = 0;
let a, b;
let gameLevel = 10;

function getRandomNumber(diff){
    return Math.floor(Math.random() * diff) + 1;
}

function newProblem(diff){
    a = getRandomNumber(diff);
    b = getRandomNumber(diff);

    problemDisplay.style.color = 'black';
    return a + " + " + b;
}

function newGame(diff){
    gameLevel = diff;
    scoreDisplay.textContent = gameScore;
    problemDisplay.textContent = newProblem(diff)
}
newGame(gameLevel)

function verifyResult(){
    if(playerInput.value == a + b){
        gameScore = gameScore + gameLevel;
        scoreDisplay.textContent = gameScore;
        problemDisplay.textContent = newProblem(gameLevel)
        playerInput.value = '';
        p.classList.add('anim')
        setTimeout(removeAnim, 200)
    }
    else{
        problemDisplay.style.color = 'red';
    }
}

playerInput.addEventListener('input',verifyResult)

playerInput.addEventListener('keydown',function(e){
    if(e.key == "ArrowUp" || e.key == "ArrowDown"){
        e.preventDefault()
    }
})

function removeAnim(){
    p.classList.remove('anim')
}
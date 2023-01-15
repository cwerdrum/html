const game = document.getElementById('container')
const selectedCards = document.getElementsByClassName('active')
const foundCards = document.getElementsByClassName('found')

const emoji = ['🍉','🍉','🍏','🍏','🥥','🥥','🍇','🍇','🍓','🍓']

function shuffle(){
    let listLength = emoji.length
    let randomIndex
    let temp

    for(let i = 0; i<listLength; i++){
        randomIndex = Math.floor(Math.random()*listLength)
        temp = emoji[i]
        emoji[i] = emoji[randomIndex]
        emoji[randomIndex] = temp
    }
}

function createCards(){
    game.innerHTML = ''
    for(let i = 0; i< emoji.length; i++){
        const card = document.createElement('div')
        const text = document.createElement('p')

        text.textContent = emoji[i]

        card.append(text)

        card.classList.add('card')

        card.setAttribute('onclick', 'match(this)')

        game.append(card)
    }
}

function newGame(){
    shuffle()
    shuffle()
    createCards()
}
newGame()

function match(card){
    if(card.classList.contains('found')||selectedCards.length >= 2){
        return;
    }

    card.classList.add('active')

    if(selectedCards.length == 2){
        setTimeout(function(){
            if(selectedCards[0].textContent == selectedCards[1].textContent){
                selectedCards[0].classList.add('found')
                selectedCards[1].classList.add('found')
            }
            selectedCards[1].classList.remove('active')
            selectedCards[0].classList.remove('active')

            if(foundCards.length == emoji.length){
                newGame()
            }
        }, 500)
    }
}
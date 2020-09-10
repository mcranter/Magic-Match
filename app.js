document.addEventListener('DOMContentLoaded', () => {
//Card options 
const cardArray = [
    {
        name:'wand',
        img: 'images/wand.png'
    },
    {
        name:'wand',
        img: 'images/wand.png'
    },
    {
        name:'dark',
        img: 'images/dark-mark.png'
    },
    {
        name:'dark',
        img: 'images/dark-mark.png'
    },
    {
        name:'dobby',
        img: 'images/dobby-red.png'
    },
    {
        name:'dobby',
        img: 'images/dobby-red.png'
    },
    {
        name:'hallow',
        img: 'images/hallow.png'
    },
    {
        name:'hallow',
        img: 'images/hallow.png'
    },
    {
        name:'hedwig',
        img: 'images/hedwig-white.png'
    },
    {
        name:'hedwig',
        img: 'images/hedwig-white.png'
    },
    {
        name:'harry',
        img: 'images/hp.png'
    },
    {
        name:'harry',
        img: 'images/hp.png'
    }
]

const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []

//creates board //

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/hogwarts.png')
        card.setAttribute('data-id', i)
    //    card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches

//flips cards 
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)

}

})
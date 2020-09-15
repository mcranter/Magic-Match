const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');

    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        
        return;
    }
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}


//ternary operator used check if cards match
function checkForMatch () {
    let isMatch = firstCard.dataset.image ===
        secondCard.dataset.image;

    isMatch ? disableCards() : unflipCards();
}

//disables flipping in the event of a match
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 
}
//unflips cards if there's no match 
function unflipCards(){
    setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        },  1500);
}

cards.forEach(card => card.addEventListener('click', flipCard))
;


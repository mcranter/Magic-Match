const cards = document.querySelectorAll('.memory-card');

function flipCard(){
    this.classList.toggle('flip');
}

if (!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;
}   else    {
    hasFlippedCard = false;
    secondCard = this;

    //check if cards match
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))
;


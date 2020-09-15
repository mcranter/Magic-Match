const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');

    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
    }   else    {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //check if cards match
        if (firstCard.dataset.image ===
            secondCard.dataset.image){
            //if it matches
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);    
            //if there's no match
            } else {
                setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            },  1500); //timer needed to show card flip 
        }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))
;


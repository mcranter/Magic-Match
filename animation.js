class AudioController {
    constructor(){
        this.bgMusic = new Audio('assets/sounds/hpBG.mp3');
        this.flipSound = new Audio('assets/sounds/hpFLIP.mp3');
        this.matchSound = new Audio('assets/sounds/hpMATCH.mp3');
        this.victorySound = new Audio('assets/sounds/hpVICTORY.mp3');
        this.gameOverSound = new Audio('assets/sounds/hpGAMEOVER.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic(){
        this.bgMusic.play();
    }
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
   flip() {
        this.flipSound.play();
    }
    match(){
        this.matchSound.play();
    }
    victory(){
        this.stopMusic();
        this.victory.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class mixer {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card){
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            //card.classList.add('visible');
        }

    }
    canFlipCard(card) {
        return true;
      //  return(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)// all three boolean conditions must return false to be true
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new mixer(100, cards);
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
            
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () =>{
           game.flipCard(card);
        });
    });
}

if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}   else {
        ready();
}

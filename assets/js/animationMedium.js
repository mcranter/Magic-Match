//The following code was created using a tutorial by Web Dev Simplified (cited in Readme) unless otherwise stated
//this class creates the sounds used in the game
class AudioController {
    /*global Audio, document*/
	/*eslint no-undef: "error"*/
    constructor() {
        this.bgMusic = new Audio('assets/sounds/hpBG.mp3');//'this' indicates the variable belongs to bgMusic object
        this.flipSound = new Audio('assets/sounds/hpFLIP.mp3');
        this.matchSound = new Audio('assets/sounds/hpMATCH.mp3');
        this.victorySound = new Audio('assets/sounds/hpVICTORY.mp3');
        this.gameOverSound = new Audio('assets/sounds/hpGAMEOVER.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    //stops music using javascript pause function    
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class mixer {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
//function to start game, begin countdown and keep score
    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
/*global setTimeout, setInterval, clearInterval */
/*eslint no-unused-vars: "error"*/
        setTimeout(() => {
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining; //resets counter & timer 
        this.ticker.innerText = this.totalClicks;
        ('.card').removeClass('flip');//written by me
	// shuffle board
	this.cardsArray.forEach((card) => {
		let randomPos = Math.floor(Math.random() * 16);
		card.style.order = randomPos;
	});
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched'); 
        });
    }
//starts countdown timer and updates value 
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    //displays game over modal under correct conditions
    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }
    //displays victory modal under correct conditions
    victory() {
        clearInterval(this.countdown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }
    //counts and displays for the player the number of cards flipped
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            } 
        }
    }
    //function checks if the clicked card is the same as the checked card
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMismatch(card, this.cardToCheck); 

        this.cardToCheck = null;
    } 

    getCardType(card) {
        return card.getElementsByClassName('front-face')[0].src;
    }
    //determines and stores whether all cards are matched
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)//if all cards in array are sufficiently matched, show the victory modal
            this.victory();
    }
    cardMismatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    //boolean which determines if all values return false, will evaluate to true
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
//creates the game settings before player starts
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new mixer(80, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

//Written by me
//pauses or plays background music
var Music = document.getElementById("bgmuzak");

function playPause() {
    if (Music.paused)
        Music.play();
    else
        Music.pause();           
    }
    playPause();
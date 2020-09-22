class AudioController {
    constructor(){
        this.bgMusic = new Audio('assets/sounds/hpBG.mp3');
        this.flipSound = new Audio('assets/sounds/hpFLIP.mp3');
        this.matchSound = new Audio('assets/sounds/hpMATCH.mp3');
        this.victorySound = new Audio('assets/sounds/hpVICTORY.mp3');
        this.gameOverSound = new Audio('assets/sounds/hpGAMEOVER.mp3');
        this.bgMusic.volume = 0.25;
        this.bgMusic.loop = true;
    }
    startMusic(){
        this.bgMusic.play();
    }
}

if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}   else {
        ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();   


        });
    });
}

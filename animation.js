if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}   else {
        ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards =. Array.from(document.getElementByClassName('card'));
}
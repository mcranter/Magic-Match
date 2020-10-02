//landing page modals

function mute(){
    if(document.getElementById('bgMusic').muted == false){
        document.getElementById('bgMusic').muted = true;
    } else {
        document.getElementById('bgMusic').muted = false;
    }
}
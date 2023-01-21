const theDrum = document.querySelectorAll(".drum");

// Audio Files
const clap = new Audio("./sounds/clap.wav"), hihat = new Audio("./sounds/hihat.wav"), kick = new Audio("./sounds/kick.wav"), openhat = new Audio("./sounds/openhat.wav"), boom = new Audio("./sounds/boom.wav"), ride = new Audio("./sounds/ride.wav"), snare = new Audio("./sounds/snare.wav"), tom = new Audio("./sounds/tom.wav"), tink = new Audio("./sounds/tink.wav");

// Keys Loop

theDrum.forEach((drumItem) => {
    let keyValue = drumItem.innerHTML;
    drumItem.addEventListener("click", ()=>{
        music(keyValue);
        animate(keyValue);
    });
})

// KeyDown Event Tracker

document.addEventListener('keydown', (event) => {
    let theKey = event.key;
    theKeyDown(theKey);
    animate(theKey);
})

function theKeyDown(key) {
    /*
    This function handles keydown event
    */
    music(key);
}


function music(key) {
    /*
    This function handles music according to keys event
     */
    switch (key) {
        case "a":
            clap.play();
            break;

        case "s":
            hihat.play();
            break;

        case "d":
            kick.play();
            break;

        case "f":
            openhat.play();
            break;

        case "g":
            boom.play();
            break;

        case "h":
            ride.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            tom.play();
            break;

        case "l":
            tink.play();
            break;

        default:
            null
    }
}

function animate(key){
    /*
    This function handles key's animation during events
     */
    let theKey = document.querySelector("." + key);
    theKey.classList.add("pressed");
    setTimeout(()=>{
        theKey.classList.remove("pressed")
    }, 100)
}
"use Strict";

// Variable Declaration

let theHeading = document.querySelector(".container h1"), randomNumberOne = Math.floor((Math.random() * 6) + 1), randomNumberTwo = Math.floor((Math.random() * 6) + 1), firstImage = document.querySelector(".img1"), secondImage = document.querySelector(".img2");


// Winner Declaration Conditionals

if (randomNumberOne > randomNumberTwo){
    theHeading.innerHTML = "✌🏻 Player 1 Wins!"
}
else if (randomNumberOne < randomNumberTwo){
    theHeading.innerHTML = "Player 2 Wins! ✌🏻"
}
else if(randomNumberOne === randomNumberTwo){
    theHeading.innerHTML = "It's a draw!"
}
else{
    theHeading.innerHTML = "Refresh Me!";   
}


function imageViewer(randomNumber, imageElement){

    /*
    This function takes random Number as the input and generates the dice image accordingly.
    */

    switch (randomNumber){
        case 1:
            imageElement.setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            imageElement.setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            imageElement.setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            imageElement.setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            imageElement.setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            imageElement.setAttribute("src", "./images/dice6.png");
            break;

        default:
            imageElement.setAttribute("src", "")
    }
}

// Function Call

imageViewer(randomNumberOne, firstImage);
imageViewer(randomNumberTwo, secondImage);
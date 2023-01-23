"use Strict"

let box = document.getElementById("box");
let boxContainer = document.getElementById("boxes");

let boxCount = 0;

for (boxCount; boxCount < 8; boxCount++) {
    randomRGB();
    boxAdd();
}

function randomRGB() {
    // RGB Random
    rgbFirst = Math.floor(Math.random() * 255);
    rgbSecond = Math.floor(Math.random() * 255);
    rgbThird = Math.floor(Math.random() * 255);

    rgbColour = "rgb(" + rgbFirst + "," + rgbSecond + "," + rgbThird + ")";
    return rgbColour;
}

function boxAdd() {
    let theBox = document.createElement("div");
    let popup = document.getElementById("popup");
    let text = document.createTextNode(rgbColour);
    theBox.appendChild(text);

    theBox.classList.add("box");
    theBox.style.background = rgbColour;
    boxContainer.appendChild(theBox);

    theBox.addEventListener("click", () => {
        navigator.clipboard.writeText(rgbColour);
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 1000);
    })
}


function addColor() {
    let colorBlock = document.querySelectorAll(".box");
    colorBlock.forEach((box) => {
        randomRGB();
        box.style.background = rgbColour;
        box.innerHTML = rgbColour;
    })
}


let lightIcon = '<i class="fa-solid fa-sun">';
let darkIcon = '<i class="fa-solid fa-moon"></i>';
let themeBtn = document.getElementById("theme");

let isDark = true;

themeBtn.addEventListener("click", () => {
    if (isDark) {
        isDark = false;
        iconChanger();
        themeChanger();
    }
    else if (isDark === false) {
        isDark = true;
        iconChanger();
        themeChanger();
    }
})

function iconChanger() {
    if (isDark) {
        themeBtn.innerHTML = lightIcon;
    }
    else if (isDark === false) {
        themeBtn.innerHTML = darkIcon;
    }
}

function themeChanger(){

    let heading = document.getElementById("heading");
    let body = document.getElementsByTagName("body")[0];
    let refreshBtn = document.getElementById("refreshBtn");
    let footer = document.querySelector(".footer h3")
    let footerLink = document.querySelector(".footer h3 a");

    if(isDark){
    heading.style.color = "white";
    body.style.backgroundColor = "#1d1d1d";
    footer.style.color = "white";
    footerLink.sytle.color = "white";
}
else if(isDark === false){

    heading.style.color = "rgb(54,54,54)";
    body.style.backgroundColor = "#e4e4e4";
    footer.style.color = "black";
    footerLink.style.color = "rgb(54,54,54)";
}
}

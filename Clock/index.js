const hr = document.getElementById("hr"), mn = document.getElementById("mn"), sec = document.getElementById("sc");

const deg = 6;

setInterval(() =>{
    let day = new Date();
    // Setting actual minutes and seconds in clock

    let ms = day.getMilliseconds() * deg;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg + ms / 1000;

    // changing the degrees in the style as per the item

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1);
'use strict';

const display = document.querySelector('.display');


const displayClock = () => { 
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    display.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(displayClock, 1000);
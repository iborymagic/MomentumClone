const body = document.querySelector("body");

const NUM_PIC = 5;
const CL_BGIMG = "bgImage"

function setImage(num) {
    const image = new Image();
    image.src = `images/${num}.jpg`;
    image.classList.add(CL_BGIMG);
    body.appendChild(image);
}

function getNumber() {
    const randomNum = Math.floor(Math.random() * NUM_PIC + 1);
    return randomNum;
}

function init() {
    // Create a random variable
    // Load random picture based on the random number
    // Create img tag and attach it to the body.
    const num = getNumber();
    setImage(num);    
}

init();
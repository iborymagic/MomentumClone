const inputForm = document.querySelector(".js-inputForm");
const input = inputForm.querySelector("input");
const greet = document.querySelector(".js-greetings");

const LS_NAME = "name";
const CL_GREET = "greetings";

function greeting(name) {
    greet.innerText = "Hello, " + name;
    greet.classList.remove(CL_GREET);
    inputForm.classList.add(CL_GREET);
}

function saveName(name) {
    localStorage.setItem(LS_NAME, name);
}

function submitListener(event) {
    event.preventDefault();
    const name = input.value;

    // save name
    if(name) {
        saveName(name);
    } else {
        alert("Please enter your name.");
    }

    greeting(name);
}

function init() {
    inputForm.addEventListener("submit", submitListener);

    // if data exists, say hello. if not, do nothing.
    const savedName = localStorage.getItem(LS_NAME);
    if(savedName) {
        greeting(savedName);
    }
}

init();
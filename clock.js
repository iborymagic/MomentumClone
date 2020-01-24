const clock = document.querySelector(".js-title");

function setClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
                        minute < 10 ? `0${minute}` : minute}:${
                        second < 10 ? `0${second}` : second}`;
}

function init() {
    setClock();
    setInterval(setClock, 1000);
}

init();
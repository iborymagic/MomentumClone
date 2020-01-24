const API_KEY = "3ed49ed17b06b98998a87628d9d8e563";
const weather = document.querySelector(".js-weather");

const LS_COORDS = "coords";

function savePosition(coordsObj) {
    const stringCoords = JSON.stringify(coordsObj);
    localStorage.setItem(LS_COORDS, stringCoords)
};

function showWeather(lat, lon) {
    // fetch information
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // show it on the page
        const temp = json.main.temp;
        const place = json.name;

        weather.innerText = `${temp} @ ${place}`;
    });
};

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // create geolocation object
    const coords = {
        lat : latitude,
        lon : longitude
    };

    // show place & weather
    showWeather(coords.lat, coords.lon);

    // save it
    savePosition(coords);
};

function handleGeoError() {
    alert("Can't access geo location.");
};

function init() {
    // if exists in local storage, load geolocation
    // if not, call geolocation and save it to the local storage
    const loadedCoords = localStorage.getItem(LS_COORDS);

    if(loadedCoords) {
        const parsedCoords = JSON.parse(loadedCoords);
        showWeather(parsedCoords.lat, parsedCoords.lon);
    } else {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    }
};

init();
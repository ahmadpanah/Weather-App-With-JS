//Constats

const api = {
    key: "5a873b6b606d9e2aa79aff040a0e7d63",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

// get City Name From User after press Enter
function setQuery (evt) {
    if (evt.keyCode == 13) {
        getResults (searchbox.value);
        console.log(searchbox.value);
    }
}

//get results from openweathermap API
function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults)
}

// Display data in each section

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name} , ${weather.sys.country} `;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span>°C</span>`;

    let status = document.querySelector('.current .weather');
    status.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min} / ${weather.main.temp_max}`;
}
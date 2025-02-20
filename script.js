const inputCity = document.querySelector(".user-input");
const button = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector(".temperature")
const city = document.querySelector('.city-name')
const humidity = document.querySelector('.humidity-details')
const wind = document.querySelector('.wind-details')
const alertBox = document.getElementById('alertMessage');

// Function to update Weather
function updateWeather(data) {
    const { temp_c, humidity: humid, wind_kph, is_day } = data.current;
    const { text } = data.current.condition;
    const { name } = data.location;

    temperature.innerHTML = `<strong>${temp_c}&#x2103;</strong>`
    city.innerHTML = `${name}`;
    humidity.innerHTML = `${humid}%`;
    wind.innerHTML = `${wind_kph} km/h`;
    // For weather icon
    weatherIcon.style.backgroundImage = `url(${updateWeatherIcon(text, is_day)})`;
}

// Function to update Weather Icon
function updateWeatherIcon(text, is_day) {
    if (text === 'Sunny' && is_day === 1) return 'images/sunny.png';
    else if (text === 'Mist' && is_day === 1) { return 'images/mist_day.png' }
    else if (text === 'Mist' && is_day === 0) { return 'images/mist_night.png' }
    else if (text === 'Moderate or heavy rain with thunder') return 'images/rain_thunder.png'
    else if (text === 'Clear' && is_day === 1) { return 'images/clear-sky.png' }
    else if (text === 'Clear' && is_day === 0) { return 'images/clear_night.png' }
    else if (text === 'Light snow') return 'images/snowing.png'
    else if (text === 'Overcast') { return 'images/cloudy_black.png' }
    else return 'images/cloudy.png'
}

function getWeather(city_name) {
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=28403a0868a24c889cf81429251902&q=${city_name}`

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            if (data.error) {
                showAlert(data.error.message);
                return;
            }
            updateWeather(data);
        }
    }
    xhr.send();
}

// Calling for default location weather 
getWeather('India');

// function for alert messages
function showAlert(message) {
    alertBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-3"></i>${message}`
    alertBox.style.display = 'block';
    inputCity.value = ''
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
    return;
}

// Function for Weather of Searched City 
function showWeatherDetails(e) {
    e.preventDefault();

    const cityName = inputCity.value.trim();
    if (cityName === "") {
        showAlert('Enter City name')
    }
    else if (!isNaN(cityName)) {
        showAlert('Enter Valid City name')
    }
    else {
        getWeather(cityName);
        inputCity.value = ""
    }
}

button.addEventListener('click', showWeatherDetails);

inputCity.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        showWeatherDetails(e);
    }
});
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
    const iconMap = {
        "Sunny": "images/sunny.png",
        "Mist_day": "images/mist_day.png",
        "Mist_night": 'images/mist_night.png',
        "Clear_day": 'images/clear-sky.png',
        "Clear_night": 'images/clear_night.png',
        "Light snow": 'images/snowing.png',
        'Overcast': 'images/cloudy_black.png',
        'Moderate or heavy rain with thunder': 'images/rain_thunder.png',
    }

    let key = text;
    if (text === "Clear" || text === "Mist") key += is_day ? "_day" : "_night";
    return iconMap[key] || 'images/cloudy.png'
}

async function getWeather(city_name) {
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=28403a0868a24c889cf81429251902&q=${city_name}`

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Unexpected error occurred (${response.status}). Please try again`);
        }

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }
        updateWeather(data);
    }
    catch (error) {
        showAlert(error.message)
    }
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
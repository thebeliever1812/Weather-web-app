🌤️ Weather App

📌 Overview

This is a simple Weather App that allows users to search for weather conditions in any city. It fetches real-time weather data from the WeatherAPI and displays information such as temperature, humidity, wind speed, and weather icons representing the current conditions.

✨ Features

✅ Search weather conditions for any city 🌍
✅ Displays real-time temperature 🌡️, humidity 💧, and wind speed 🌬️
✅ Dynamic weather icons 🎨
✅ Handles invalid city inputs with error messages ⚠️
✅ Responsive and modern UI using Bootstrap 🎨

🛠️ Technologies Used

HTML 🏗️

CSS 🎨 (Bootstrap for styling)

JavaScript 💻

WeatherAPI 🌍 (for fetching weather data)

🚀 Installation and Usage

1️⃣ Clone the Repository

git clone https://github.com/your-username/weather-app.git
cd weather-app

2️⃣ Open in Browser

Simply open the index.html file in your web browser.

3️⃣ API Key Setup 🔑

This app uses WeatherAPI for fetching weather data. To use it with your own API key:

Go to WeatherAPI and sign up for an API key.

Replace the existing API key in script.js with your own:

let apiUrl = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city_name}`

📂 File Structure

weather-app/
│── index.html        # 🌍 Main HTML file
│── style.css         # 🎨 Stylesheet for the app
│── script.js         # ⚙️ JavaScript logic for fetching and displaying weather
│── images/           # 🖼️ Folder containing weather icons
│── README.md         # 📖 Project documentation

📸 Screenshots

Here are some example screenshots of the weather app displaying weather data for different cities:

🌆 New Delhi



🌆 Mumbai



🗽 New York



🏰 Moscow



🤝 Contributions

Feel free to fork this project, raise issues, or submit pull requests for improvements! 🚀
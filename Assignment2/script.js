function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2e305d298cf54eac8f962039240103"; // Ganti dengan API key Anda dari WeatherAPI.com
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} km/h</p>
    `;
}

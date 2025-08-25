async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "557cd2ff1d98dc49571df70c9b12f5f5"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("❌ City not found!");
            return;
        }

        document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temp").innerHTML = `<b>Temperature: </b> ${data.main.temp}°C`;
        document.getElementById("description").innerHTML = `<b>Weather: </b>${data.weather[0].description}`;
        document.getElementById("humidity").innerHTML = `<b>Humidity: </b>${data.main.humidity}%`;
        document.getElementById("wind").innerHTML = `<b>Wind Speed: </b>${data.wind.speed} m/s`;

        document.querySelector(".weather-info").style.display = "block";
        document.querySelector(".weather-info").classList.add("fade-in");

    } catch (error) {
        alert("⚠️ Error fetching data. Try again!");
    }
}

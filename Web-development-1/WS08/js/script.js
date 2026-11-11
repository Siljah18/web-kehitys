
// Oma OpenWeatherMap API-avain
const API_KEY = "YOUR_API_KEY"; 


// Haetaan HTML-elementit
const city = document.getElementById("city");
const citySearch = document.getElementById("citysearch");
const searchButton = document.getElementById("search");
const weatherData = document.getElementById("weatherdata");
const fetchButton = document.getElementById("fetchWeather");

// Funktio säätietojen hakemiseen
function getWeather(cityName) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&mode=xml&APPID=${API_KEY}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Säätietojen hakeminen epäonnistui!");
            }
            return response.text();
        })
        .then(data => {

            // Muutetaan XML-dataksi
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "text/xml");

            // Luetaan säätiedot XML:stä
            const temperature = xml.querySelector("temperature").getAttribute("value");
            const clouds = xml.querySelector("clouds").getAttribute("name");
            const humidity = xml.querySelector("humidity").getAttribute("value");
            const cityName = xml.querySelector("city").getAttribute("name");

            // Tulostetaan tiedot sivulle
            weatherData.innerHTML = `
                <h2>Sää kaupungissa ${cityName}</h2>
                <p>Lämpötila: ${temperature} °C</p>
                <p>Pilvisyys: ${clouds}</p>
                <p>Ilmankosteus: ${humidity} %</p>
            `;
        })
        .catch(error => {
            console.error("Virhe:", error);
            weatherData.textContent = "Säätietojen hakeminen epäonnistui. Tarkista kaupunki ja API-avain.";
        });
}

// Harjoitus 1: Hae data -painike
fetchButton.addEventListener("click", function () {
    getWeather(city.value);
});

// Kaupunkivalikon onchange-toiminnallisuus
city.addEventListener("change", function () {
    getWeather(city.value);
});

// Hakukentän toiminnallisuus
searchButton.addEventListener("click", function () {
    const searchCity = citySearch.value.trim();

    if (searchCity !== "") {
        getWeather(searchCity);
    } else {
        weatherData.textContent = "Kirjoita ensin kaupungin nimi.";
    }
});

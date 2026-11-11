
// TEHTÄVÄ 1: JSON-tietojen käsittely

const employeesJSON = `[
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "department": "IT"
    },
    {
        "firstName": "Anna",
        "lastName": "Smith",
        "email": "anna.smith@example.com",
        "age": 25,
        "department": "HR"
    },
    {
        "firstName": "Peter",
        "lastName": "Jones",
        "email": "peter.jones@example.com",
        "age": 35,
        "department": "Sales"
    }
]`;

const employees = JSON.parse(employeesJSON);

const jsondata = document.getElementById("jsondata");

document.getElementById("namesButton").addEventListener("click", function () {
    jsondata.innerHTML = "";

    employees.forEach(function (employee) {
        const p = document.createElement("p");
        p.textContent = employee.firstName + " " + employee.lastName;
        jsondata.appendChild(p);
    });
});

document.getElementById("allButton").addEventListener("click", function () {
    jsondata.innerHTML = "";

    employees.forEach(function (employee) {
        const p = document.createElement("p");

        p.textContent =
            employee.firstName + " " +
            employee.lastName + " | " +
            employee.email + " | " +
            employee.age + " vuotta | " +
            employee.department;

        jsondata.appendChild(p);
    });
});


// TEHTÄVÄ 2: OMDb-rajapinta ja Star Wars -elokuvat

const movieURL = "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

const rawdata = document.getElementById("rawdata");

function loadMovies(showRawData) {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", movieURL, true);

    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {

            if (showRawData) {
                rawdata.textContent = xmlhttp.responseText;
            } else {
                const movieData = JSON.parse(xmlhttp.responseText);

                rawdata.innerHTML = "";

                if (movieData.Response === "False") {
                    rawdata.textContent = movieData.Error;
                    return;
                }

                const table = document.createElement("table");

                const header = document.createElement("tr");
                header.innerHTML = `
                    <th>Elokuva</th>
                    <th>Vuosi</th>
                    <th>Juliste</th>
                `;
                table.appendChild(header);

                movieData.Search.forEach(function (movie) {
                    const row = document.createElement("tr");

                    const title = document.createElement("td");
                    title.textContent = movie.Title;

                    const year = document.createElement("td");
                    year.textContent = movie.Year;

                    const poster = document.createElement("td");

                    if (movie.Poster !== "N/A") {
                        const img = document.createElement("img");
                        img.src = movie.Poster;
                        img.alt = movie.Title;
                        poster.appendChild(img);
                    } else {
                        poster.textContent = "Ei julistetta";
                    }

                    row.appendChild(title);
                    row.appendChild(year);
                    row.appendChild(poster);

                    table.appendChild(row);
                });

                rawdata.appendChild(table);
            }

        } else {
            rawdata.textContent = "Virhe elokuvien lataamisessa.";
        }
    };

    xmlhttp.onerror = function () {
        rawdata.textContent = "Yhteysvirhe.";
    };

    xmlhttp.send();
}

document.getElementById("rawButton").addEventListener("click", function () {
    loadMovies(true);
});

document.getElementById("parseButton").addEventListener("click", function () {
    loadMovies(false);
});


// TEHTÄVÄ 3: Säätietojen hakeminen JSON-muodossa

const API_KEY = "YOUR_API_KEY";

function getWeather(cityName) {
    const weatherdata = document.getElementById("weatherdata");

    weatherdata.textContent = "Ladataan säätietoja...";

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(cityName) +
        "&units=metric&lang=fi&appid=" +
        API_KEY;

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, true);

    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            const weather = JSON.parse(xmlhttp.responseText);

            weatherdata.innerHTML = "";

            const city = document.createElement("h3");
            city.textContent = weather.name;

            const temperature = document.createElement("p");
            temperature.textContent =
                "Lämpötila: " + weather.main.temp + " °C";

            const description = document.createElement("p");
            description.textContent =
                "Sää: " + weather.weather[0].description;

            const humidity = document.createElement("p");
            humidity.textContent =
                "Ilmankosteus: " + weather.main.humidity + " %";

            const clouds = document.createElement("p");
            clouds.textContent =
                "Pilvisyys: " + weather.clouds.all + " %";

            weatherdata.appendChild(city);
            weatherdata.appendChild(temperature);
            weatherdata.appendChild(description);
            weatherdata.appendChild(humidity);
            weatherdata.appendChild(clouds);

        } else if (xmlhttp.status === 401) {
            weatherdata.textContent =
                "API-avain ei ole kelvollinen tai sitä ei ole vielä aktivoitu.";
        } else {
            weatherdata.textContent =
                "Säätietojen hakeminen epäonnistui. Virhekoodi: " +
                xmlhttp.status;
        }
    };

    xmlhttp.onerror = function () {
        weatherdata.textContent = "Yhteysvirhe säätietoja haettaessa.";
    };

    xmlhttp.send();
}

document.getElementById("fetchWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    getWeather(city);
});

document.getElementById("city").addEventListener("change", function () {
    getWeather(this.value);
});

document.getElementById("search").addEventListener("click", function () {
    const city = document.getElementById("citysearch").value.trim();

    if (city !== "") {
        getWeather(city);
    } else {
        document.getElementById("weatherdata").textContent =
            "Kirjoita ensin kaupungin nimi.";
    }
});

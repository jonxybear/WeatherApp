function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#entercity");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let name = response.data.name;
  let descript = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let windspeed = response.data.wind.speed;
  let messagename = `${name}`;
  let messagetemp = `${temperature}`;
  let messagehum = `${humidity}`;
  let messagewind = `${windspeed}`;
  let messagedescript = `${descript}`;
  let city = document.querySelector("#city");
  let maintemp = document.querySelector("#maintemp");
  let humid = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let weatherdescript = document.querySelector("#description");
  let iconElement = document.querySelector("#wicon");
  city.innerHTML = messagename;
  maintemp.innerHTML = messagetemp;
  humid.innerHTML = messagehum;
  wind.innerHTML = messagewind;
  weatherdescript.innerHTML = messagedescript;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function displayForecast() {
  let forcastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun"];

  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
  <div class="col-2">
  <div class="weather-forecast-date">${day}</div>
  <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="42" />
  <div class="weather-forecast-temp">
  <span class="weather-forecast-max"> 18° </span>
  <span class="weather-forecast-min"> 12° </span>
  </div>
  </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forcastElement.innerHTML = forecastHTML;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "toronto";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

function giveDate() {
  let now = new Date();
  let h3 = document.querySelector("h3");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  h3.innerHTML = `${day} ${month} ${date}, ${year} - ${hours}:${minutes}`;
}
giveDate();
displayForecast();

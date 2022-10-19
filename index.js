let today = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();

function changeDate() {
    let dateTime = document.querySelector("#date");
    dateTime.innerHTML = `<strong> ${day}  ${hour} : ${minutes} </strong>`;
}
changeDate();

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = Math.round(
        response.data.main.humidity
    );
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
        response.data.weather[0].main;
}

function searchCity(city) {
    let apiKey = "5354b60afda2b7800186c06153932396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=6.45&lon=3.35&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#srch-input").value;
    searchCity(city);
}

let searchButton = document.querySelector("#srch-form");
searchButton.addEventListener("submit", handleSubmit);

searchCity("paris");

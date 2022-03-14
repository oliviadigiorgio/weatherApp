function dateFormat() {
  let hours = now.getHours();
  let minutes = ("0" + now.getMinutes()).slice(-2);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  document.querySelector("h2").innerHTML = `${day} ${hours}:${minutes}`;
}
let now = new Date();
dateFormat();

function handleSubmit(event) {
  event.preventDefault();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);
}

function showTemperature(response) {
  h1.innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let h1 = document.querySelector("h1");
let cityInput = document.querySelector("#city-input");
document.querySelector("#label").addEventListener("submit", handleSubmit);

function showPosition(position) {
  let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(url2).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
document.querySelector("button").addEventListener("click", getCurrentPosition);
getCurrentPosition();

const apiKey = "1a723f49b28c92f998c446d046ad327c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

function handleSearch() {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearch);

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});


async function checkWeather(cityName) {

  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } 
  
  else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./img/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./img/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./img/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./img/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

}

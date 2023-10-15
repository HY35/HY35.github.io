// Weather & geolocation

const weatherElement = document.getElementById("weather");
const apiKey = "YOUR_API_KEY";

function onGeoOK(position){
    const lat = position.coords.latitute;
    const lng = position.coords.longitute;
    console.log("You live in", lat, lng);
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);



const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;


fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;
    
    const weatherInfo = `Current weather in ${cityName}: ${description}, Temperature: ${temperature}°C`;
    
    weatherElement.innerText = weatherInfo;
  })
  .catch((error) => {
    weatherElement.innerText = "Failed to show weather data.";
  });
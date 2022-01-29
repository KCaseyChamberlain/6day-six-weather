var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

// uses moment to get the current time and displays it in the header
var currentTime = function () {
    timeEL = document.querySelector('#current-weather-date')
    timeEL.innerHTML = moment().format('MMMM Do');
}
setInterval(currentTime, 1000);
// END OF TIMER FUNCTION

var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCurrentWeather(city);

        // clear old content
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name!");
    }
};


// START OF CURRENT WEATHER FUNCTION
var getCurrentWeather = function (city) {

    // format the openweathermap current api url
    
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=1943adda1f7996b352d3f817945f8c54";
    console.log(apiURL);

$.ajax({
    url: apiURL,
    method: "GET", 
}).then(function (response){
    console.log(response);

    var longitude = response.coord.lon;
    var latitude = response.coord.lat;
    getForecastWeather(longitude, latitude);

    console.log(response.name)
    var currentCityName = response.name;
    getCurrentCityName(currentCityName)

    console.log(response.weather[0].icon)
    var currentIcon = response.weather[0].icon;
    getCurrentWeatherIcon(currentIcon)

    console.log(response.main.temp)
    var currentTemp = response.main.temp;
    getCurrentWeatherTemp(currentTemp)

    console.log(response.main.humidity)
    var currentHumidity = response.main.humidity;
    getCurrentWeatherHumidity(currentHumidity)

    console.log(response.wind.speed)
    var currentWindSpeed = response.wind.speed;
    getCurrentWeatherWindSpeed(currentWindSpeed)
})
}
// END OF CURRENT WEATHER FUNCTION




// START OF FORECAST WEATHER FUNCTION
var getForecastWeather = function (longitude, latitude) {

    // format the openweathermap forecast api url
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,&units=imperial&appid=1943adda1f7996b352d3f817945f8c54";
    console.log(apiURL);

$.ajax({
    url: apiURL,
    method: "GET", 
}).then(function (response){
    console.log(response)

    console.log(response.current.uvi)
    var currentUvi = response.current.uvi;
    getCurrentWeatherUvi(currentUvi)

})
}
// END OF FORECAST WEATHER FUNCTION

// START OF GET CURRENT CITY NAME
var getCurrentCityName = function (currentCityName) {
    var currentWeatherCityName = document.querySelector("#current-weather-city-name");
    $(currentWeatherCityName).replaceWith(currentCityName);
}
// END OF GET CURRENT CITY NAME

// START OF GET CURRENT WEATHER ICON
var getCurrentWeatherIcon =  function (currentIcon){
    var iconUrl = "http://openweathermap.org/img/w/" + currentIcon + ".png";
    var currentWeatherIcon = document.querySelector("#current-icon-image");
    $(currentWeatherIcon).attr('src', iconUrl);
}
// END OF GET CURRENT WEATHER ICON

// START OF GET CURRENT WEATHER TEMP
var getCurrentWeatherTemp = function (currentTemp) {
    var currentWeatherTemp = document.querySelector("#current-weather-temp");
    $(currentWeatherTemp).append(currentTemp)
}
// END OF GET CURRENT WEATHER TEMP

// START OF CURRENT WEATHER HUMIDITY
var getCurrentWeatherHumidity = function (currentHumidity){
    var currentWeatherHumidity = document.querySelector("#current-weather-humidity");
    $(currentWeatherHumidity).append(currentHumidity);
}


// END OF CURRENT WEATHER HUMIDITY

// START OF CURRENT WEATHER WIND SPEED
var getCurrentWeatherWindSpeed = function (currentWindSpeed) {
    var currentWeatherWindSpeed = document.querySelector("#current-weather-wind-speed");
    $(currentWeatherWindSpeed).append(currentWindSpeed);
}
// END OF CURRENT WEATHER WIND SPEED

// START OF CURRENT UVI
var getCurrentWeatherUvi = function (currentUvi) {
    var currentWeatherUvi = document.querySelector("#current-weather-uvi");
    $(currentWeatherUvi).append(currentUvi);
}
// END OF CURRENT UVI

// END OF CURRENT WEATHER BLOCK!!!!

// START OF TOMORROW WEATHER BLOCK!!!














// click event
userFormEl.addEventListener("submit", formSubmitHandler);






















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
    
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1943adda1f7996b352d3f817945f8c54";
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
})
}
// END OF CURRENT WEATHER FUNCTION




// START OF FORECAST WEATHER FUNCTION
var getForecastWeather = function (longitude, latitude) {

    // format the openweathermap forecast api url
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,&appid=1943adda1f7996b352d3f817945f8c54";
    console.log(apiURL);

$.ajax({
    url: apiURL,
    method: "GET", 
}).then(function (response){
    console.log(response)

    console.log(response.daily[0].weather[0].icon)
    var currentIcon = response.daily[0].weather[0].icon;
    getCurrentWeatherIcon(currentIcon)
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
    var currentWeatherIcon = document.querySelector("#current-weather-icon");
    $(currentWeatherIcon).addClass("currentIcon");
}

// END OF GET CURRENT WEATHER ICON
















// click event
userFormEl.addEventListener("submit", formSubmitHandler);






















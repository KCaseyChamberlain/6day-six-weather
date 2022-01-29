var searchHistoryButton
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var pastCitySearch = []
var city
var searchHistoryList = document.querySelector("#search-history-list")
var searchHistoryButton = document.querySelector(".search-history-button")


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
    city = cityInputEl.value.trim();

    if (city) {
        getCurrentWeather(city);
        cityHistorySave(city);
        updateSearchHistoryList();

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



    console.log(response.daily[0].weather[0].icon)
    var tomorrowIcon = response.daily[0].weather[0].icon;
    getTomorrowWeatherIcon(tomorrowIcon)

    console.log(response.daily[0].temp.day)
    var tomorrowTemp = response.daily[0].temp.day;
    getTomorrowWeatherTemp(tomorrowTemp)

    console.log(response.daily[0].humidity)
    var tomorrowHumidity = response.daily[0].humidity;
    getTomorrowWeatherHumidity(tomorrowHumidity)

    console.log(response.daily[0].wind_speed)
    var tomorrowWindSpeed = response.daily[0].wind_speed;
    getTomorrowWeatherWindSpeed(tomorrowWindSpeed)


    


    console.log(response.daily[1].weather[0].icon)
    var twoDaysOutIcon = response.daily[1].weather[0].icon;
    getTwoDaysOutWeatherIcon(twoDaysOutIcon)

    console.log(response.daily[1].temp.day)
    var twoDaysOutTemp = response.daily[1].temp.day;
    getTwoDaysOutWeatherTemp(twoDaysOutTemp)

    console.log(response.daily[1].humidity)
    var twoDaysOutHumidity = response.daily[1].humidity;
    getTwoDaysOutWeatherHumidity(twoDaysOutHumidity)

    console.log(response.daily[1].wind_speed)
    var twoDaysOutWindSpeed = response.daily[1].wind_speed;
    getTwoDaysOutWeatherWindSpeed(twoDaysOutWindSpeed)
})
}
// END OF FORECAST WEATHER FUNCTION







// START OF GET CURRENT CITY NAME
var getCurrentCityName = function (currentCityName) {
    var currentWeatherCityName = document.querySelector("#current-weather-city-name");
    $(currentWeatherCityName).replaceWith(currentCityName);
}

// START OF GET CURRENT WEATHER ICON
var getCurrentWeatherIcon =  function (currentIcon){
    var currentIconUrl = "http://openweathermap.org/img/w/" + currentIcon + ".png";
    var currentWeatherIcon = document.querySelector("#current-icon-image");
    $(currentWeatherIcon).attr('src', currentIconUrl);
}

// START OF GET CURRENT WEATHER TEMP
var getCurrentWeatherTemp = function (currentTemp) {
    var currentWeatherTemp = document.querySelector("#current-weather-temp");
    $(currentWeatherTemp).append(currentTemp)
}

// START OF CURRENT WEATHER HUMIDITY
var getCurrentWeatherHumidity = function (currentHumidity){
    var currentWeatherHumidity = document.querySelector("#current-weather-humidity");
    // currentWeatherHumidity.innerHTML = ""
    $(currentWeatherHumidity).append(currentHumidity);
}



// START OF CURRENT WEATHER WIND SPEED
var getCurrentWeatherWindSpeed = function (currentWindSpeed) {
    var currentWeatherWindSpeed = document.querySelector("#current-weather-wind-speed");
    $(currentWeatherWindSpeed).append(currentWindSpeed);
}

// START OF CURRENT UVI
var getCurrentWeatherUvi = function (currentUvi) {
    var currentWeatherUvi = document.querySelector("#current-weather-uvi");
    $(currentWeatherUvi).append(currentUvi);
}

// END OF CURRENT WEATHER BLOCK!!!!










// START OF TOMORROW WEATHER BLOCK!!!
var tomorrowTime = function () {
    timeEL = document.querySelector('#tomorrow-weather-date')
    timeEL.innerHTML = moment().add(1, 'days').format('MMMM Do');
}
setInterval(tomorrowTime, 1000);

// START OF GET TOMORROW WEATHER ICON
var getTomorrowWeatherIcon =  function (tomorrowIcon){
    var tomorrowIconUrl = "http://openweathermap.org/img/w/" + tomorrowIcon + ".png";
    var tomorrowWeatherIcon = document.querySelector("#tomorrow-icon-image");
    $(tomorrowWeatherIcon).attr('src', tomorrowIconUrl);
}


// START OF GET TOMORROW WEATHER TEMP
var getTomorrowWeatherTemp = function (tomorrowTemp) {
    var tomorrowWeatherTemp = document.querySelector("#tomorrow-weather-temp");
    $(tomorrowWeatherTemp).append(tomorrowTemp)
}

// START OF TOMORROW WEATHER HUMIDITY
var getTomorrowWeatherHumidity = function (tomorrowHumidity){
    var tomorrowWeatherHumidity = document.querySelector("#tomorrow-weather-humidity");
    $(tomorrowWeatherHumidity).append(tomorrowHumidity);
}

// START OF TOMORROW WEATHER WIND SPEED
var getTomorrowWeatherWindSpeed = function (tomorrowWindSpeed) {
    var tomorrowWeatherWindSpeed = document.querySelector("#tomorrow-weather-wind-speed");
    $(tomorrowWeatherWindSpeed).append(tomorrowWindSpeed);
}







// START OF two-days-out WEATHER BLOCK!!!
var TwoDaysOutTime = function () {
    timeEL = document.querySelector("#two-days-out-weather-date")
    timeEL.innerHTML = moment().add(2, 'days').format('MMMM Do');
}
setInterval(TwoDaysOutTime, 1000);


// START OF GET TOMORROW WEATHER ICON
var getTwoDaysOutWeatherIcon =  function (twoDaysOutIcon){
    var twoDaysOutIconUrl = "http://openweathermap.org/img/w/" + twoDaysOutIcon + ".png";
    var twoDaysOutWeatherIcon = document.querySelector("#two-days-out-icon-image");
    $(twoDaysOutWeatherIcon).attr('src', twoDaysOutIconUrl);
}


// START OF GET TOMORROW WEATHER TEMP
var getTwoDaysOutWeatherTemp = function (twoDaysOutTemp) {
    var twoDaysOutWeatherTemp = document.querySelector("#two-days-out-weather-temp");
    $(twoDaysOutWeatherTemp).append(twoDaysOutTemp)
}

// START OF TOMORROW WEATHER HUMIDITY
var getTwoDaysOutWeatherHumidity = function (twoDaysOutHumidity){
    var twoDaysOutWeatherHumidity = document.querySelector("#two-days-out-weather-humidity");
    $(twoDaysOutWeatherHumidity).append(twoDaysOutHumidity);
}

// START OF TOMORROW WEATHER WIND SPEED
var getTwoDaysOutWeatherWindSpeed = function (twoDaysOutWindSpeed) {
    var twoDaysOutWeatherWindSpeed = document.querySelector("#two-days-out-weather-wind-speed");
    $(twoDaysOutWeatherWindSpeed).append(twoDaysOutWindSpeed);
}












// START OF SET CITY HISTORY FUNCTION

function cityHistorySave(city) {
    pastCitySearch.unshift({
        cityName: city,
    })
    localStorage.setItem("History", JSON.stringify(pastCitySearch))
}

// START OF GET CITY HISTORY
function getCityHistory () {
    var loadCityHistory = JSON.parse(localStorage.getItem("History"))
    console.log(loadCityHistory)
    return loadCityHistory
}

// START OF SEARCH HISTORY BUTTONS FUNCTION
function updateSearchHistoryList () {
    searchHistoryList.innerHTML = ""
    var history = getCityHistory()
    for (i = 0; i < history.length; i++) {
        var button = document.createElement("button")
        button.classList.add("search-history-button")
        console.log(history[i].cityName)
        var buttonContent = history[i].cityName.toString()
        button.innerHTML = buttonContent
        searchHistoryList.append(button)
    }
}


$(document).on("click", ".search-history-button", function () {
    console.log("click")
    city = $(this).text()
    console.log(city)
    getCurrentWeather(city);
    cityHistorySave(city);
    updateSearchHistoryList();
})






// click event
userFormEl.addEventListener("submit", formSubmitHandler);





















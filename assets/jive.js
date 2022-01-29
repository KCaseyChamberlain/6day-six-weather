var searchHistoryButton
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var pastCitySearch = []
var city
var searchHistoryList = document.querySelector("#search-history-list")
var searchHistoryButton = document.querySelector(".search-history-button")
var weatherBlockVis = document.querySelector(".visibility-hidden")

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
        // shows weather block when city is searched
        $(weatherBlockVis).removeClass("visibility-hidden");

        getCurrentWeather(city);
        cityHistorySave(city);
        updateSearchHistoryList();

        // clear old content
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name!");
    }
};


// START OF CURRENT API WEATHER FUNCTION
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

    // console.log(response.name)
    var currentCityName = response.name;
    getCurrentCityName(currentCityName)

    // console.log(response.weather[0].icon)
    var currentIcon = response.weather[0].icon;
    getCurrentWeatherIcon(currentIcon)

    // console.log(response.main.temp)
    var currentTemp = response.main.temp;
    getCurrentWeatherTemp(currentTemp)

    // console.log(response.main.humidity)
    var currentHumidity = response.main.humidity;
    getCurrentWeatherHumidity(currentHumidity)
    

    // console.log(response.wind.speed)
    var currentWindSpeed = response.wind.speed;
    getCurrentWeatherWindSpeed(currentWindSpeed)
})
}
// END OF CURRENT API WEATHER FUNCTION



// START OF FORECAST API WEATHER FUNCTION
var getForecastWeather = function (longitude, latitude) {

    // format the openweathermap forecast api url
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,&units=imperial&appid=1943adda1f7996b352d3f817945f8c54";
    console.log(apiURL);

$.ajax({
    url: apiURL,
    method: "GET", 
}).then(function (response){
    console.log(response)

    // console.log(response.current.uvi)
    var currentUvi = response.current.uvi;
    getCurrentWeatherUvi(currentUvi)


    // console.log(response.daily[0].weather[0].icon)
    var tomorrowIcon = response.daily[0].weather[0].icon;
    getTomorrowWeatherIcon(tomorrowIcon)

    // console.log(response.daily[0].temp.day)
    var tomorrowTemp = response.daily[0].temp.day;
    getTomorrowWeatherTemp(tomorrowTemp)

    // console.log(response.daily[0].humidity)
    var tomorrowHumidity = response.daily[0].humidity;
    getTomorrowWeatherHumidity(tomorrowHumidity)

    // console.log(response.daily[0].wind_speed)
    var tomorrowWindSpeed = response.daily[0].wind_speed;
    getTomorrowWeatherWindSpeed(tomorrowWindSpeed)


    // console.log(response.daily[1].weather[0].icon)
    var twoDaysOutIcon = response.daily[1].weather[0].icon;
    getTwoDaysOutWeatherIcon(twoDaysOutIcon)

    // console.log(response.daily[1].temp.day)
    var twoDaysOutTemp = response.daily[1].temp.day;
    getTwoDaysOutWeatherTemp(twoDaysOutTemp)

    // console.log(response.daily[1].humidity)
    var twoDaysOutHumidity = response.daily[1].humidity;
    getTwoDaysOutWeatherHumidity(twoDaysOutHumidity)

    // console.log(response.daily[1].wind_speed)
    var twoDaysOutWindSpeed = response.daily[1].wind_speed;
    getTwoDaysOutWeatherWindSpeed(twoDaysOutWindSpeed)


    // console.log(response.daily[2].weather[0].icon)
    var threeDaysOutIcon = response.daily[2].weather[0].icon;
    getThreeDaysOutWeatherIcon(threeDaysOutIcon)

    // console.log(response.daily[2].temp.day)
    var threeDaysOutTemp = response.daily[2].temp.day;
    getThreeDaysOutWeatherTemp(threeDaysOutTemp)

    // console.log(response.daily[2].humidity)
    var threeDaysOutHumidity = response.daily[2].humidity;
    getThreeDaysOutWeatherHumidity(threeDaysOutHumidity)

    // console.log(response.daily[2].wind_speed)
    var threeDaysOutWindSpeed = response.daily[2].wind_speed;
    getThreeDaysOutWeatherWindSpeed(threeDaysOutWindSpeed)


    // console.log(response.daily[3].weather[0].icon)
    var fourDaysOutIcon = response.daily[3].weather[0].icon;
    getFourDaysOutWeatherIcon(fourDaysOutIcon)

    // console.log(response.daily[3].temp.day)
    var fourDaysOutTemp = response.daily[3].temp.day;
    getFourDaysOutWeatherTemp(fourDaysOutTemp)

    // console.log(response.daily[3].humidity)
    var fourDaysOutHumidity = response.daily[3].humidity;
    getFourDaysOutWeatherHumidity(fourDaysOutHumidity)

    // console.log(response.daily[3].wind_speed)
    var fourDaysOutWindSpeed = response.daily[3].wind_speed;
    getFourDaysOutWeatherWindSpeed(fourDaysOutWindSpeed)


    // console.log(response.daily[4].weather[0].icon)
    var fiveDaysOutIcon = response.daily[4].weather[0].icon;
    getFiveDaysOutWeatherIcon(fiveDaysOutIcon)

    // console.log(response.daily[4].temp.day)
    var fiveDaysOutTemp = response.daily[4].temp.day;
    getFiveDaysOutWeatherTemp(fiveDaysOutTemp)

    // console.log(response.daily[4].humidity)
    var fiveDaysOutHumidity = response.daily[4].humidity;
    getFiveDaysOutWeatherHumidity(fiveDaysOutHumidity)

    // console.log(response.daily[4].wind_speed)
    var fiveDaysOutWindSpeed = response.daily[4].wind_speed;
    getFiveDaysOutWeatherWindSpeed(fiveDaysOutWindSpeed)
})
}
// END OF FORECAST API WEATHER FUNCTION


// START OF GET CURRENT CITY NAME
var getCurrentCityName = function (currentCityName) {
    var currentWeatherCityName = document.querySelector("#current-weather-city-name");
    $(currentWeatherCityName).empty();
    $(currentWeatherCityName).append(currentCityName)
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
    $(currentWeatherTemp).empty();
    $(currentWeatherTemp).append("Temp: " + currentTemp)
}

// START OF CURRENT WEATHER HUMIDITY
var getCurrentWeatherHumidity = function (currentHumidity){
    var currentWeatherHumidity = document.querySelector("#current-weather-humidity");
    $(currentWeatherHumidity).empty();
    $(currentWeatherHumidity).append("Humidity: " + currentHumidity);
}

// START OF CURRENT WEATHER WIND SPEED
var getCurrentWeatherWindSpeed = function (currentWindSpeed) {
    var currentWeatherWindSpeed = document.querySelector("#current-weather-wind-speed");
    $(currentWeatherWindSpeed).empty();
    $(currentWeatherWindSpeed).append("Wind Speed: " + currentWindSpeed);
}

// START OF CURRENT UVI
var getCurrentWeatherUvi = function (currentUvi) {
    var currentWeatherUvi = document.querySelector("#current-weather-uvi");
    $(currentWeatherUvi).empty();
    $(currentWeatherUvi).append("UV Index: " + currentUvi);
    if (currentUvi < 3) {
        currentWeatherUvi.style.backgroundColor = "#1db546";
    }

    else if (currentUvi > 6) {
        currentWeatherUvi.style.backgroundColor = "#fa4848";
    }

    else {
        currentWeatherUvi.style.backgroundColor = "#f8ff78";
    }
}
// END OF CURRENT WEATHER BLOCK

// START OF TOMORROW WEATHER BLOCK
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
    $(tomorrowWeatherTemp).empty();
    $(tomorrowWeatherTemp).append("Temp: " + tomorrowTemp);
}

// START OF TOMORROW WEATHER HUMIDITY
var getTomorrowWeatherHumidity = function (tomorrowHumidity){
    var tomorrowWeatherHumidity = document.querySelector("#tomorrow-weather-humidity");
    $(tomorrowWeatherHumidity).empty();
    $(tomorrowWeatherHumidity).append("Humidity: " + tomorrowHumidity);}

// START OF TOMORROW WEATHER WIND SPEED
var getTomorrowWeatherWindSpeed = function (tomorrowWindSpeed) {
    var tomorrowWeatherWindSpeed = document.querySelector("#tomorrow-weather-wind-speed");
    $(tomorrowWeatherWindSpeed).empty();
    $(tomorrowWeatherWindSpeed).append("Wind Speed: " + tomorrowWindSpeed);}

// START OF TWO-days-out WEATHER BLOCK!!!
var twoDaysOutTime = function () {
    timeEL = document.querySelector("#two-days-out-weather-date")
    timeEL.innerHTML = moment().add(2, 'days').format('MMMM Do');
}
setInterval(twoDaysOutTime, 1000);

// START OF GET TWO-days-out WEATHER ICON
var getTwoDaysOutWeatherIcon =  function (twoDaysOutIcon){
    var twoDaysOutIconUrl = "http://openweathermap.org/img/w/" + twoDaysOutIcon + ".png";
    var twoDaysOutWeatherIcon = document.querySelector("#two-days-out-icon-image");
    $(twoDaysOutWeatherIcon).attr('src', twoDaysOutIconUrl);
}

// START OF GET TWO-days-out WEATHER TEMP
var getTwoDaysOutWeatherTemp = function (twoDaysOutTemp) {
    var twoDaysOutWeatherTemp = document.querySelector("#two-days-out-weather-temp");
    $(twoDaysOutWeatherTemp).empty();
    $(twoDaysOutWeatherTemp).append("Temp: " + twoDaysOutTemp);
}

// START OF TWO-days-out WEATHER HUMIDITY
var getTwoDaysOutWeatherHumidity = function (twoDaysOutHumidity){
    var twoDaysOutWeatherHumidity = document.querySelector("#two-days-out-weather-humidity");
    $(twoDaysOutWeatherHumidity).empty();
    $(twoDaysOutWeatherHumidity).append("Humidity: " + twoDaysOutHumidity);
}

// START OF TWO-days-out WEATHER WIND SPEED
var getTwoDaysOutWeatherWindSpeed = function (twoDaysOutWindSpeed) {
    var twoDaysOutWeatherWindSpeed = document.querySelector("#two-days-out-weather-wind-speed");
    $(twoDaysOutWeatherWindSpeed).empty();
    $(twoDaysOutWeatherWindSpeed).append("Wind Speed: " + twoDaysOutWindSpeed);
}

// START OF THREE-days-out WEATHER BLOCK!!!
var threeDaysOutTime = function () {
    timeEL = document.querySelector("#three-days-out-weather-date")
    timeEL.innerHTML = moment().add(3, 'days').format('MMMM Do');
}
setInterval(threeDaysOutTime, 1000);

// START OF GET THREE-days-out WEATHER ICON
var getThreeDaysOutWeatherIcon =  function (threeDaysOutIcon){
    var threeDaysOutIconUrl = "http://openweathermap.org/img/w/" + threeDaysOutIcon + ".png";
    var threeDaysOutWeatherIcon = document.querySelector("#three-days-out-icon-image");
    $(threeDaysOutWeatherIcon).attr('src', threeDaysOutIconUrl);
}

// START OF GET THREE-days-out WEATHER TEMP
var getThreeDaysOutWeatherTemp = function (threeDaysOutTemp) {
    var threeDaysOutWeatherTemp = document.querySelector("#three-days-out-weather-temp");
    $(threeDaysOutWeatherTemp).empty();
    $(threeDaysOutWeatherTemp).append("Temp: " + threeDaysOutTemp);
}

// START OF THREE-days-out WEATHER HUMIDITY
var getThreeDaysOutWeatherHumidity = function (threeDaysOutHumidity){
    var threeDaysOutWeatherHumidity = document.querySelector("#three-days-out-weather-humidity");
    $(threeDaysOutWeatherHumidity).empty();
    $(threeDaysOutWeatherHumidity).append("Humidity: " + threeDaysOutHumidity);
}

// START OF THREE-days-out WEATHER WIND SPEED
var getThreeDaysOutWeatherWindSpeed = function (threeDaysOutWindSpeed) {
    var threeDaysOutWeatherWindSpeed = document.querySelector("#three-days-out-weather-wind-speed");
    $(threeDaysOutWeatherWindSpeed).empty();
    $(threeDaysOutWeatherWindSpeed).append("Wind Speed: " + threeDaysOutWindSpeed);
}

// START OF FOUR-days-out WEATHER BLOCK!!!
var fourDaysOutTime = function () {
    timeEL = document.querySelector("#four-days-out-weather-date")
    timeEL.innerHTML = moment().add(4, 'days').format('MMMM Do');
}
setInterval(fourDaysOutTime, 1000);

// START OF GET FOUR-days-out WEATHER ICON
var getFourDaysOutWeatherIcon =  function (fourDaysOutIcon){
    var fourDaysOutIconUrl = "http://openweathermap.org/img/w/" + fourDaysOutIcon + ".png";
    var fourDaysOutWeatherIcon = document.querySelector("#four-days-out-icon-image");
    $(fourDaysOutWeatherIcon).attr('src', fourDaysOutIconUrl);
}

// START OF GET FOUR-days-out WEATHER TEMP
var getFourDaysOutWeatherTemp = function (fourDaysOutTemp) {
    var fourDaysOutWeatherTemp = document.querySelector("#four-days-out-weather-temp");
    $(fourDaysOutWeatherTemp).empty();
    $(fourDaysOutWeatherTemp).append("Temp: " + fourDaysOutTemp);
}

// START OF FOUR-days-out WEATHER HUMIDITY
var getFourDaysOutWeatherHumidity = function (fourDaysOutHumidity){
    var fourDaysOutWeatherHumidity = document.querySelector("#four-days-out-weather-humidity");
    $(fourDaysOutWeatherHumidity).empty();
    $(fourDaysOutWeatherHumidity).append("Humidity: " + fourDaysOutHumidity);
}

// START OF FOUR-days-out WEATHER WIND SPEED
var getFourDaysOutWeatherWindSpeed = function (fourDaysOutWindSpeed) {
    var fourDaysOutWeatherWindSpeed = document.querySelector("#four-days-out-weather-wind-speed");
    $(fourDaysOutWeatherWindSpeed).empty();
    $(fourDaysOutWeatherWindSpeed).append("Wind Speed: " + fourDaysOutWindSpeed);
}

// START OF FIVE-days-out WEATHER BLOCK!!!
var fiveDaysOutTime = function () {
    timeEL = document.querySelector("#five-days-out-weather-date")
    timeEL.innerHTML = moment().add(5, 'days').format('MMMM Do');
}
setInterval(fiveDaysOutTime, 1000);

// START OF GET FIVE-days-out WEATHER ICON
var getFiveDaysOutWeatherIcon =  function (fiveDaysOutIcon){
    var fiveDaysOutIconUrl = "http://openweathermap.org/img/w/" + fiveDaysOutIcon + ".png";
    var fiveDaysOutWeatherIcon = document.querySelector("#five-days-out-icon-image");
    $(fiveDaysOutWeatherIcon).attr('src', fiveDaysOutIconUrl);
}

// START OF GET FIVE-days-out WEATHER TEMP
var getFiveDaysOutWeatherTemp = function (fiveDaysOutTemp) {
    var fiveDaysOutWeatherTemp = document.querySelector("#five-days-out-weather-temp");
    $(fiveDaysOutWeatherTemp).empty();
    $(fiveDaysOutWeatherTemp).append("Temp: " + fiveDaysOutTemp);
}

// START OF FIVE-days-out WEATHER HUMIDITY
var getFiveDaysOutWeatherHumidity = function (fiveDaysOutHumidity){
    var fiveDaysOutWeatherHumidity = document.querySelector("#five-days-out-weather-humidity");
    $(fiveDaysOutWeatherHumidity).empty();
    $(fiveDaysOutWeatherHumidity).append("Humidity: " + fiveDaysOutHumidity);
}

// START OF FIVE-days-out WEATHER WIND SPEED
var getFiveDaysOutWeatherWindSpeed = function (fiveDaysOutWindSpeed) {
    var fiveDaysOutWeatherWindSpeed = document.querySelector("#five-days-out-weather-wind-speed");
    $(fiveDaysOutWeatherWindSpeed).empty();
    $(fiveDaysOutWeatherWindSpeed).append("Wind Speed: " + fiveDaysOutWindSpeed);
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

// START OF SEARCH HISTORY BUTTONS
$(document).on("click", ".search-history-button", function () {
    console.log("click")
    city = $(this).text()
    console.log(city)
    getCurrentWeather(city);
    cityHistorySave(city);
    updateSearchHistoryList();
})

// CLICK EVENT
userFormEl.addEventListener("submit", formSubmitHandler);





















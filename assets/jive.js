var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var currentWeatherContainerEl = document.querySelector("#current-weather-container");


var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCityWeather(city);

        // clear old content
        currentWeatherContainerEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name!");
    }
};



var getCityWeather = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayRepos(data, user);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to GitHub");
        });
};




// click event
userFormEl.addEventListener("submit", formSubmitHandler);
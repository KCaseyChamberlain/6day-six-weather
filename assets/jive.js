var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var currentWeatherContainerEl = document.querySelector("#current-weather-container");


var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCurrentWeather(city);


        // clear old content
        currentWeatherContainerEl.textContent = "";
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
    console.log(response)
})
}


// click event
userFormEl.addEventListener("submit", formSubmitHandler);












    // make a get request to url
//     fetch(apiUrl)
//         .then(function (response) {
//             // request was successful
//             if (response.ok) {
//                 console.log(response);
//                 response.json().then(function (data) {
//                     console.log(data);
//                     displayRepos(data, city);
//                 });
//             } else {
//                 alert("Error: " + response.statusText);
//             }
//         })
//         .catch(function (error) {
//             alert("Unable to connect to GitHub");
//         });
// };
// END OF CURRENT WEATHER FUNCTION



// api.openweathermap.org/data/2.5/weather?q=draper&appid=1943adda1f7996b352d3f817945f8c54

// var getCurrentWeather = function () {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//             "x-rapidapi-key": "933080ba96mshccf83a9f1a3bb02p17725ajsn4157f19eeff5"
//         }
//     };
    
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });











import { apiKey } from "./hideKey.js";
// "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + apiKey + "&units=imperial";


let userInput = document.getElementById("userInput")
let enterBtn = document.getElementById("enterBtn")
let showlocation = document.getElementById("showLocation")
let showCurrentTemp = document.getElementById("showCurrentTemp")
let showCurrentDesc = document.getElementById("showCurrentDesc")
let showCurrentHigh = document.getElementById("showCurrentHigh")
let showCurrentLow = document.getElementById("showCurrentLow")
let showCurrentWeatherIcon = document.getElementById("showCurrentWeatherIcon")
let showHeartIcon = document.getElementById("showHeartIcon")
let showCurrentTime = document.getElementById("showCurrentTime");


let showDay1 = document.getElementById("showDay1");
let showDay2 = document.getElementById("showDay2");
let showDay3 = document.getElementById("showDay3");
let showDay4 = document.getElementById("showDay4");
let showDay5 = document.getElementById("showDay5");

let showDate1 = document.getElementById("showDate1");
let showDate2 = document.getElementById("showDate2");
let showDate3 = document.getElementById("showDate3");
let showDate4 = document.getElementById("showDate4");
let showDate5 = document.getElementById("showDate5");

let showDay1High = document.getElementById("showDay1High");
let showDay2High = document.getElementById("showDay2High");
let showDay3High = document.getElementById("showDay3High");
let showDay4High = document.getElementById("showDay4High");
let showDay5High = document.getElementById("showDay5High");

let showDay1Low = document.getElementById("showDay1Low");
let showDay2Low = document.getElementById("showDay2Low");
let showDay3Low = document.getElementById("showDay3Low");
let showDay4Low = document.getElementById("showDay4Low");
let showDay5Low = document.getElementById("showDay5Low");

let showWeatherIconDay1 = document.getElementById("showWeatherIconDay1");
let showWeatherIconDay2 = document.getElementById("showWeatherIconDay2");
let showWeatherIconDay3 = document.getElementById("showWeatherIconDay3");
let showWeatherIconDay4 = document.getElementById("showWeatherIconDay4");
let showWeatherIconDay5 = document.getElementById("showWeatherIconDay5");










let latitude1;
let longitude1;
let units = '&units=imperial'

//geo location start off
navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
    console.log("our latitude " + position.coords.latitude)
    latitude1 = position.coords.latitude;
    console.log("our longitude " + position.coords.longitude)
    longitude1 = position.coords.longitude;

    GeolocationCheck(latitude1, longitude1)
}
//if the user denies we run errorfunc
function errorFunc(error) {
    alert("location must be on to see current weather")

}



async function GeolocationCheck(latitude, longitude) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);

    const data = await promise.json();


    console.log(data);


    showlocation.innerText = data.name;
    showCurrentTemp.innerText = Math.round(data.main.temp) + "°F";
    showCurrentHigh.innerText = Math.round(data.main.temp_max) + "°F";
    showCurrentLow.innerText = Math.round(data.main.temp_min) + "°F";
    showCurrentDesc.innerText = data.weather[0].main;

    const unixTimestamp = data.dt;
    const formattedTime = new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    console.log(`The time is: ${formattedTime}`);

    showCurrentTime.innerHTML = (formattedTime)

}






















// let latitude = '37.961632';
// let longitude = '-121.275604';




//on click take location
//put it in
//if return something its true if not its false
//if false return error
//if it is save it
//if not error

enterBtn.addEventListener('click', function () {
    GetLocation();
})

function GetLocation() {
    let location = userInput.value.toLowerCase();

    CurrentDay(location)
    FiveDayForecast(location)
}

async function CurrentDay(theCheck) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theCheck}&appid=${apiKey}${units}`);
    const data = await promise.json();

    if (data.message === "city not found") {
        alert("Please enter valid location")
    } else {

        console.log(data.name);
        console.log(data);
        showlocation.innerText = data.name;
        showCurrentTemp.innerText = Math.round(data.main.temp) + "°F";
        showCurrentHigh.innerText = Math.round(data.main.temp_max) + "°F";
        showCurrentLow.innerText = Math.round(data.main.temp_min) + "°F";
        showCurrentDesc.innerText = data.weather[0].main;

        const unixTimestamp = data.dt;
        const formattedTime = new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        console.log(typeof formattedTime)

        console.log(`The time is: ${formattedTime}`);

        showCurrentTime.innerHTML = (formattedTime)

    }

}

let highTemp;
let lowTemp;
let highTemp2;
let lowTemp2;
let highTemp3;
let lowTemp3;
let highTemp4;
let lowTemp4;
let highTemp5;
let lowTemp5;


async function FiveDayForecast(theCheck) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${theCheck}&appid=${apiKey}${units}`);
    const data = await promise.json();

    console.log("you're looking for this vv");
    console.log(data);

    for (let i = 0; i < 8; i++) {
        console.log(data.list[i].main.temp_max);
        let currentHigh = data.list[i].main.temp_max;

        if (currentHigh >= highTemp || highTemp === undefined) {
            highTemp = currentHigh;
            console.log("am I working");
        }
        if (currentHigh <= lowTemp || lowTemp === undefined) {
            lowTemp = currentHigh;
        }

    }

    console.log(highTemp);
    console.log(lowTemp);
    console.log("this is the high");

    showDay1Low.innerText = Math.round(lowTemp) + "°F"
    showDay1High.innerText = Math.round(highTemp) + "°F"
    let day1status = data.list[0].weather[0].main; // this holds clouds for change icon

    for (let i = 8; i < 16; i++) {
        console.log(data.list[i].main.temp_max);
        let currentHigh = data.list[i].main.temp_max;

        if (currentHigh >= highTemp2 || highTemp2 === undefined) {
            highTemp2 = currentHigh;
            console.log("am I working");
        }
        if (currentHigh <= lowTemp2 || lowTemp2 === undefined) {
            lowTemp2 = currentHigh;
        }

    }

    console.log(highTemp2);
    console.log(lowTemp2);
    console.log("this is the high");

    showDay2Low.innerText = Math.round(lowTemp2) + "°F"
    showDay2High.innerText = Math.round(highTemp2) + "°F"
    let day2status = data.list[8].weather[0].main; // this holds clouds for change icon
    for (let i = 16; i < 24; i++) {
        console.log(data.list[i].main.temp_max);
        let currentHigh = data.list[i].main.temp_max;

        if (currentHigh >= highTemp3 || highTemp3 === undefined) {
            highTemp3 = currentHigh;
            console.log("am I working");
        }
        if (currentHigh <= lowTemp3 || lowTemp3 === undefined) {
            lowTemp3 = currentHigh;
        }

    }

    console.log(highTemp3);
    console.log(lowTemp3);
    console.log("this is the high");

    showDay3Low.innerText = Math.round(lowTemp3) + "°F"
    showDay3High.innerText = Math.round(highTemp3) + "°F"
    let day3status = data.list[16].weather[0].main; // this holds clouds for change icon

    for (let i = 16; i < 24; i++) {
        console.log(data.list[i].main.temp_max);
        let currentHigh = data.list[i].main.temp_max;

        if (currentHigh >= highTemp4 || highTemp4 === undefined) {
            highTemp4 = currentHigh;
            console.log("am I working");
        }
        if (currentHigh <= lowTemp4 || lowTemp4 === undefined) {
            lowTemp4 = currentHigh;
        }

    }

    console.log(highTemp4);
    console.log(lowTemp4);
    console.log("this is the high");

    showDay4Low.innerText = Math.round(lowTemp4) + "°F"
    showDay4High.innerText = Math.round(highTemp4) + "°F"
    let day4status = data.list[24].weather[0].main; // this holds clouds for change icon

    for (let i = 24; i < 32; i++) {
        console.log(data.list[i].main.temp_max);
        let currentHigh = data.list[i].main.temp_max;

        if (currentHigh >= highTemp5 || highTemp5 === undefined) {
            highTemp5 = currentHigh;
            console.log("am I working");
        }
        if (currentHigh <= lowTemp5 || lowTemp5 === undefined) {
            lowTemp5 = currentHigh;
        }

    }

    console.log(highTemp5);
    console.log(lowTemp5);
    console.log("this is the high");

    showDay5Low.innerText = Math.round(lowTemp5) + "°F"
    showDay5High.innerText = Math.round(highTemp5) + "°F"
    let day5status = data.list[32].weather[0].main; // this holds clouds for change icon




}
















//5day forcast want high, low, day thur 12/10 icon 
// async function FiveDayForecast1() {

//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);


//     const data = await promise.json();

//     console.log(data);
//     //main data
//     console.log(data.list[0]);


//     //date and uni code for data
//     console.log(data.list[0].dt_txt)
//     console.log(data.list[0].dt)

//     //high low
//     console.log(data.list[0].main.temp_max);
//     console.log(data.list[0].main.temp_min);

//     //cloudy
//     console.log(data.list[0].weather[0].main);
// }



// async function CurrentDay1() {
//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);

//     const data = await promise.json();

//     console.log(data)
//     console.log(data.main.temp)
//     console.log(data.main.temp_max)
//     console.log(data.main.temp_min)
//     console.log(data.name)
//     console.log(data.weather[0].main)


// }






// FiveDayForecast1();
// CurrentDay1();
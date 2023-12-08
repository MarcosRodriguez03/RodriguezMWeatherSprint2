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
let injectFav = document.getElementById("injectFav")


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

//-------

let showInfoDay1 = document.getElementById("showInfoDay1");

let showDescDay1 = document.getElementById("showDescDay1");

let showIconDay18am = document.getElementById("showIconDay18am");

let showDay18amWeather = document.getElementById("showDay18amWeather");

let showIconDay1Noon = document.getElementById("showIconDay1Noon");

let showDay1NoonWeather = document.getElementById("showDay1NoonWeather");

let showIconDay18pm = document.getElementById("showIconDay18pm");

let showDay18pmWeather = document.getElementById("showDay18pmWeather");





let showInfoDay2 = document.getElementById("showInfoDay2");

let showDescDay2 = document.getElementById("showDescDay2");

let showIconDay28am = document.getElementById("showIconDay28am");

let showDay28amWeather = document.getElementById("showDay28amWeather");

let showIconDay2Noon = document.getElementById("showIconDay2Noon");

let showDay2NoonWeather = document.getElementById("showDay2NoonWeather");

let showIconDay28pm = document.getElementById("showIconDay28pm");

let showDay28pmWeather = document.getElementById("showDay28pmWeather");





let showInfoDay3 = document.getElementById("showInfoDay3");

let showDescDay3 = document.getElementById("showDescDay3");

let showIconDay38am = document.getElementById("showIconDay38am");

let showDay38amWeather = document.getElementById("showDay38amWeather");

let showIconDay3Noon = document.getElementById("showIconDay3Noon");

let showDay3NoonWeather = document.getElementById("showDay3NoonWeather");

let showIconDay38pm = document.getElementById("showIconDay38pm");

let showDay38pmWeather = document.getElementById("showDay38pmWeather");





let showInfoDay4 = document.getElementById("showInfoDay4");

let showDescDay4 = document.getElementById("showDescDay4");

let showIconDay48am = document.getElementById("showIconDay48am");

let showDay48amWeather = document.getElementById("showDay48amWeather");

let showIconDay4Noon = document.getElementById("showIconDay4Noon");

let showDay4NoonWeather = document.getElementById("showDay4NoonWeather");

let showIconDay48pm = document.getElementById("showIconDay48pm");

let showDay48pmWeather = document.getElementById("showDay48pmWeather");





let showInfoDay5 = document.getElementById("showInfoDay5");

let showDescDay5 = document.getElementById("showDescDay5");

let showIconDay58am = document.getElementById("showIconDay58am");

let showDay58amWeather = document.getElementById("showDay58amWeather");

let showIconDay5Noon = document.getElementById("showIconDay5Noon");

let showDay5NoonWeather = document.getElementById("showDay5NoonWeather");

let showIconDay58pm = document.getElementById("showIconDay58pm");

let showDay58pmWeather = document.getElementById("showDay58pmWeather");

// ------

let forecastBtn1 = document.getElementById("forecastBtn1")
let hideFirstInfo = document.getElementById("hideFirstInfo")

forecastBtn1.addEventListener('click', function () {
    if (hideFirstInfo.style.display === "none") {
        hideFirstInfo.style.display = "block"
        forecastBtn1.style = " background-color: rgba(255, 255, 255, 0.623)"

        hide2Info.style.display = "none"
        forecastBtn2.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide3Info.style.display = "none"
        forecastBtn3.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide4Info.style.display = "none"
        forecastBtn4.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide5Info.style.display = "none"
        forecastBtn5.style = "background-color: rgba(255, 255, 255, 0.389)"
    } else {
        forecastBtn1.style = "background-color: rgba(255, 255, 255, 0.389)"
        hideFirstInfo.style.display = "none"

    }
})

let forecastBtn2 = document.getElementById("forecastBtn2")
let hide2Info = document.getElementById("hide2Info")

forecastBtn2.addEventListener('click', function () {
    if (hide2Info.style.display === "none") {
        hide2Info.style.display = "block"
        forecastBtn2.style = " background-color: rgba(255, 255, 255, 0.623)"

        hideFirstInfo.style.display = "none"
        forecastBtn1.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide3Info.style.display = "none"
        forecastBtn3.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide4Info.style.display = "none"
        forecastBtn4.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide5Info.style.display = "none"
        forecastBtn5.style = "background-color: rgba(255, 255, 255, 0.389)"
    } else {
        forecastBtn2.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide2Info.style.display = "none"
    }
})

let forecastBtn3 = document.getElementById("forecastBtn3")
let hide3Info = document.getElementById("hide3Info")

forecastBtn3.addEventListener('click', function () {
    if (hide3Info.style.display === "none") {
        hide3Info.style.display = "block"
        forecastBtn3.style = " background-color: rgba(255, 255, 255, 0.623)"

        hideFirstInfo.style.display = "none"
        forecastBtn1.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide2Info.style.display = "none"
        forecastBtn2.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide4Info.style.display = "none"
        forecastBtn4.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide5Info.style.display = "none"
        forecastBtn5.style = "background-color: rgba(255, 255, 255, 0.389)"
    } else {
        forecastBtn3.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide3Info.style.display = "none"
    }
})

let forecastBtn4 = document.getElementById("forecastBtn4")
let hide4Info = document.getElementById("hide4Info")

forecastBtn4.addEventListener('click', function () {
    if (hide4Info.style.display === "none") {
        hide4Info.style.display = "block"
        forecastBtn4.style = " background-color: rgba(255, 255, 255, 0.623)"

        hideFirstInfo.style.display = "none"
        forecastBtn1.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide3Info.style.display = "none"
        forecastBtn3.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide2Info.style.display = "none"
        forecastBtn2.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide5Info.style.display = "none"
        forecastBtn5.style = "background-color: rgba(255, 255, 255, 0.389)"
    } else {
        forecastBtn4.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide4Info.style.display = "none"
    }
})

let forecastBtn5 = document.getElementById("forecastBtn5")
let hide5Info = document.getElementById("hide5Info")

forecastBtn5.addEventListener('click', function () {
    if (hide5Info.style.display === "none") {
        hide5Info.style.display = "block"
        forecastBtn5.style = " background-color: rgba(255, 255, 255, 0.623)"

        hideFirstInfo.style.display = "none"
        forecastBtn1.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide3Info.style.display = "none"
        forecastBtn3.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide4Info.style.display = "none"
        forecastBtn4.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide2Info.style.display = "none"
        forecastBtn2.style = "background-color: rgba(255, 255, 255, 0.389)"
    } else {
        forecastBtn5.style = "background-color: rgba(255, 255, 255, 0.389)"
        hide5Info.style.display = "none"
    }
})

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------



















let favoriteArray = [];

if (localStorage.getItem("favorites")) {
    favoriteArray = JSON.parse(localStorage.getItem('favorites'));
    console.log(favoriteArray)

    for (let i = 0; i < favoriteArray.length; i++) {
        let div1 = document.createElement('div')
        div1.className = "col-10 createColTag"
        //----
        div1.addEventListener('click', function () {
            console.log('clicked me yes')
            CurrentDay(favoriteArray[i])
            FiveDayForecast(favoriteArray[i])
            console.log(favoriteArray)


        })
        //----
        let p = document.createElement("p")
        p.innerText = favoriteArray[i]
        p.className = "createdPTag"
        div1.appendChild(p)

        let div2 = document.createElement('div')
        div2.className = "col-1 createColTag"
        let img = document.createElement('img')
        img.src = "./assets/x.png"
        img.className = "createdImg"
        //--
        img.addEventListener('click', function () {
            console.log("yes i work")
            let arrayIndex = favoriteArray.indexOf(favoriteArray[i])
            console.log(arrayIndex)
            favoriteArray.splice(arrayIndex, 1)
            console.log(favoriteArray)


            localStorage.setItem('favorites', JSON.stringify(favoriteArray))
            injectFav.removeChild(div3)

        })
        //--
        div2.appendChild(img)

        let div3 = document.createElement('div')
        div3.className = "container createdDivTag"

        let divRow = document.createElement('div')
        divRow.className = "row"

        divRow.appendChild(div1)
        divRow.appendChild(div2)

        div3.appendChild(divRow)


        injectFav.appendChild(div3)
    }


}


























showHeartIcon.addEventListener('click', function () {

    addToFavorite();

})


function addToFavorite() {
    showHeartIcon.src = "./assets/full heart.png"
    let favoriteInput = showlocation.innerHTML.toLowerCase();
    console.log(favoriteInput)



    if (favoriteArray.includes(favoriteInput)) {
        console.log('already in fav')
        console.log(favoriteArray)
    } else {
        favoriteArray.push(favoriteInput);
        localStorage.setItem('favorites', JSON.stringify(favoriteArray))

        let div1 = document.createElement('div')
        div1.className = "col-10 createColTag"
        //----
        div1.addEventListener('click', function () {
            console.log('clicked me yes')
            CurrentDay(favoriteInput)
            FiveDayForecast(favoriteInput)
            console.log(favoriteArray)


        })
        //----
        let p = document.createElement("p")
        p.innerText = favoriteInput
        p.className = "createdPTag"
        div1.appendChild(p)

        let div2 = document.createElement('div')
        div2.className = "col-1 createColTag"
        let img = document.createElement('img')
        img.src = "./assets/x.png"
        img.className = "createdImg"
        //--
        img.addEventListener('click', function () {
            console.log("yes i work")
            let arrayIndex = favoriteArray.indexOf(favoriteInput)
            console.log(arrayIndex)
            favoriteArray.splice(arrayIndex, 1)
            console.log(favoriteArray)


            localStorage.setItem('favorites', JSON.stringify(favoriteArray))
            injectFav.removeChild(div3)

        })
        //--
        div2.appendChild(img)

        let div3 = document.createElement('div')
        div3.className = "container createdDivTag"

        let divRow = document.createElement('div')
        divRow.className = "row"

        divRow.appendChild(div1)
        divRow.appendChild(div2)

        div3.appendChild(divRow)


        injectFav.appendChild(div3)

    }

    // <div class="container">
    //     <div class="row">
    //         <div class="col"></div>
    //         <div class="col"></div>
    //     </div>
    // </div>

    // let div = document.createElement("div");
    // div.className = "createdDivTag flex-row"
    // div.addEventListener('click', function () {
    //     console.log(favoriteInput)
    // })

    // let p = document.createElement("p")
    // p.innerText = favoriteInput
    // p.className = "createdPTag"

    // let img = document.createElement('img')
    // img.src = "./assets/sunpng.png"
    // img.className = "createdImg"


    // div.appendChild(p)
    // div.appendChild(img)

    // injectFav.appendChild(div)






}






enterBtn.addEventListener('click', function () {
    GetLocation();

})


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
    // const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}${units}`);

    const data = await promise.json();

    // console.log("here here here")
    // console.log(data[0].local_names.en)

    CurrentDay(data[0].local_names.en)
    FiveDayForecast(data[0].local_names.en)
    if (favoriteArray.includes(data[0].local_names.en.toLowerCase())) {
        showHeartIcon.src = "./assets/full heart.png";
    } else {
        showHeartIcon.src = "./assets/empty heart.png";
    }

}






function GetLocation() {
    let location = userInput.value.toLowerCase();


    CurrentDay(location)
    FiveDayForecast(location)
    userInput.value = ""

    if (favoriteArray.includes(location)) {
        showHeartIcon.src = "./assets/full heart.png";
    } else {
        showHeartIcon.src = "./assets/empty heart.png";
    }


}

async function CurrentDay(theCheck) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theCheck}&appid=${apiKey}${units}`);
    const data = await promise.json();

    if (data.message === "city not found") {
        alert("Please enter valid location")
    } else {

        console.log(data)
        showlocation.innerText = data.name.toUpperCase();
        showCurrentTemp.innerText = Math.round(data.main.temp) + "°F";
        showCurrentHigh.innerText = Math.round(data.main.temp_max) + "°F";
        showCurrentLow.innerText = Math.round(data.main.temp_min) + "°F";
        showCurrentDesc.innerText = data.weather[0].main;
        WeatherStatCheck(data.weather[0].main, showCurrentWeatherIcon);
        const unixTimestamp = data.dt;
        const formattedTime = new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        showCurrentTime.innerHTML = (formattedTime)
    }

}


let iteration = 0;

async function FiveDayForecast(theCheck) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${theCheck}&appid=${apiKey}${units}`);
    const data = await promise.json();

    console.log("you're looking for this vv");
    console.log(data);



    let currentDate = new Date()

    for (let i = 0; i < data.list.length; i++) {

        if (currentDate.getDate() < new Date(data.list[i].dt * 1000).getDate() || currentDate.getFullYear() < new Date(data.list[i].dt * 1000).getFullYear() || currentDate.getMonth() < new Date(data.list[i].dt * 1000).getMonth()) {
            iteration = i;

            // console.log(new Date(data.list[i].dt * 1000))
            break
        }
    }
    console.log(iteration + 'true')




    showInfoDay1.innerText = NumberToDayInfo(new Date(data.list[iteration].dt * 1000).getDay());
    showDescDay1.innerText = data.list[iteration].weather[0].description
    WeatherStatCheck(data.list[iteration + 2].weather[0].main, showIconDay18am);
    showDay18amWeather.innerText = Math.round(data.list[iteration + 2].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 4].weather[0].main, showIconDay1Noon)
    showDay1NoonWeather.innerText = Math.round(data.list[iteration + 4].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 6].weather[0].main, showIconDay18pm)
    showDay18pmWeather.innerText = Math.round(data.list[iteration + 6].main.temp) + "°";


    showInfoDay2.innerText = NumberToDayInfo(new Date(data.list[iteration + 8].dt * 1000).getDay());
    showDescDay2.innerText = data.list[iteration + 8].weather[0].description
    WeatherStatCheck(data.list[iteration + 8 + 2].weather[0].main, showIconDay28am);
    showDay28amWeather.innerText = Math.round(data.list[iteration + 8 + 2].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 8 + 4].weather[0].main, showIconDay2Noon)
    showDay2NoonWeather.innerText = Math.round(data.list[iteration + 8 + 4].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 8 + 6].weather[0].main, showIconDay28pm)
    showDay28pmWeather.innerText = Math.round(data.list[iteration + 8 + 6].main.temp) + "°";


    showInfoDay3.innerText = NumberToDayInfo(new Date(data.list[iteration + 16].dt * 1000).getDay());
    showDescDay3.innerText = data.list[iteration + 16].weather[0].description
    WeatherStatCheck(data.list[iteration + 16 + 2].weather[0].main, showIconDay38am);
    showDay38amWeather.innerText = Math.round(data.list[iteration + 16 + 2].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 16 + 4].weather[0].main, showIconDay3Noon)
    showDay3NoonWeather.innerText = Math.round(data.list[iteration + 16 + 4].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 16 + 6].weather[0].main, showIconDay38pm)
    showDay38pmWeather.innerText = Math.round(data.list[iteration + 16 + 6].main.temp) + "°";


    showInfoDay4.innerText = NumberToDayInfo(new Date(data.list[iteration + 24].dt * 1000).getDay());
    showDescDay4.innerText = data.list[iteration + 24].weather[0].description
    WeatherStatCheck(data.list[iteration + 24 + 2].weather[0].main, showIconDay48am);
    showDay48amWeather.innerText = Math.round(data.list[iteration + 24 + 2].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 24 + 4].weather[0].main, showIconDay4Noon)
    showDay4NoonWeather.innerText = Math.round(data.list[iteration + 24 + 4].main.temp) + "°";
    WeatherStatCheck(data.list[iteration + 24 + 6].weather[0].main, showIconDay48pm)
    showDay48pmWeather.innerText = Math.round(data.list[iteration + 24 + 6].main.temp) + "°";


    if (iteration + 32 + 6 > 39) {
        showInfoDay5.innerText = NumberToDayInfo(new Date(data.list[39].dt * 1000).getDay());
        showDescDay5.innerText = data.list[39].weather[0].description
        WeatherStatCheck(data.list[39].weather[0].main, showIconDay58am);
        showDay58amWeather.innerText = Math.round(data.list[39].main.temp) + "°";
        WeatherStatCheck(data.list[39].weather[0].main, showIconDay5Noon)
        showDay5NoonWeather.innerText = Math.round(data.list[39].main.temp) + "°";
        WeatherStatCheck(data.list[39].weather[0].main, showIconDay58pm)
        showDay58pmWeather.innerText = Math.round(data.list[39].main.temp) + "°";
    } else {
        showInfoDay5.innerText = NumberToDayInfo(new Date(data.list[iteration + 32].dt * 1000).getDay());
        showDescDay5.innerText = data.list[iteration + 32].weather[0].description
        WeatherStatCheck(data.list[iteration + 32 + 2].weather[0].main, showIconDay58am);
        showDay58amWeather.innerText = Math.round(data.list[iteration + 32 + 2].main.temp) + "°";
        WeatherStatCheck(data.list[iteration + 32 + 4].weather[0].main, showIconDay5Noon)
        showDay5NoonWeather.innerText = Math.round(data.list[iteration + 32 + 4].main.temp) + "°";
        WeatherStatCheck(data.list[iteration + 32 + 6].weather[0].main, showIconDay58pm)
        showDay58pmWeather.innerText = Math.round(data.list[iteration + 32 + 6].main.temp) + "°";
    }








    //------------------------------------------------------------------------------
    let tempDayNumber1 = new Date(data.list[iteration].dt * 1000).getDay();
    showDay1.innerText = NumberToDay(tempDayNumber1);
    let dayDay1 = new Date(data.list[iteration].dt * 1000).getDate();
    let dayMonth1 = new Date(data.list[iteration].dt * 1000).getMonth() + 1;


    showDate1.innerText = dayMonth1 + "/" + dayDay1;
    showDay1High.innerText = Math.round(FindHigh(0)) + "°F"
    showDay1Low.innerText = Math.round(FindLow(0)) + "°F"
    let day1status = data.list[iteration].weather[0].main; // this holds clouds for change icon
    WeatherStatCheck(day1status, showWeatherIconDay1)



    let tempDayNumber2 = new Date(data.list[iteration + 8].dt * 1000).getDay();
    showDay2.innerText = NumberToDay(tempDayNumber2);
    let dayDay2 = new Date(data.list[iteration + 8].dt * 1000).getDate();
    let dayMonth2 = new Date(data.list[iteration + 8].dt * 1000).getMonth() + 1;


    showDate2.innerText = dayMonth2 + "/" + dayDay2;
    showDay2High.innerText = Math.round(FindHigh(8)) + "°F"
    showDay2Low.innerText = Math.round(FindLow(8)) + "°F"
    let day2status = data.list[iteration + 8].weather[0].main; // this holds clouds for change icon
    WeatherStatCheck(day2status, showWeatherIconDay2)

    let tempDayNumber3 = new Date(data.list[iteration + 16].dt * 1000).getDay();
    showDay3.innerText = NumberToDay(tempDayNumber3);
    let dayDay3 = new Date(data.list[iteration + 16].dt * 1000).getDate();
    let dayMonth3 = new Date(data.list[iteration + 16].dt * 1000).getMonth() + 1;


    showDate3.innerText = dayMonth3 + "/" + dayDay3;
    showDay3High.innerText = Math.round(FindHigh(16)) + "°F"
    showDay3Low.innerText = Math.round(FindLow(16)) + "°F"
    let day3status = data.list[iteration + 16].weather[0].main; // this holds clouds for change icon
    WeatherStatCheck(day3status, showWeatherIconDay3)

    let tempDayNumber4 = new Date(data.list[iteration + 24].dt * 1000).getDay();
    showDay4.innerText = NumberToDay(tempDayNumber4);
    let dayDay4 = new Date(data.list[iteration + 24].dt * 1000).getDate();
    let dayMonth4 = new Date(data.list[iteration + 24].dt * 1000).getMonth() + 1;


    showDate4.innerText = dayMonth4 + "/" + dayDay4;
    showDay4High.innerText = Math.round(FindHigh(24)) + "°F"
    showDay4Low.innerText = Math.round(FindLow(24)) + "°F"
    let day4status = data.list[iteration + 24].weather[0].main; // this holds clouds for change icon
    WeatherStatCheck(day4status, showWeatherIconDay4);


    let tempDayNumber5 = new Date(data.list[iteration + 24].dt * 1000).getDay();
    showDay5.innerText = NumberToDay(tempDayNumber5 + 1);
    let dayDay5 = new Date(data.list[iteration + 31].dt * 1000).getDate();
    let dayMonth5 = new Date(data.list[iteration + 31].dt * 1000).getMonth() + 1;

    if (iteration + 32 > 39) {
        showDate5.innerText = dayMonth5 + "/" + (Number(dayDay5) + 1);
        showDay5High.innerText = Math.round(FindHighLastCase(31)) + "°F"
        showDay5Low.innerText = Math.round(FindLowLastCase(31)) + "°F"
        let day5status = data.list[iteration + 31].weather[0].main; // this holds clouds for change icon
        WeatherStatCheck(day5status, showWeatherIconDay5)
    } else {
        showDate5.innerText = dayMonth5 + "/" + dayDay5;
        showDay5High.innerText = Math.round(FindHighLastCase(32)) + "°F"
        showDay5Low.innerText = Math.round(FindLowLastCase(32)) + "°F"
        let day5status = data.list[iteration + 32].weather[0].main; // this holds clouds for change icon
        WeatherStatCheck(day5status, showWeatherIconDay5)
    }


    function FindHigh(add) {
        let highTemp;

        for (let i = iteration + add; i < iteration + 8 + add; i++) {
            let currentHigh = data.list[i].main.temp;
            if (currentHigh >= highTemp || highTemp === undefined) {
                highTemp = currentHigh;
            }
        }
        return (highTemp)
    }

    function FindLow(add) {
        let lowTemp;
        for (let i = iteration + add; i < iteration + 8 + add; i++) {
            let currentHigh = data.list[i].main.temp;
            if (currentHigh <= lowTemp || lowTemp === undefined) {
                lowTemp = currentHigh;
            }
        }
        return lowTemp;
    }
    function FindHighLastCase(add) {
        let highTemp;

        for (let i = iteration + add; i < 40; i++) {
            let currentHigh = data.list[i].main.temp;
            if (currentHigh >= highTemp || highTemp === undefined) {
                highTemp = currentHigh;
            }
        }
        return (highTemp)
    }

    function FindLowLastCase(add) {
        let lowTemp

        for (let i = iteration + add; i < 40; i++) {
            let currentHigh = data.list[i].main.temp;
            if (currentHigh <= lowTemp || lowTemp === undefined) {
                lowTemp = currentHigh;
            }
        }
        return lowTemp;
    }

}


function WeatherStatCheck(weatherMain, show) {
    if (weatherMain === 'Thunderstorm') {
        show.src = "./assets/thunderStrom.png"
    } else if (weatherMain === 'Drizzle') {
        show.src = "./assets/cloudy png.png";
    } else if (weatherMain === 'Rain') {
        show.src = "./assets/cloudy png.png";
    } else if (weatherMain === 'Snow') {
        show.src = "./assets/snow.png"
    } else if (weatherMain === 'Mist' || weatherMain === 'Smoke' || weatherMain === 'Haze' || weatherMain === 'Dust' || weatherMain === 'Fog' || weatherMain === 'Sand' || weatherMain === 'Dust' || weatherMain === 'Ash' || weatherMain === 'Squall' || weatherMain === 'Tornado') {
        show.src = "./assets/hazy.png";
    } else if (weatherMain === 'Clear') {
        show.src = "./assets/sunpng.png"
    } else if (weatherMain === 'Clouds') {
        show.src = "./assets/cloudypng.png"
    }
}


function NumberToDay(number) {
    if (number === 0) {
        return 'SUN';
    } else if (number === 1) {
        return 'MON';
    } else if (number === 2) {
        return 'TUE';
    } else if (number === 3) {
        return 'WED';
    } else if (number === 4) {
        return 'THU';
    } else if (number === 5) {
        return 'FRI';
    } else if (number === 6) {
        return 'SAT';
    }
}
function NumberToDayInfo(number) {
    if (number === 0) {
        return 'SUNDAY';
    } else if (number === 1) {
        return 'MONDAY';
    } else if (number === 2) {
        return 'TUESDAY';
    } else if (number === 3) {
        return 'WEDNESDAY';
    } else if (number === 4) {
        return 'THURSDAY';
    } else if (number === 5) {
        return 'FRIDAY';
    } else if (number === 6) {
        return 'SATURDAY';
    }
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








// for (let i = 0; i < 8; i++) {
//     // console.log(data.list[i].main.temp_max);
//     let currentHigh = data.list[i].main.temp_max;

//     if (currentHigh >= highTemp || highTemp === undefined) {
//         highTemp = currentHigh;
//     }
//     if (currentHigh <= lowTemp || lowTemp === undefined) {
//         lowTemp = currentHigh;
//     }

// }

// // console.log(highTemp);
// // console.log(lowTemp);
// // console.log("this is the high");

// showDay1Low.innerText = Math.round(lowTemp) + "°F"
// showDay1High.innerText = Math.round(highTemp) + "°F"
// let day1status = data.list[0].weather[0].main; // this holds clouds for change icon

// for (let i = 8; i < 16; i++) {
//     // console.log(data.list[i].main.temp_max);
//     let currentHigh = data.list[i].main.temp_max;

//     if (currentHigh >= highTemp2 || highTemp2 === undefined) {
//         highTemp2 = currentHigh;
//     }
//     if (currentHigh <= lowTemp2 || lowTemp2 === undefined) {
//         lowTemp2 = currentHigh;
//     }

// }

// // console.log(highTemp2);
// // console.log(lowTemp2);
// // console.log("this is the high");

// showDay2Low.innerText = Math.round(lowTemp2) + "°F"
// showDay2High.innerText = Math.round(highTemp2) + "°F"
// let day2status = data.list[8].weather[0].main; // this holds clouds for change icon
// for (let i = 16; i < 24; i++) {
//     // console.log(data.list[i].main.temp_max);
//     let currentHigh = data.list[i].main.temp_max;

//     if (currentHigh >= highTemp3 || highTemp3 === undefined) {
//         highTemp3 = currentHigh;
//     }
//     if (currentHigh <= lowTemp3 || lowTemp3 === undefined) {
//         lowTemp3 = currentHigh;
//     }

// }

// // console.log(highTemp3);
// // console.log(lowTemp3);
// // console.log("this is the high");

// showDay3Low.innerText = Math.round(lowTemp3) + "°F"
// showDay3High.innerText = Math.round(highTemp3) + "°F"
// let day3status = data.list[16].weather[0].main; // this holds clouds for change icon

// for (let i = 16; i < 24; i++) {
//     // console.log(data.list[i].main.temp_max);
//     let currentHigh = data.list[i].main.temp_max;

//     if (currentHigh >= highTemp4 || highTemp4 === undefined) {
//         highTemp4 = currentHigh;
//     }
//     if (currentHigh <= lowTemp4 || lowTemp4 === undefined) {
//         lowTemp4 = currentHigh;
//     }

// }

// // console.log(highTemp4);
// // console.log(lowTemp4);
// // console.log("this is the high");

// showDay4Low.innerText = Math.round(lowTemp4) + "°F"
// showDay4High.innerText = Math.round(highTemp4) + "°F"
// let day4status = data.list[24].weather[0].main; // this holds clouds for change icon

// for (let i = 24; i < 32; i++) {
//     // console.log(data.list[i].main.temp_max);
//     let currentHigh = data.list[i].main.temp_max;

//     if (currentHigh >= highTemp5 || highTemp5 === undefined) {
//         highTemp5 = currentHigh;
//     }
//     if (currentHigh <= lowTemp5 || lowTemp5 === undefined) {
//         lowTemp5 = currentHigh;
//     }

// }

// // console.log(highTemp5);
// // console.log(lowTemp5);
// // console.log("this is the high");

// showDay5Low.innerText = Math.round(lowTemp5) + "°F"
// showDay5High.innerText = Math.round(highTemp5) + "°F"
// let day5status = data.list[32].weather[0].main; // this holds clouds for change icon

// let highTemp;
// let lowTemp;
// let highTemp2;
// let lowTemp2;
// let highTemp3;
// let lowTemp3;
// let highTemp4;
// let lowTemp4;
// let highTemp5;
// let lowTemp5;
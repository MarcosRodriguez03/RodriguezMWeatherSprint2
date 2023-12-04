
// "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + apiKey + "&units=imperial";

let apiKey = '';
let latitude = '37.961632';
let longitude = '-121.275604';
let units = '&units=imperial'
let cnt = '5';



let forecast0_High = "";
let forecast0_Low = "";
let forecast0_Description = "";





//5day forcast want high, low, day thur 12/10 icon 
async function FiveDayForecast() {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);


    const data = await promise.json();

    //main data
    // console.log(data.list[0]);


    //date and uni code for data
    console.log(data.list[0].dt_txt)
    console.log(data.list[0].dt)

    //high low
    console.log(data.list[0].main.temp_max);
    console.log(data.list[0].main.temp_min);

    //cloudy
    console.log(data.list[0].weather[0].main);
}



async function CurrentDay() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}${units}`);

    const data = await promise.json();

    console.log(data)
    console.log(data.main.temp)
    console.log(data.main.temp_max)
    console.log(data.main.temp_min)
    console.log(data.name)
    console.log(data.weather[0].main)

}






FiveDayForecast();
CurrentDay();

const apikey = "307014da1ebf14dc4240490a4ec11c22"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather1").style.display = "none";
    }else{
        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "clouds"){
        weather_icon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src = "mist.png";
    }

    document.querySelector(".weather1").style.display = "block";
    document.querySelector(".error").style.display = "none";


    }

    
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})





    










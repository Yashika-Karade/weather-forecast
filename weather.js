let key="4eb3703790b356562054106543b748b2";
let upi="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inputBox=document.querySelector(".search input");
let inputButton=document.querySelector(".search button");
let weatherImages=document.querySelector(".weatherImage");
async function checkWeather(city){
    let response=await fetch(upi+city+`&appid=${key}`);
    let data=await response.json();
    console.log(data);




let cityName=document.querySelector(".city");
cityName.innerText=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".winds").innerHTML=data.wind.speed+" km/h";
if(data.weather[0].main=="Clouds"){
    weatherImages.src="https://p7.hiclipart.com/preview/885/236/1020/weather-forecasting-cloud-cover-wind-snow-cloudy.jpg";
}
if(data.weather[0].main=="Clear"){
    weatherImages.src="https://w7.pngwing.com/pngs/159/217/png-transparent-weather-sun-shine-sunny-icon-thumbnail.png";
}
if(data.weather[0].main=="Rain"){
    weatherImages.src="https://i.pinimg.com/originals/78/97/7d/78977d761bbf1062cf46d570f424db60.png";
}
if(data.weather[0].main=="Mist"){
    weatherImages.src="https://w7.pngwing.com/pngs/244/421/png-transparent-weather-clouds-fog-foggy-weather-color-icon.png";
}
}

inputButton.addEventListener("click",()=>{
    checkWeather(inputBox.value);

})


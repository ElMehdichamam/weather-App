
const Temp=document.getElementById("cityTemp");
const Feel=document.getElementById("cityFeel");

const Name=document.getElementById("city");

const Humidity=document.getElementById("Humidity");
const Cloud=document.getElementById("Cloud");
const Pic=document.getElementById("Img");

async function fetchweather(cityName){
    const City = cityName
    try{
    const resp= await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fc2ad270fd0398b33d310059f99acce0&units=metric`
    );
    if (!resp.ok){
        throw new Error("City Not Found Or API error")
    };
    const data= await resp.json();

    console.log(data.weather[0].description)
    Cloud.textContent=data.weather[0].description
    Name.textContent=`City Name : ${data.name}`

    Temp.textContent=`Tempurature : ${data.main.temp}C`
    console.log(`Feels Like : ${data.main.feels_like}C`)
    // 
    Feel.textContent=`Feels Like : ${data.main.feels_like}C`
    console.log(`Humidity : ${data.main.humidity}`)
    // 
    Humidity.textContent=`Humidity : ${data.main.humidity}`;

    let weatherPic="";
    (data.main.temp <= 0)? weatherPic="snowflake.png":(data.main.temp > 0 && data.main.temp <= 15)? weatherPic = "light-rain.png":(data.main.temp > 15 && data.main.temp <= 25)? weatherPic = "cloudy.png": weatherPic = "sunny.png"
    Pic.src=`Images/${weatherPic}`
}
    
    catch(err){
        console.log(`Error Fetching weather : ${err}`)
    }
}

const Btn=document.getElementById("btn");
Btn.addEventListener("click",()=>{
    const cityName=document.getElementById("cityName").value;
    fetchweather(cityName)
});
    


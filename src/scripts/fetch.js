url = "https://api.open-meteo.com/v1/forecast?latitude=-30.03&longitude=-51.23&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timezone=America%2FSao_Paulo";


//MAINDAY
const degree =document.getElementById("mainDegree");
const maxMain = document.getElementById("maxMainDegree");
const minMain = document.getElementById("minMainDegree");
const mainIcon = document.getElementById("mainWeatherIcon");

//GADGETS
const humidity = document.getElementById("gagdet1");
const apparentTemperature = document.getElementById("gagdet2");
const windSpeed = document.getElementById("gagdet3");
const precipitation = document.getElementById("gagdet4");

//DAYCARD1
const date1 = document.getElementById("dateDay1");
const max1 = document.getElementById("maxDegreeDay1");
const min1 = document.getElementById("minDegreeDay1");
const rainDisplay1 = document.getElementById("precipitationDay1");
const rainChance1 = document.getElementById("percentDay1")

//DAYCARD2
const date2 = document.getElementById("dateDay2");
const max2 = document.getElementById("maxDegreeDay2");
const min2 = document.getElementById("minDegreeDay2");
const rainDisplay2 = document.getElementById("precipitationDay2");
const rainChance2 = document.getElementById("percentDay2")

//DAYCARD3
const date3 = document.getElementById("dateDay3");
const max3 = document.getElementById("maxDegreeDay3");
const min3 = document.getElementById("minDegreeDay3");
const rainDisplay3 = document.getElementById("precipitationDay3");
const rainChance3 = document.getElementById("percentDay3")

//DAYCARD4
const date4 = document.getElementById("dateDay4");
const max4 = document.getElementById("maxDegreeDay4");
const min4 = document.getElementById("minDegreeDay4");
const rainDisplay4 = document.getElementById("precipitationDay4");
const rainChance4 = document.getElementById("percentDay4")

fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        //mainDay
        degree.innerHTML = data.current_weather.temperature.toFixed(0) + "°";
        maxMain.innerHTML = data.daily.temperature_2m_max([]);
        minMain.innerHTML = data.daily.temperature_2m_min([]);
        mainIcon.innerHTML = data.daily.ICON;
        //gadget
        humidity.innerHTML = data.hourly.relative_humidity[];
        apparentTemperature.innerHTML = data.hourly.apparent_temperature[];
        windSpeed.innerHTML = data.daily.windspeed[]
        precipitation.innerHTML = data.daily.precipitation_sum[]
        //day1
        date1.innerHTML = data.daily
        max1.innerHTML = data.daily
        min1.innerHTML = data.daily
        rainDisplay1.innerHTML = data.daily
        rainChance1.innerHTML = data.daily
        //day2
        date2.innerHTML = data.daily
        max2.innerHTML = data.daily
        min2.innerHTML = data.daily
        rainDisplay3.innerHTML = data.daily
        rainChance2.innerHTML = data.daily
        //day3
        date3.innerHTML = data.daily
        max3.innerHTML = data.daily
        min3.innerHTML = data.daily
        rainDisplay3.innerHTML = data.daily
        rainChance3.innerHTML = data.daily
        //day4
        date4.innerHTML = data.daily
        max4.innerHTML = data.daily
        min4.innerHTML = data.daily
        rainDisplay4.innerHTML = data.daily
        rainChance4 = data.daily
    })
    .catch(error=>console.log(error))
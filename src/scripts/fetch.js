url = "https://api.open-meteo.com/v1/forecast?latitude=-30.03&longitude=-51.23&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo";


//MAINDAY
const degree =document.getElementById("mainDegree");
const maxMain = document.getElementById("maxMainDegree");
const minMain = document.getElementById("minMainDegree");
const mainIcon = document.getElementById("mainWeatherIcon");

//GADGETS
const humidity = document.getElementById("gText1");
const apparentTemperature = document.getElementById("gText2");
const windSpeed = document.getElementById("gText3");
const precipitation = document.getElementById("gText4");

//DAYCARD1
const date1 = document.getElementById("dateDay1");
const max1 = document.getElementById("maxDegreeDay1");
const min1 = document.getElementById("minDegreeDay1");
const rainDisplay1 = document.getElementById("precipitationDay1");
const rainChance1 = document.getElementById("percentDay1");
const iconDay1 = document.getElementById("weatherIconDay1");

//DAYCARD2
const date2 = document.getElementById("dateDay2");
const max2 = document.getElementById("maxDegreeDay2");
const min2 = document.getElementById("minDegreeDay2");
const rainDisplay2 = document.getElementById("precipitationDay2");
const rainChance2 = document.getElementById("percentDay2")
const iconDay2 = document.getElementById("weatherIconDay2");

//DAYCARD3
const date3 = document.getElementById("dateDay3");
const max3 = document.getElementById("maxDegreeDay3");
const min3 = document.getElementById("minDegreeDay3");
const rainDisplay3 = document.getElementById("precipitationDay3");
const rainChance3 = document.getElementById("percentDay3")
const iconDay3 = document.getElementById("weatherIconDay3");

//DAYCARD4
const date4 = document.getElementById("dateDay4");
const max4 = document.getElementById("maxDegreeDay4");
const min4 = document.getElementById("minDegreeDay4");
const rainDisplay4 = document.getElementById("precipitationDay4");
const rainChance4 = document.getElementById("percentDay4")
const iconDay4 = document.getElementById("weatherIconDay4");

fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        //mudança dinâmica do background
        changeBackground(data.current_weather.weathercode);
        //mainDay
        degree.innerHTML = data.current_weather.temperature.toFixed(0) + "°";
        maxMain.innerHTML = parseInt(data.daily.temperature_2m_max[0], 10) + "°";
        minMain.innerHTML = parseInt(data.daily.temperature_2m_min[0], 10) + "°";
        mainIcon.src = changeIcon(data.current_weather.weathercode, data.current_weather.is_day);

        //gadget
        const hourlyIndex = timeToIndex(data.current_weather.time);//horario atual em formato de index
        humidity.innerHTML = data.hourly.relativehumidity_2m[hourlyIndex];
        apparentTemperature.innerHTML = data.hourly.apparent_temperature[hourlyIndex];
        windSpeed.innerHTML = data.current_weather.windspeed;
        precipitation.innerHTML = data.daily.precipitation_sum[0];
        
        //day1
        max1.innerHTML = parseInt(data.daily.temperature_2m_max[1], 10) + "°";
        min1.innerHTML = parseInt(data.daily.temperature_2m_min[1], 10) + "°";
        //rainDisplay1.innerHTML = data.daily.
        rainChance1.innerHTML = data.daily.precipitation_probability_max[1] +"%";
        iconDay1.src = changeIcon(data.daily.weathercode[1], 1);

        //day2
        max2.innerHTML = parseInt(data.daily.temperature_2m_max[2], 10) + "°";
        min2.innerHTML = parseInt(data.daily.temperature_2m_min[2], 10) + "°";
        //rainDisplay3.innerHTML = data.daily
        rainChance2.innerHTML = data.daily.precipitation_probability_max[2] +"%";
        iconDay2.src = changeIcon(data.daily.weathercode[2], 1);

        //day3
        max3.innerHTML = parseInt(data.daily.temperature_2m_max[3], 10) + "°";
        min3.innerHTML = parseInt(data.daily.temperature_2m_min[3], 10) + "°";
        //rainDisplay3.innerHTML = data.daily.
        rainChance3.innerHTML = data.daily.precipitation_probability_max[3] +"%";
        iconDay3.src = changeIcon(data.daily.weathercode[3], 1);

        //day4
        max4.innerHTML = parseInt(data.daily.temperature_2m_max[4], 10) + "°";
        min4.innerHTML = parseInt(data.daily.temperature_2m_min[4], 10) + "°";
        //rainDisplay4.innerHTML = data.daily.
        rainChance4.innerHTML = data.daily.precipitation_probability_max[4] +"%";
        iconDay4.src = changeIcon(data.daily.weathercode[4], 1);
    })
    .catch(error=>console.log(error))

    
url = "https://api.open-meteo.com/v1/forecast?latitude=-30.03&longitude=-51.23&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timezone=America%2FSao_Paulo";


fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(error=>console.log(error))
let city = 'Viamão'
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=0fbab384915d0e0e753f840b78cca4aa`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error=>console.log(error))
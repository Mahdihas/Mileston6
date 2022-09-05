const API_KEY = '54bb782024e10e4a8b43a6521298925d';

const loadTempereture = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));

}

const displayTemp = (data) => {
    console.log(data)
    const box = document.getElementById('temp');
    box.innerText = `${data.main.temp}`


    
}
loadTempereture('dhaka')
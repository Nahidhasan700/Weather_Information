const API_KEY = `8fcfab3c6a2ceae132e4a803de690b69`;
const temperatureSearch=()=>{
      const city = document.getElementById('name_city').value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


      fetch(url)
      .then(res=> res.json())
      .then(data => temperatureDisplay(data));
}

const setInnerText = (id, text) => {
      document.getElementById(id).innerText = text;
  }
const temperatureDisplay = temperature => {
      setInnerText('city',temperature.name);
      setInnerText('temperature', temperature.main.temp);
      setInnerText('condition',temperature.weather[0].main)
      const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
      const imgIcon = document.getElementById('weather-icon');
      imgIcon.setAttribute('src', url);
  }
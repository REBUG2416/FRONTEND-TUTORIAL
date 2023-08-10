var city = document.getElementById("city");
var btn = document.getElementById("btn");
var lin = document.getElementById("link");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var rain = document.getElementById("rain");

btn.addEventListener('click', function(){
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city.value +'&unit=metric&appid=35d0726327326b4ce21a95ad0f8f7010')
   .then(response => response.json())
   .then(data => {
      tempV= data['main']['temp'];
      windV= data['wind']['speed'];
      rainV= data ['rain']['1h'];

      temp.innerHTML = tempV+"c";
      wind.innerHTML = windV+"m/s";
      rain.innerHTML = rainV+"h";


   })

})
var city = document.getElementById("city");
var btn = document.getElementById("btn");
var lin = document.getElementById("link");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var rain = document.getElementById("rain");
var Name = document.getElementById("Name");

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&units=metric&appid=35d0726327326b4ce21a95ad0f8f7010"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data["main"] !== undefined) {
        if (data["main"]["temp"] !== undefined)
          var tempV = data["main"]["temp"] + `<sup>o</sup>` + "c";
      } else tempV = "Unavailable";

      if (data["wind"] !== undefined) {
        if (data["wind"]["speed"] !== undefined)
          var windV = data["wind"]["speed"] + "m/s";
      } else windV = "Unavailable";

      if (data["rain"] !== undefined) {
        if (data["rain"]["1h"] !== undefined)
          var rainV = data["rain"]["1h"] + "h";
      } else rainV = "Unavailable";

      temp.innerHTML = tempV;
      wind.innerHTML = windV;
      rain.innerHTML = rainV;
      Name.innerHTML = city.value;
      
    });
});

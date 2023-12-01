let temp = document.getElementById("temp");
let city = document.getElementById("city");
let btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=35d0726327326b4ce21a95ad0f8f7010')
  .then(response => response.json())
  .then(data =>{

    
    console.log(data);
    
    tempV = data.main.temp;
  temp.innerHTML = tempV;

  })

})
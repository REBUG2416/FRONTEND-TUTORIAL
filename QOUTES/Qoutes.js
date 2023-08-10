var input = document.getElementById("input")
var submit = document.getElementById("submit")
var display = document.getElementById("display")
var reset = document.getElementById("reset")
var list = document.getElementById("list")
let quotes = []
let i=0;

submit.addEventListener('click', function(){
   if(input.value!=""){
   quotes[0+i] = input.value;
   i++;
   input.value="";
   alert("YOUR QOUTE HAS BEEN ADDED")
}
 else{
   alert("PLEASE INPUT A QOUTE")
 }

})

display.addEventListener('click', function(){
  quotes.forEach(el =>{
     list.innerHTML +=`<span>${el}</span><br>`;
    });
})

reset.addEventListener('click', function(){
    quotes=[];
    list.innerHTML ="";
})




    
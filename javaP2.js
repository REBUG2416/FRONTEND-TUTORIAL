const Name= document.getElementById("name")
const email= document.getElementById("email")
const form = document.getElementById("form")
const error = document.getElementById("error")
const submit = document.getElementById("submit")


submit.addEventListener('click', function(){
    error.innerHTML = Name.value +  "\nEmail:"+ email.value;
})
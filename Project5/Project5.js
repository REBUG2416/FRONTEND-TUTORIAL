const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger2");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburger2.classList.toggle("active");
    navMenu.classList.toggle("active");
})

hamburger2.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburger2.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-Link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger2.classList.remove("active");
    navMenu.classList.remove("active");
}))
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}
window.addEventListener("scroll", function(){

let navbar = document.querySelector("nav");

if(window.scrollY > 50){
navbar.style.background = "#000";
}
else{
navbar.style.background = "#222";
}

});
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function(){

hiddenElements.forEach(function(el){

const position = el.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
el.classList.add("show");
}

});

});
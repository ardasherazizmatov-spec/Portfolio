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

});window.addEventListener("scroll", function() {
  let skills = document.querySelector(".skills");
  let position = skills.getBoundingClientRect().top;
  let screen = window.innerHeight;

  if (position < screen) {
    document.querySelectorAll(".fill").forEach(el => {
      el.style.width = el.classList.contains("html") ? "85%" :
                       el.classList.contains("css") ? "70%" :
                       el.classList.contains("js") ? "60%" :
                       el.classList.contains("python") ? "55%" : "50%";
    });
  }
});
<script src="script.js"></script>
</body>
</html>
const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  hiddenElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
});
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
const text = "Hi, I'm Ardasher";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}

typingEffect();
window.addEventListener("scroll", function () {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
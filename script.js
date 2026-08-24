const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});


const links = navMenu.querySelectorAll("a");

links.forEach(function (link) {

  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });

});


document.getElementById("year").textContent =
  new Date().getFullYear();

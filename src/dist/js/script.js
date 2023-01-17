const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const buttonHidden = document.querySelector(".ahref");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  windowPosition = window.scrollY > 300;
  buttonHidden.classList.toggle("ibtnn", windowPosition);

  hamburger.classList.remove("is-active");

  menu.classList.remove("menu-active");
});

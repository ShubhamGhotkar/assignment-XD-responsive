const responsiveBtn = document.getElementById("responsive-btn");
const navBar = document.getElementById("res-nav-bar");

responsiveBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});

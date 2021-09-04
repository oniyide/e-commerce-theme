var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')


backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
})
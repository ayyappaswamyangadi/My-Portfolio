// transparent navbar

var nav = document.querySelector("nav");
var halfPart = document.querySelector(".halfPart");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("sticky");
    halfPart.style.color = "yellow";
  } else {
    nav.classList.remove("sticky");
    halfPart.style.color = "purple";
  }
});

// go to top
function checkRefresh() {
  window.location.hash = "#home";
  window.scroll(0, 0);
}

var goToTopButton = document.getElementById("top");

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
};

// light and dark mode

var mode = document.getElementById("mode");

var modes = document.querySelector(".material-icons");

mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modes.innerHTML = "light_mode";
    modes.style.color = "white";
    modes.setAttribute("title", "switch to light mode");
  } else {
    modes.innerText = "dark_mode";
    modes.style.color = "grey";
    modes.setAttribute("title", "switch to dark mode");
  }
});

// preloader

var loader = document.querySelector(".main_div");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// onScroll style to navbar

var homeSectionHeight = document.querySelector(".homeSection").clientHeight;
var aboutSectionHeight = document.querySelector(".aboutSection").clientHeight;
var mySkillsSectionHeight =
  document.querySelector(".mySkillsSection").clientHeight;
var projectsSectionHeight =
  document.querySelector(".projectsSection").clientHeight;
var contactSectionHeight =
  document.querySelector(".contactSection").clientHeight;

window.addEventListener("scroll", () => {
  let scrollValue = this.scrollY;

  if (scrollValue <= homeSectionHeight / 1.5) {
    history.pushState({}, "", "/#home");
    document.querySelector(".home").classList.add("active");
  } else {
    document.querySelector(".home").classList.remove("active");
  }

  if (
    scrollValue > homeSectionHeight / 1.5 &&
    scrollValue <= homeSectionHeight + aboutSectionHeight / 2
  ) {
    history.pushState({}, "", "/#about");
    document.querySelector(".about").classList.add("active");
  } else {
    document.querySelector(".about").classList.remove("active");
  }

  if (
    scrollValue > homeSectionHeight + aboutSectionHeight / 2 &&
    scrollValue <=
      homeSectionHeight + aboutSectionHeight + mySkillsSectionHeight / 3.6
  ) {
    history.pushState({}, "", "/#mySkills");
    document.querySelector(".mySkills").classList.add("active");
  } else {
    document.querySelector(".mySkills").classList.remove("active");
  }

  if (
    scrollValue >
      homeSectionHeight + aboutSectionHeight + mySkillsSectionHeight / 3.6 &&
    scrollValue <=
      homeSectionHeight +
        aboutSectionHeight +
        mySkillsSectionHeight +
        (projectsSectionHeight * 20) / 100
  ) {
    history.pushState({}, "", "/#projects");
    document.querySelector(".projects").classList.add("active");
  } else {
    document.querySelector(".projects").classList.remove("active");
  }

  if (
    scrollValue >
    homeSectionHeight +
      aboutSectionHeight +
      mySkillsSectionHeight +
      (projectsSectionHeight * 20) / 100
  ) {
    history.pushState({}, "", "/#contact");
    document.querySelector(".contact").classList.add("active");
  } else {
    document.querySelector(".contact").classList.remove("active");
  }
});

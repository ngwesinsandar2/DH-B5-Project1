$(".portfolio").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

var waypoint = new Waypoint({
  element: document.getElementById("services"),
  handler: function (direction) {
    if (direction === "down") {
      document
        .querySelector(".navbar")
        .classList.add("nav-fixed", "animate__fadeInDown");
    } else {
      document
        .querySelector(".navbar")
        .classList.remove("nav-fixed", "animate__fadeInDown");
    }
  },
  offset: "5%",
});

var waypoint = new Waypoint({
  element: document.getElementById("testimonial"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".up").classList.remove("d-none");
      document.querySelector(".up").classList.add("animate__fadeInDown");
    } else {
      document.querySelector(".up").classList.add("d-none");
      document.querySelector(".up").classList.remove("animate__fadeInDown");
    }
  },
  offset: "5%",
});

// Theme
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
let toChangeDark = document.querySelectorAll(".to-change-dark");
let card = document.querySelectorAll(".card");
let p = document.querySelectorAll("p");
let navLink = document.querySelectorAll(".nav-link");
let checkIcon = document.querySelectorAll(".check-icon");
const footer = document.querySelector("footer");

const changeToDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");

  sunIcon.classList.add("position-absolute", "d-none");
  moonIcon.classList.remove("position-absolute", "d-none");

  body.classList.add("bg-dark");
  body.classList.add("dark-color");
  navbar.classList.add("bg-dark-pale");
  footer.classList.add("border-top-pale");

  toChangeDark.forEach((e) => {
    e.classList.remove("bg-pale");
    e.classList.add("bg-dark");
  });
  card.forEach((e) => {
    e.classList.add("bg-dark");
    e.classList.remove("border-0");
    e.classList.add("border-pale");
  });
  p.forEach((e) => {
    e.classList.remove("text-muted");
    e.classList.add("dark-color-pale");
  });
  navLink.forEach((e) => {
    e.classList.remove("text-dark");
    e.classList.add("dark-color");
  });
  checkIcon.forEach((e) => {
    e.classList.add("fill-white");
  });
};

const changeToLightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");

  sunIcon.classList.remove("position-absolute", "d-none");
  moonIcon.classList.add("position-absolute", "d-none");

  body.classList.remove("bg-dark");
  body.classList.remove("dark-color");
  navbar.classList.remove("bg-dark-pale");
  footer.classList.remove("border-top-pale");

  toChangeDark.forEach((e) => {
    e.classList.add("bg-pale");
    e.classList.remove("bg-dark");
  });
  card.forEach((e) => {
    e.classList.remove("bg-dark");
    e.classList.add("border-0");
    e.classList.remove("border-pale");
  });
  p.forEach((e) => {
    e.classList.add("text-muted");
    e.classList.remove("dark-color-pale");
  });
  navLink.forEach((e) => {
    e.classList.remove("dark-color");
    e.classList.add("text-dark");
  });
  checkIcon.forEach((e) => {
    e.classList.remove("fill-white");
  });
};

sunIcon.addEventListener("click", () => {
  changeToDarkMode();
});

moonIcon.addEventListener("click", () => {
  changeToLightMode();
});

let theme = localStorage.getItem("data-theme");
if (theme === "dark") {
  changeToDarkMode();
} else {
  changeToLightMode();
}

// Scrollreveal
ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  reset: true,
  duration: 1000,
}).reveal('.srAni', {
  interval: 200,
  scale: 0.8,
});

// Loading
window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none"
})

// Navbar
let navBarPh = document.getElementById("navbarSupportedContent");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("show-ani");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navBarPh.classList.remove("show");
    menuIcon.classList.remove("show-ani");
  })
}
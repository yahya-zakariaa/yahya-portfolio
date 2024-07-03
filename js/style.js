const section = document.querySelector("#skills");
const spans = document.querySelectorAll(".progress-set");
const tecCard = document.querySelector(".tec-card");
const listLine = document.querySelector(".list-line");
const listItem = document.querySelectorAll(".know-item");
const loadingPage = document.querySelector(".loading-page");
const body = document.querySelector("body");

window.addEventListener("load", function () {
  body.style.height = "auto";
  body.style.overflow = "auto";
  body.style.overflowX = "hidden";
  loadingPage.classList.add("d-none");
});

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 0.2 });

const scrollRevealConfig = {
  reset: true,
  delay: 200,
  duration: 2000,
  distance: "100px",
};

const revealElements = [
  { selector: ".img-bg", options: { delay: 200, origin: "left" } },
  { selector: ".main-page-conten", options: { delay: 200, origin: "right" } },
  { selector: ".home-icon", options: { delay: 270, origin: "top" } },
  {
    selector: ".navbar-brand",
    options: { delay: 150, origin: "left", reset: false },
  },
];

revealElements.forEach(({ selector, options }) => {
  ScrollReveal(scrollRevealConfig).reveal(selector, options);
});

VanillaTilt.init(document.querySelectorAll(".img-bg"), {
  max: 10,
  speed: 200,
  glare: true,
  "max-glare": 0.5,
});

let tl, tl2;

if (window.innerWidth > 992) {
  ScrollReveal().reveal(".nav-link", {
    delay: 100,
    origin: "top",
    reset: false,
  });

  tl = gsap.timeline();
  tl2 = gsap.timeline({ duration: 3 });

  tl.to(".project1", { xPercent: 0 })
    .to(".project2", { yPercent: -122.5 })
    .to(".project3", { yPercent: -245 });

  tl2
    .from(".project4", { xPercent: -150, yPercent: 200, opacity: 0 })
    .from(".project5", { yPercent: 207, opacity: 0 })
    .from(".project6", { xPercent: 154, yPercent: 200, opacity: 0 });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#projects",
    start: "70px top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });

  ScrollTrigger.create({
    animation: tl2,
    trigger: "#project-sec2",
    start: "100px bottom",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });
} else {
  ScrollReveal().reveal(".navbar-toggler", {
    delay: 100,
    origin: "right",
    reset: false,
  });

  tl = gsap.timeline();
  tl2 = gsap.timeline({ duration: 2 });

  tl.to(".project1", { xPercent: 0 })
    .to(".project2", { yPercent: -150.5 })
    .to(".project3", { yPercent: -301 });

  tl2
    .from(".project4", { xPercent: -150, yPercent: 200, opacity: 0 })
    .from(".project5", { yPercent: 207, opacity: 0 })
    .from(".project6", { xPercent: 154, yPercent: 200, opacity: 0 });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#projects",
    start: "20px top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });

  ScrollTrigger.create({
    animation: tl2,
    trigger: "#project-sec2",
    start: "top bottom",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });
}

spans.forEach(function (e) {
  e.innerText = `${e.getAttribute("to")}%`;
});

window.addEventListener("scroll", function () {
  let Scroll;

  if (window.innerWidth > 992) {
    Scroll = window.scrollY + 500;

    if (Scroll < section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `0%`;
      });
      tecCard.style.cssText = "transform: translateX(50%); opacity: 0;";
      listItem.forEach(function (e) {
        e.style.cssText =
          "transform: translateX(-100%); opacity: 0; transition: all 0s 0s;";
      });
      listLine.style.cssText = "height: 0; transition: all 0s 0s;";
    } else if (Scroll >= section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `${e.getAttribute("to")}%`;
      });

      tecCard.style.cssText = "transform: translateX(0%); opacity: 1;";

      listItem.forEach(function (e) {
        e.style.cssText = "transform: translateX(0%); opacity: 1;";
      });
      listLine.style.cssText =
        "height: calc(100% - 5px); transition: all 2s 0.5s;";
    }
  } else if (window.innerWidth <= 992) {
    Scroll = window.scrollY + 400;

    if (Scroll < section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `0%`;
      });
      tecCard.style.cssText = "transform: translateX(50%); opacity: 0;";
    } else if (Scroll >= section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `${e.getAttribute("to")}%`;
      });

      tecCard.style.cssText = "transform: translateX(0%); opacity: 1;";
      if (Scroll - 800 >= section.offsetTop) {
        listItem.forEach(function (e) {
          e.style.cssText = "transform: translateX(0%); opacity: 1;";
        });

        listLine.style.cssText =
          "height: calc(100% - 5px); transition: all 2s 0.5s;";
      } else if (Scroll - 750 <= section.offsetTop) {
        listItem.forEach(function (e) {
          e.style.cssText =
            "transform: translateX(-100%); opacity: 0; transition: all 0s 0s;";
        });
        listLine.style.cssText = "height: 0; transition: all 0s 0s;";
      }
    }
  }
});

import "./style.css";

new Swiper(".swiper-packages", {
  loop: true,
  centeredSlides: true,

  slidesPerView: "auto",
  //   spaceBetween: 20,

  //   width: 1000,
});

new Swiper(".swiper-testimonial", {
  loop: true,
  centeredSlides: true,

  slidesPerView: "auto",
  //   spaceBetween: 40,

  //   width: 1000,
});

const modals = document.querySelectorAll("a[href^='#modal']");
modals.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("modal").classList.toggle("flex");
  });
});

const modalsClose = document.querySelectorAll("a[href^='#close-modal']");
modalsClose.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("modal").classList.toggle("flex");
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".txt-hero h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".txt-hero h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".itens-container .btn-hero", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".flex-cards div", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

import './style.css';

function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) result += mod;
  return result;
}

function setup(carousel) {
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');

  const slides_container = carousel.querySelector('[data-slides]');
  let numSlides = slides_container.children.length;

  next.addEventListener('click', handleNext);
  prev.addEventListener('click', handlePrev);

  let currentSlide = 0;

  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrev() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    slides_container.style.setProperty('--current-slide', currentSlide);
  }
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setup);


const navbar = document.querySelector('nav');

document.addEventListener('scroll', (e) => {
  
  if (window.scrollY > 110) {
    navbar.classList.add('down');

  }
  else {
    navbar.classList.remove('down');
  }

})



const outerUl = document.querySelector('.outerul');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', (e) => {

  if (outerUl.classList.contains('openlinks')) {
    outerUl.classList.remove('openlinks');
    hamburger.style.transform = ' rotate(0deg)';

  } else {
    outerUl.classList.add('openlinks');
    hamburger.style.transform = ' rotate(90deg)';

  }
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //  centeredSlides: true,
  breakpoints: {
   1000: {
      slidesPerView: 5,
    },
    500: {
      slidesPerView: 2,
    }
  }

});

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 200, // Delay animation until the element is 200px from the viewport
  delay: 100   // Delay animation by 100ms
});

// Typing Animation
const titles = ["Jacob Chol", "Graphic Designer", "Web Designer", "Computer Technician"];
let typedText = document.querySelector(".typed-text");
let index = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 150;

function typeLoop() {
  let currentTitle = titles[index];

  if (!isDeleting) {
    typedText.textContent += currentTitle.charAt(charIndex);
    charIndex++;
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typedText.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % titles.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? 80 : speed);
}

document.addEventListener("DOMContentLoaded", typeLoop);

// Initialize Swiper for Portfolio
const portfolioSwiper = new Swiper('.portfolio-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Target element not found for', this.getAttribute('href'));
    }
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

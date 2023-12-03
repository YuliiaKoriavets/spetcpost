const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
const arrows = document.querySelectorAll('.arrow');

let currentIndex = 0;

function updateSlider() {
  const transformValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + transformValue + ')';
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function moveToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function nextSlide() {
  if (currentIndex < dots.length - 1) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => moveToSlide(index));
});

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('left')) {
      prevSlide();
    } else {
      nextSlide();
    }
  });
});

updateSlider();

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i <= index);
    });
  });
});

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('hover', i <= index);
    });
  });
  star.addEventListener('mouseout', () => {
    stars.forEach((s) => s.classList.remove('hover'));
  });
});
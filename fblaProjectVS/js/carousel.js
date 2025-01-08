const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; // Loop back to the first slide
  }
  const amountToMove = cards[currentIndex].offsetWidth;
  track.style.transform = `translateX(-${amountToMove * currentIndex}px)`;
});

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1; // Loop back to the last slide
  }
  const amountToMove = cards[currentIndex].offsetWidth;
  track.style.transform = `translateX(-${amountToMove * currentIndex}px)`;
});
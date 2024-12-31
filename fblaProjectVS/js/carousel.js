document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cards = carousel.querySelectorAll('.event-card');
    let currentIndex = 0;

    // Function to show the current card based on index
    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    // Function to show the next card
    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length; // Loop back to start
        showCard(currentIndex);
    }

    // Function to show the previous card
    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop back to end
        showCard(currentIndex);
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', prevCard);
    nextButton.addEventListener('click', nextCard);

    // Show the first card initially
    showCard(currentIndex);
});
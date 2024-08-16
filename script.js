const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
    
    slides.forEach(slide => slide.classList.remove('active'));

    // Calculate next slide index (looping)
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }

    // Apply active class to current slide
    slides[currentSlide].classList.add('active');

    // Update slider position based on current slide
    slider.style.transform = translateX(-${currentSlide * 100}%);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto slide (optional)
let autoSlideInterval = setInterval(function() {
    showSlide(currentSlide + 1);
}, 3000); // Change interval (ms) for auto slide speed

// Stop auto slide on hover (optional)
slider.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseout', () => autoSlideInterval = setInterval(function() {
    showSlide(currentSlide + 1);
}, 3000));
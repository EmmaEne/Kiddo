document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const intervalTime = 3000; // 10 seconds delay

    function showNextSlide() {
        currentIndex++;

        // Stop sliding when the last slide is reached
        if (currentIndex >= totalSlides) {
            clearInterval(slideInterval); // Stop the interval
            return;
        }

        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const slideInterval = setInterval(showNextSlide, intervalTime);
});


const loadButton = document.getElementById('loadButton');
const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');

loadButton.addEventListener('click', function (event) {
    // Prevent the default action (immediate navigation)
    event.preventDefault();

    // Show the progress container
    progressContainer.classList.remove('hidden');
    progressContainer.style.display = 'block';

    // Simulate loading by filling the progress bar
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10; // Increase progress
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(loadingInterval);

            // Keep the progress bar visible for a second after it completes
            setTimeout(() => {
                // Now navigate to the next page
                window.location.href = loadButton.getAttribute('href');
            }, 1000); // 1-second delay
        }
    }, 300); // Update progress every 300ms
});
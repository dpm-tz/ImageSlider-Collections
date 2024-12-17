let currentSlide = 1;
const totalSlides = 4; // Number of cards

// Function to change the checked radio button to simulate an auto image change
const autoChangeImage = () => {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1; // Restart from the first card
    }
    
    // Change the checked radio button to simulate the auto change
    document.getElementById(`c${currentSlide}`).checked = true;
};

// Change image every 3 seconds
setInterval(autoChangeImage, 3000); // Change every 3000ms (3 seconds)

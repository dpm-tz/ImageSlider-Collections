<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Image Carousel</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .carousel-container {
      width: 90%;
      max-width: 1000px;
      height: 500px;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      background: #333;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .carousel {
      display: flex;
      transition: transform 1s ease-in-out;
      height: 100%;
    }

    .carousel .slide {
      min-width: 100%;
      height: 100%;
      position: relative;
    }

    .carousel img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }

    /* Navigation Arrows */
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 15px;
      cursor: pointer;
      border: none;
      border-radius: 50%;
      transition: background-color 0.3s;
    }

    .prev {
      left: 15px;
    }

    .next {
      right: 15px;
    }

    .arrow:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    /* Dot Navigation */
    .dots {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .dot {
      width: 15px;
      height: 15px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .dot.active {
      background-color: rgba(255, 255, 255, 1);
    }

    .dot:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }

    /* Caption Style */
    .caption {
      position: absolute;
      bottom: 30px;
      left: 15px;
      color: white;
      font-size: 24px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      .carousel-container {
        height: 400px;
      }

      .caption {
        font-size: 20px;
      }

      .arrow {
        font-size: 1.5rem;
        padding: 10px;
      }

      .dot {
        width: 12px;
        height: 12px;
      }
    }

    @media (max-width: 480px) {
      .carousel-container {
        height: 300px;
      }

      .caption {
        font-size: 16px;
      }

      .arrow {
        font-size: 1.2rem;
        padding: 8px;
      }

      .dot {
        width: 10px;
        height: 10px;
      }
    }
  </style>
</head>
<body>

  <div class="carousel-container">
    <div class="carousel">
      <div class="slide">
        <img src="images/image1.jpg" alt="Image 1">
        <div class="caption">Nature's Beauty</div>
      </div>
      <div class="slide">
        <img src="images/image2.jpg" alt="Image 2">
        <div class="caption">Stunning Wildlife</div>
      </div>
      <div class="slide">
        <img src="images/image3.jpg" alt="Image 3">
        <div class="caption">Exploring the Outdoors</div>
      </div>
      <div class="slide">
        <img src="images/image4.jpg" alt="Image 4">
        <div class="caption">Wonders of the Wild</div>
      </div>
      <div class="slide">
        <img src="images/image5.jpg" alt="Image 5">
        <div class="caption">Beautiful Landscapes</div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button class="arrow prev" onclick="moveSlide(-1)">&#10094;</button>
    <button class="arrow next" onclick="moveSlide(1)">&#10095;</button>

    <!-- Dot Navigation -->
    <div class="dots">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
      <span class="dot" onclick="currentSlide(4)"></span>
      <span class="dot" onclick="currentSlide(5)"></span>
    </div>
  </div>

  <script>
    let currentIndex = 0;

    const slides = document.querySelectorAll(".carousel .slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      if (index >= slides.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex = index;
      }

      // Hide all images
      slides.forEach((slide) => slide.style.display = 'none');
      
      // Show the current image
      slides[currentIndex].style.display = 'block';

      // Update dots
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    function moveSlide(direction) {
      showSlide(currentIndex + direction);
    }

    function currentSlide(index) {
      showSlide(index - 1);
    }

    // Auto-slide every 5 seconds
    setInterval(() => moveSlide(1), 5000);

    showSlide(currentIndex); // Initial slide
  </script>

</body>
</html>

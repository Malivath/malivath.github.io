    // Get all slider items
    const sliderItems = document.querySelectorAll(".grid-item");
    // Loop through each slider item
    sliderItems.forEach(function (sliderItem) {
      // Get all images and buttons for current slider item
      const images = sliderItem.querySelectorAll(".slider-image");
      const prevBtn = sliderItem.querySelector(".prev-btn");
      const nextBtn = sliderItem.querySelector(".next-btn");

      // Set initial index to 0
      let currentImageIndex = 0;

      // Show the first image in the slider
      images[currentImageIndex].style.display = "block";

      // Add event listener to previous button
      prevBtn.addEventListener("click", function () {
        // Hide current image
        images[currentImageIndex].style.display = "none";

        // Decrement index, or go to last image if index is 0
        currentImageIndex =
          currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

        // Show new image
        images[currentImageIndex].style.display = "block";
      });

      // Add event listener to next button
      nextBtn.addEventListener("click", function () {
        // Hide current image
        images[currentImageIndex].style.display = "none";

        // Increment index, or go to first image if index is last
        currentImageIndex =
          currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

        // Show new image
        images[currentImageIndex].style.display = "block";
      });

      // Add event listener to arrow keys
      document.addEventListener("keydown", function (event) {
        if (sliderItem.contains(event.target)) {
          if (event.keyCode === 37) {
            // left arrow
            // Hide current image
            images[currentImageIndex].style.display = "none";

            // Decrement index, or go to last image if index is 0
            currentImageIndex =
              currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1;

            // Show new image
            images[currentImageIndex].style.display = "block";
          } else if (event.keyCode === 39) {
            // right arrow
            // Hide current image
            images[currentImageIndex].style.display = "none";

            // Increment index, or go to first image if index is last
            currentImageIndex =
              currentImageIndex === images.length - 1
                ? 0
                : currentImageIndex + 1;

            // Show new image
            images[currentImageIndex].style.display = "block";
          }
        }
      });
    });
    
    var sketch = function(p) {
    p.setup = function() {
        p.createCanvas(400, 200).parent('p5Canvas');
    };
    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.ellipse(50, 50, 50, 50);
    };
};

document.getElementById("priceRange").addEventListener("input", function(e) {
  const value = e.target.value;
  document.getElementById("priceValue").textContent = `0 - ${value}`;
});
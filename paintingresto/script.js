let imageIndex = 1;
let images = [];

function preloadImages() {
    // Create a hidden div
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.display = 'none';
    document.body.appendChild(hiddenDiv);

    for (let i = 1; i <= 4; i++) {
        images[i] = new Image();
        images[i].src = `public/${i}.jpg`;

        // Add the image to the hidden div
        hiddenDiv.appendChild(images[i]);
    }
}

function changeBackgroundImage() {
    // Get the body element
    const body = document.querySelector('body');

    // Set the background image
    body.style.backgroundImage = `url('${images[imageIndex].src}')`;

    // Increment the image index
    imageIndex++;

    // If the image index is greater than 4, reset it to 1
    if (imageIndex > 4) {
        imageIndex = 1;
    }
}

// Preload the images
preloadImages();

// Call the function every 5 seconds (15000 milliseconds)
setInterval(changeBackgroundImage, 15000);

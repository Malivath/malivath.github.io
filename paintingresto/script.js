let imageIndex = 1;

function changeBackgroundImage() {
    // Get the body element
    const body = document.querySelector('body');

    // Set the background image
    body.style.backgroundImage = `url('public/${imageIndex}.jpg')`;

    // Increment the image index
    imageIndex++;

    // If the image index is greater than 4, reset it to 1
    if (imageIndex > 4) {
        imageIndex = 1;
    }
}

// Call the function every 5 seconds (15000 milliseconds)
setInterval(changeBackgroundImage, 15000);

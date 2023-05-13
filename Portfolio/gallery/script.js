// Get all the images and their corresponding labels
const images = document.querySelectorAll('.photo-gallery-2 img');
const labels = document.querySelectorAll('.photo-gallery-2 img');

// Define an array of image sources for each label
const imageSources = {
  'photo1 photo2 and photo3': ['images6/photo1.jpg', 'images6/photo2.jpg', 'images6/photo3.jpg'],
  'photo4 photo5 and photo6': ['images6/photo4.jpg', 'images6/photo5.jpg', 'images6/photo6.jpg'],
  'photo7 photo8 and photo9': ['images6/photo7.jpg', 'images6/photo8.jpg', 'images6/photo9.jpg'],
  'photo10 photo11 and photo12': ['images6/photo10.jpg', 'images6/photo11.jpg', 'images6/photo12.jpg'],
  'photo13 photo14 and photo15': ['images6/photo13.jpg', 'images6/photo14.jpg', 'images6/photo15.jpg'],
  'photo16 photo17 and photo18': ['images6/photo16.jpg', 'images6/photo17.jpg', 'images6/photo18.jpg'],
  'photo19 photo20 and photo21': ['images6/photo19.jpg', 'images6/photo20.jpg', 'images6/photo21.jpg'],
  'photo22 photo23 and photo24': ['images6/photo22.jpg', 'images6/photo23.jpg', 'images6/photo24.jpg'],
  'photo25 photo26 and photo27': ['images6/photo25.jpg', 'images6/photo26.jpg', 'images6/photo27.jpg']
};

// Define a variable to hold the interval ID
let intervalId;

// Cycle through the images for the given label
function cycleImages(label) {
  let i = 0;
  intervalId = setInterval(() => {
    images.forEach((image, index) => {
      if (labels[index].getAttribute('label') === label) {
        image.setAttribute('src', imageSources[label][i % 3]);
      }
    });
    i++;
  }, 1500);
}

// Add mouseover and mouseout event listeners to each image
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    const label = image.getAttribute('label');
    cycleImages(label);
  });
  image.addEventListener('mouseout', () => {
    clearInterval(intervalId);
    images.forEach((image, index) => {
      if (labels[index].getAttribute('label') === label) {
        image.setAttribute('src', imageSources[label][0]);
      }
    });
  });
});

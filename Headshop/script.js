// Get the age verification popup element
var ageVerification = document.getElementById("age-verification-container");

// Get the date input and submit button elements
var dateInput = document.getElementById("age-input");
var submitButton = document.getElementById("age-submit");

// Get the current date
var currentDate = new Date();

// Set the minimum age to 18 years old
var minAge = 18;

// Listen for the submit button click event
submitButton.addEventListener("click", function() {
  // Get the date input value
  var birthDate = new Date(dateInput.value);

  // Calculate the age
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  var monthDiff = currentDate.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  // Check if the user is 18 or older
  if (age >= minAge) {
    // Redirect the user to the home page
    window.location.href = "main.html";
  } else {
    // Display an error message
    ageVerification.innerHTML = "<h2><a href='https://www.google.com'>You must be 18 years or older to enter this site. Click here to appeal.</a></h2>";
  }
});

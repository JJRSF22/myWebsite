// script.js
let btnClick = document.querySelector('button')

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
       btnClick = addEventListener('click', () => {
           window.location.href = 'index.html';
       });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function


// Function to display the dog.gif initially
function displayError() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the dog
    var errorImage = new Image();
    // Set the source (file path) for the dog image
    errorImage.src = 'error.gif'; // Assuming the dog image is named "dog.gif"
    // Set alternative text for the image (for accessibility)
    errorImage.alt = 'Error';
    // When the dog image is fully loaded, add it to the image container
    errorImage.onload = function() {
        imageContainer.appendChild(errorImage);
    };
}



// Display the dog.gif initially
displayError();

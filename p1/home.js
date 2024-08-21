document.addEventListener("DOMContentLoaded", function() {
    var buttonImage = document.getElementById("buttonImage");
    var hiddenDiv = document.getElementById("hiddenDiv");

    buttonImage.addEventListener("click", function() {
      if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
        buttonImage.style.display = "none"; // Hide the image
        
        // Set timeout to hide the div and show the image again after 5 seconds
        setTimeout(function() {
          hiddenDiv.style.display = "none";
          buttonImage.style.display = "block";
        }, 4000); // 5000 milliseconds = 5 seconds
      } else {
        hiddenDiv.style.display = "none";
        buttonImage.style.display = "block"; // Show the image
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const screenTransition = document.getElementById('screen-transition');
    const transitionButton = document.getElementById('transition-button');

    transitionButton.addEventListener('click', function() {
        // Add the 'show' class to fade in the screen transition effect
        screenTransition.classList.add('show');

        // After a delay (equal to the transition duration), navigate to the next page
        setTimeout(function() {
            window.location.href = 'main/main.html'; // Change 'next-page.html' to your desired page URL
        }, 1000); // Adjust the delay to match the transition duration in milliseconds
    });
});
document.addEventListener('DOMContentLoaded', function() {
  let headings = document.querySelectorAll('.blackout h3');
  let paragraphs = document.querySelectorAll('.blackout p');
  
  headings.forEach(function(heading) {
    heading.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });

  paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });
});







// Get the image container and image elements
// const imageContainer = document.querySelector('.image-container');
// const image = imageContainer.querySelector('img');

// // Function to set image size and position
// function setImageSize() {
//   // Get the screen width and height
//   const screenWidth = window.innerWidth;
//   const screenHeight = window.innerHeight;

//   // Set the maximum width and height for the image
//   const maxWidth = Math.min(screenWidth, 800);
//   const maxHeight = screenHeight;

//   // Calculate the image's aspect ratio
//   const aspectRatio = image.naturalWidth / image.naturalHeight;

//   // Set the image's width and height based on the screen size
//   if (screenWidth > 800) {
//     if (aspectRatio > 1) {
//       // Landscape image, set width to max width and calculate height
//       image.width = maxWidth;
//       image.height = maxWidth / aspectRatio;
//     } else {
//       // Portrait image, set height to max height and calculate width
//       image.height = maxHeight;
//       image.width = maxHeight * aspectRatio;
//     }
//   } else {
//     // For screens smaller than 800px, set the image to its natural size
//     image.width = image.naturalWidth;
//     image.height = image.naturalHeight;
//   }

//   // Center the image horizontally and vertically
//   imageContainer.style.justifyContent = 'center';
//   imageContainer.style.alignItems = 'center';
// }

// // Call the function on page load and on window resize
// setImageSize();
// window.addEventListener('resize', setImageSize);
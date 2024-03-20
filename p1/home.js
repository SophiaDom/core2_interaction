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


// // Wait for the document to fully load
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the word element
//   let word = document.querySelector(".flash");

//   // Toggle the "visible" class every 2 seconds
//   setInterval(function() {
//       word.classList.toggle("visible");
//   }, 1000);
// });



document.getElementById('hideButton').addEventListener('click', function() {
    var contentDiv = document.getElementsByClassName('.slide');
    contentDiv.style.display = 'none'; // Hide the content
});
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

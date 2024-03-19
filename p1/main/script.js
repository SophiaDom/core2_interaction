document.addEventListener('DOMContentLoaded', function() {
    var buttonImage = document.getElementById("buttonImage");
    var hiddenDiv = document.getElementById("hiddenDiv");

    buttonImage.addEventListener("click", function() {
        // Show the hiddenDiv
        hiddenDiv.style.display = "block";
        buttonImage.style.display = "none"; // Hide the buttonImage

        // Set timeout to hide the hiddenDiv after 5 seconds (adjust as needed)
        setTimeout(function() {
            hiddenDiv.style.display = "none"; // Hide the hiddenDiv
            buttonImage.style.display = "block"; // Show the buttonImage
        }, 4000); // 5000 milliseconds = 5 seconds
    });
});
window.addEventListener('scroll', function() {
    // Calculate opacity based on scroll position
    var opacity = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Limit opacity between 0 and 1
    opacity = Math.min(1, Math.max(0, opacity));

    // Update the opacity of the overlay
    var overlay = document.querySelector('.overlay');
    overlay.style.opacity = opacity;
});




  

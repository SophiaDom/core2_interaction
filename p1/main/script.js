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

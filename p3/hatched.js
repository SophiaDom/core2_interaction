document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.querySelector(".loadingScreen");

  // Add event listeners for click and keydown events
  document.addEventListener("click", handleInteraction);
  document.addEventListener("keydown", handleInteraction);

  function handleInteraction(event) {
    // Add the slideLeft class to trigger the animation
    loadingScreen.classList.add("slideLeft");

    // Remove the event listeners to prevent multiple animations
    document.removeEventListener("click", handleInteraction);
    document.removeEventListener("keydown", handleInteraction);
  }
});


function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

const menuBtn = document.getElementById('menu-btn');
const crackedEgg = document.getElementById('crackedegg');

menuBtn.addEventListener('click', () => {
  crackedEgg.style.display = (crackedEgg.style.display === 'none') ? 'block' : 'none';
});

const brokenEggBtn = document.getElementById('brokenegg-btn');

brokenEggBtn.addEventListener('click', () => {
  crackedEgg.style.display = 'block';
});






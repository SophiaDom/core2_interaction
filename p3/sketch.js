document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.querySelector(".loadingScreen");
  
  setTimeout(function() {
      loadingScreen.style.animation = "slideUp 1.5s ease"; // Apply slideUp animation
      
      // After the animation completes (after 1 second), add a class to hide the loading screen
      setTimeout(function() {
          loadingScreen.classList.add("hidden");
      });
  }, 5500);
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

function setup() {
  const contentDiv = document.querySelector('.content');
  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('display', 'block');
}


function draw() {
  background(255, 255, 255, 0); // clear the canvas with a white background

  let today = new Date();
  let birthday = new Date("May 12, 2003 18:01:00");
  let death = new Date("May 12, 2091 18:01:00");

  let birthdayTime = birthday.getTime();
  let currentTime = today.getTime();
  let deathTime = death.getTime();
  let msPassed = currentTime - birthdayTime;

  let secondsPassed = msPassed / 1000;
  let minutesPassed = secondsPassed / 60;
  let hoursPassed = minutesPassed / 60;
  let daysPassed = hoursPassed / 24;
  let yearsPassed = Math.floor(daysPassed / 365.25); // Calculate the number of full years

  // Calculate the width and height of each rectangle
  let rectWidth = (window.innerWidth) / (yearsPassed + (100 - yearsPassed)); // Divide the canvas width by the number of years passed
  let rectHeight = window.innerHeight;

  let margin = (window.innerWidth - (yearsPassed * rectWidth)) / (yearsPassed + 1);
  // Draw a rectangle for each full year passed
  for (let i = 0; i < yearsPassed; i++) {
    noStroke();
    fill(99,92,24); // green fill color
    rect(margin + i * (rectWidth + margin), 0, rectWidth, rectHeight);
  }
}

setup();
setInterval(draw, 1000);

// Resize the canvas when the window is resized
window.addEventListener('resize', function() {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
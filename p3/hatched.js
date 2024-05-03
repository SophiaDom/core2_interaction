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
  
// const canvasyear = document.getElementById('canvasyear');
// const ctx = canvasyear.getContext('2d');
// const vw = window.innerWidth;
// const vh = window.innerHeight;
// canvasyear.width = vw;
// canvasyear.height = vh;
// ctx.fillStyle = 'transparent';
// ctx.fillRect(0, 0, canvasyear.width, canvasyear.height);


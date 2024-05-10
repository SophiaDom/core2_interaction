document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.one,.two,.three');

    function randomizePositions() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        elements.forEach(function(element) {
            // Set random position within the viewport, ensuring it doesn't go off the screen
            const maxTop = viewportHeight - element.offsetHeight;
            const maxLeft = viewportWidth - element.offsetWidth;

            // Calculate a random position that keeps the element within the viewport
            const top = Math.random() * maxTop;
            const left = Math.random() * maxLeft;

            // Add a small buffer to prevent elements from sticking to the edge
            const buffer = 20;

            element.style.top = `${Math.max(buffer, top)}px`;
            element.style.left = `${Math.max(buffer, left)}px`;
        });
    }

    // Randomize positions initially
    randomizePositions();

    // Randomize positions every 3 seconds (adjust as needed)
    setInterval(randomizePositions, 3000);

    // Add hover effect
    elements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            element.classList.add('hovered');
        });

        element.addEventListener('mouseleave', function() {
            element.classList.remove('hovered');
        });
    });
});
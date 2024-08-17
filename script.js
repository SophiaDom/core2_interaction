document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.one, .two, .three');
    const container = document.querySelector('.container');
    let isHovering = false;
    let touchCount = 0;

    function randomizePosition(element) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elementRect = element.getBoundingClientRect();
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;

    // Calculate the maximum top and left positions that keep the element inside the viewport
    const maxTop = viewportHeight - elementHeight - 20; // add a 20px buffer
    const maxLeft = viewportWidth - elementWidth - 20; // add a 20px buffer

    let top, left;
    let overlap = true;

    while (overlap) {
        top = Math.random() * maxTop;
        left = Math.random() * maxLeft;

        overlap = false;

        // Check if the new position overlaps with any of the existing numerals
        const numerals = document.querySelectorAll('.one, .two, .three');
        numerals.forEach((numeral) => {
            const numeralRect = numeral.getBoundingClientRect();
            if (numeral !== element && isOverlapping(elementRect, numeralRect, top, left)) {
                overlap = true;
            }
        });
    }

    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
}
    
    function isOverlapping(rect1, rect2, top, left) {
        const rect1Top = top;
        const rect1Left = left;
        const rect1Bottom = rect1Top + rect1.height;
        const rect1Right = rect1Left + rect1.width;
        
        const rect2Top = rect2.top;
        const rect2Left = rect2.left;
        const rect2Bottom = rect2Top + rect2.height;
        const rect2Right = rect2Left + rect2.width;
        
        return !(rect1Bottom < rect2Top || rect1Top > rect2Bottom || rect1Right < rect2Left || rect1Left > rect2Right);
    }

    elements.forEach(function(element) {
        randomizePosition(element);

        // Set a random interval for each element
        const interval = Math.random() * 5000 + 2000; // between 2s and 7s
        let intervalId = setInterval(function() {
            if (!isHovering) {
                container.classList.remove('one-hover', 'two-hover', 'three-hover');
                randomizePosition(element);
            }
        }, interval);

        element.addEventListener('mouseenter', function() {
            isHovering = true;
            clearInterval(intervalId); // pause the interval
            if (container.classList.contains('one-hover') || container.classList.contains('two-hover') || container.classList.contains('three-hover')) {
                container.classList.remove('one-hover', 'two-hover', 'three-hover'); // Reset all hover classes
            }
            if (element.classList.contains('one')) {
                container.classList.add('one-hover');
            } else if (element.classList.contains('two')) {
                container.classList.add('two-hover');
            } else if (element.classList.contains('three')) {
                container.classList.add('three-hover');
            }
        });

        element.addEventListener('mouseleave', function() {
            isHovering = false;
            container.classList.remove('one-hover', 'two-hover', 'three-hover'); // instantly remove the background
            intervalId = setInterval(function() {
                if (!isHovering) {
                    randomizePosition(element);
                }
            }, interval); // resume the interval
        });

        element.addEventListener('pointerdown', (e) => {
            touchCount++;
            if (touchCount === 1) {
                if (e.target.classList.contains('one')) {
                    container.classList.add('one-hover');
                } else if (e.target.classList.contains('two')) {
                    container.classList.add('two-hover');
                } else if (e.target.classList.contains('three')) {
                    container.classList.add('three-hover');
                }
            }
        });

        element.addEventListener('pointerup', (e) => {
            if (touchCount === 2) {
                touchCount = 0;
                container.classList.remove('one-hover', 'two-hover', 'three-hover'); // clear hover state
                if (e.target.tagName === 'A') { // check if the pointer event is on a link
                    // allow the link to navigate to the next site
                }
            } else {
                touchCount = 0;
            }
        });
    });

    // Add event listener to the document to remove hover state when clicking outside
    document.addEventListener('pointerup', (e) =>
    });
});
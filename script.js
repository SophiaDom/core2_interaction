document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.one, .two, .three');

    function randomizePositions() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
    
        elements.forEach(function(element) {
            const elementRect = element.getBoundingClientRect();
            const elementWidth = elementRect.width;
            const elementHeight = elementRect.height;
    
            const maxTop = viewportHeight - elementHeight;
            const maxLeft = viewportWidth - elementWidth;
    
            const top = Math.random() * maxTop;
            const left = Math.random() * maxLeft;
    
            element.style.top = `${top}px`;
            element.style.left = `${left}px`;
        });
    }

    randomizePositions();

    setInterval(randomizePositions, 3000);

    elements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            const container = document.querySelector('.container');
            container.classList.remove('one-hover', 'two-hover', 'three-hover'); // Reset all hover classes
            if (element.classList.contains('one')) {
                container.classList.add('one-hover');
            } else if (element.classList.contains('two')) {
                container.classList.add('two-hover');
            } else if (element.classList.contains('three')) {
                container.classList.add('three-hover');
            }
        });

        element.addEventListener('mouseleave', function() {
            document.querySelector('.container').classList.remove('one-hover', 'two-hover', 'three-hover');
        });
    });
});
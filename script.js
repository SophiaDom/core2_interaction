document.addEventListener('DOMContentLoaded', function() {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');

    // Event listeners for .one
    one.addEventListener('mouseover', function() {
        two.style.visibility = 'hidden';
        three.style.visibility = 'hidden';
    });

    one.addEventListener('mouseout', function() {
        two.style.visibility = 'visible';
        three.style.visibility = 'visible';
    });

    // Event listeners for .two
    two.addEventListener('mouseover', function() {
        one.style.visibility = 'hidden';
        three.style.visibility = 'hidden';
    });

    two.addEventListener('mouseout', function() {
        one.style.visibility = 'visible';
        three.style.visibility = 'visible';
    });

    // Event listeners for .three
    three.addEventListener('mouseover', function() {
        one.style.visibility = 'hidden';
        two.style.visibility = 'hidden';
    });

    three.addEventListener('mouseout', function() {
        one.style.visibility = 'visible';
        two.style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');

    // Function to change background image
    function changeBackground(imageURL) {
        container.style.backgroundImage = `url('${imageURL}')`;
    }

    // Event listeners for .one
    one.addEventListener('mouseover', function() {
        changeBackground('image-one.jpg');
    });

    one.addEventListener('mouseout', function() {
        // Reset to default background image
        changeBackground('default-background.jpg');
    });

    // Event listeners for .two
    two.addEventListener('mouseover', function() {
        changeBackground('image-two.jpg');
    });

    two.addEventListener('mouseout', function() {
        // Reset to default background image
        changeBackground('default-background.jpg');
    });

    // Event listeners for .three
    three.addEventListener('mouseover', function() {
        changeBackground('image-three.jpg');
    });

    three.addEventListener('mouseout', function() {
        // Reset to default background image
        changeBackground('default-background.jpg');
    });
    function changeBackground(imageURL) {
        container.style.backgroundImage = `url('${imageURL}')`;
    
        // Remove any previous hover classes
        container.classList.remove('one-hover', 'two-hover', 'three-hover');
    
        // Add appropriate hover class based on the image URL
        if (imageURL === 'image-one.jpg') {
            container.classList.add('one-hover');
        } else if (imageURL === 'image-two.jpg') {
            container.classList.add('two-hover');
        } else if (imageURL === 'image-three.jpg') {
            container.classList.add('three-hover');
        }
    }
    
});
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.one, .two, .three');

    function randomizePositions() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
    
        elements.forEach(function(element) {
            // Set random position within the viewport
            const maxTop = viewportHeight - element.offsetHeight;
            const maxLeft = Math.max(0, viewportWidth - element.offsetWidth); // Ensure left position doesn't go off the screen
    
            element.style.top = Math.random() * maxTop + 'px';
            element.style.left = Math.random() * maxLeft + 'px';
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

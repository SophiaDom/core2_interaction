// Function to animate lines when they enter the viewport
function animateLines(entries) {
  entries.forEach(entry => {
    const paragraph = entry.target;
    const spans = paragraph.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (span.classList.contains('otherfont')) {
        // Apply opacity transition but no vertical movement for .otherfont
        span.style.transition = `opacity 5s ease ${index * 0.2}s`;
        span.style.opacity = 1; // Ensure it's fully visible
        span.style.transform = 'none'; // No vertical movement
      } else {
        // Apply both opacity and transform transitions for other spans
        if (entry.isIntersecting) {
          span.style.transition = `opacity 5s ease ${index * 0.2}s, transform 1s ease ${index * 0.5}s`;
          span.style.opacity = 1;
          span.style.transform = 'translateY(0)';
        } else {
          span.style.opacity = 0;
          span.style.transform = 'translateY(20px)';
        }
      }
    });
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(animateLines, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all paragraphs
document.querySelectorAll('.text > p').forEach(paragraph => {
  // Split the paragraph into lines
  const lines = paragraph.innerHTML.split('<br>');
  paragraph.innerHTML = '';

  // Wrap each line in a <span> and append to the paragraph
  lines.forEach((line, index) => {
    const span = document.createElement('span');
    span.innerHTML = line;
    span.style.display = 'block';
    span.style.opacity = 0;
    span.style.transform = 'translateY(20px)';
    paragraph.appendChild(span);
    if (index < lines.length - 1) {
      paragraph.appendChild(document.createElement('br'));
    }
  });

  // Start observing the paragraph
  observer.observe(paragraph);
});
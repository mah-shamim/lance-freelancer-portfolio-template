// Get all lightbox trigger elements
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

// Get the lightbox container and image
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Add click event listeners to each trigger
lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Show the lightbox
        lightbox.style.display = 'block';
        // Set the source of the lightbox image
        lightboxImg.src = trigger.getAttribute('data-src');
    });
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
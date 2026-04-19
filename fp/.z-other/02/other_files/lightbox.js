// JavaScript for the lightbox

// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightboxButton = document.querySelector('.close-button');
const galleryItems = document.querySelectorAll('.gallery-item img');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

// Add an event listener to each gallery item
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Function to open the lightbox and display the selected image
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImage.src = galleryItems[index].getAttribute('data-src');
    // Add navigation logic
    nextButton.addEventListener('click', () => {
        index = (index + 1) % galleryItems.length;
        lightboxImage.src = galleryItems[index].getAttribute('data-src');
    });
    prevButton.addEventListener('click', () => {
        index = (index - 1 + galleryItems.length) % galleryItems.length;
        lightboxImage.src = galleryItems[index].getAttribute('data-src');
    });
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add event listeners to close the lightbox
closeLightboxButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

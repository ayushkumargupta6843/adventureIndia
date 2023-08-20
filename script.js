console.log("Script loaded and running");
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            url: './lalQuila.jpg',
            caption: 'Red Fort'
        },
        {
            url: './newDelhiHome.jpg',
            caption: 'Rastrapati Bhawan'
        },
        {
            url: './indiaGate.jpg',
            caption: 'India Gate'
        },
        // Add more images and captions here
    ];

    const imageContainer = document.getElementById('imageContainer');

    // Loop through images array and create image cards
    images.forEach((image) => {
        const card = document.createElement('div');
        card.classList.add('image-card');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;

        img.addEventListener('click', () => {
            openFullscreen(image.url);
        });

        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.textContent = image.caption;

        card.appendChild(img);
        card.appendChild(caption);
        imageContainer.appendChild(card);
    });
    // Open image in fullscreen
    function openFullscreen(imageUrl) {
        const fullscreenOverlay = document.getElementById('fullscreenOverlay');
        const fullscreenImage = document.getElementById('fullscreenImage');

        fullscreenImage.src = imageUrl;
        fullscreenOverlay.style.display = 'flex';
    }

    // Close fullscreen
    function closeFullscreen() {
        const fullscreenOverlay = document.getElementById('fullscreenOverlay');
        fullscreenOverlay.style.display = 'none';
    }
    function openNewTabUrl(url) {
        window.open(url, '_blank');
    }
});
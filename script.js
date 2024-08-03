const image = document.getElementById('bouncingImage');

let posX = 0;
let posY = 0;
let directionX = 2; // Speed in X direction
let directionY = 2; // Speed in Y direction

function updatePosition() {
    const imageRect = image.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    // Update position
    posX += directionX;
    posY += directionY;

    // Check for collision with left or right edge
    if (posX <= 0 || posX + imageRect.width >= bodyRect.width) {
        directionX = -directionX; // Reverse X direction
    }

    // Check for collision with top or bottom edge
    if (posY <= 0 || posY + imageRect.height >= bodyRect.height) {
        directionY = -directionY; // Reverse Y direction
    }

    // Set new position
    image.style.left = posX + 'px';
    image.style.top = posY + 'px';

    requestAnimationFrame(updatePosition);
}

// Initialize position
image.style.left = posX + 'px';
image.style.top = posY + 'px';

// Start the animation
requestAnimationFrame(updatePosition);

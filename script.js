const image = document.getElementById('blinkingImage');

setInterval(() => {
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}, 1000);

const image = document.getElementById('blinkingImage');

setInterval(() => {
    if (image.style.visibility === 'hidden') {
        image.style.visibility = 'visible';
    } else {
        image.style.visibility = 'hidden';
    }
}, 1000);

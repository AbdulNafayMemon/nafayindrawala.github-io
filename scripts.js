const phrases = ["a Computer Science Student", "an Aspiring Developer", "a Technology Enthusiast"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const typingSpeed = 250;
const erasingSpeed = 150;
const newPhraseDelay = 1000;
const typingElement = document.querySelector(".typing-animation");

function type() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
        typingElement.textContent += phrases[currentPhraseIndex].charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newPhraseDelay);
    }
}

function erase() {
    if (currentLetterIndex > 0) {
        typingElement.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newPhraseDelay + 250);
});

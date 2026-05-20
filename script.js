const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

let inputSequence = [];

document.addEventListener("keydown", (event) => {
    inputSequence.push(event.key);

    // Keep only the last 10 inputs
    if (inputSequence.length > konamiCode.length) {
        inputSequence.shift();
    }

    // Check if the code matches
    if (JSON.stringify(inputSequence) === JSON.stringify(konamiCode)) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("#pics img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});



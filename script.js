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

function win95() {
	document.body.style.backgroundImage = "url('sky.png')";
	document.body.style.fontFamily = "Times New Roman";
	const topbar = document.getElementById("topbar");
	content.style.backgroundColor = "#c0c0c0";
	topbar.style.borderRadius = "0px";
	topbar.style.border = "2px solid #fff";
	topbar.style.borderBottomColor = "#404040";
	topbar.style.borderRightColor = "#404040";
	topbar.style.backgroundColor = "#c0c0c0";
	content.style.borderRadius = "0px";
	content.style.border = "2px solid #fff";
	content.style.borderBottomColor = "#404040";
	content.style.borderRightColor = "#404040";
}


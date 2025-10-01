// Fade in images when loaded
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("load", () => {
        img.style.opacity = 1; // trigger opacity to 1 in case animation doesn't fire automatically
        console.log(`${img.alt} loaded`);
    });
});

// Display last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;

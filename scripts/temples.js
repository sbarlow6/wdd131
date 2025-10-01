// scripts/temples.js
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Dynamically set the last modified date
    const lastModifiedDate = new Date(document.lastModified);

    // Format as DD/MM/YYYY HH:MM:SS
    const formattedDate = lastModifiedDate.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    document.getElementById("lastModified").textContent =
        `Last Modification: ${formattedDate}`;

    // ✅ Hamburger menu toggle
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            // Switch between ☰ and ✖
            menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
        });
    }
});

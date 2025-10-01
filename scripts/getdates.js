// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically format the last modified date
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

// Insert into <p id="lastModified">
document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;


document.getElementById("course-title").textContent = "WDD 131: Dynamic Web Fundamentals";

// Find the first paragraph in the footer and update it with the copyright year
const currentYear = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = `&copy; ${currentYear} 🌺 Augustine Ugochukwu Odoemene 🌺 Nigeria`;
}

// Get the last modified date.
const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString();
// Find the second paragraph in the footer and update it with the last modified date
const lastModifiedParagraph = document.querySelector('footer h5:first-of-type');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
}
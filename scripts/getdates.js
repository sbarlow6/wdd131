console.log("JavaScript file is connected ✅");

const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
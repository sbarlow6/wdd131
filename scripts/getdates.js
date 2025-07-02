var string = new Date().getFullYear()
document.getElementById("currentyear").textContent = `@ ${string}`;

document.getElementById("lastModified").textContent = "Last modification: " + document.lastModified;

document.getElementById("course-title").textContent = "WDD 131: Dynamic Web Fundamentals - "
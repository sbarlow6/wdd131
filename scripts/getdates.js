//Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightyearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightyearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last Update: ${lastModified}`;
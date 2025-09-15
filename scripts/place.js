// 📅 Footer Date Handling
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

if (yearSpan) yearSpan.textContent = currentYear;
if (lastModifiedSpan) lastModifiedSpan.textContent = lastModified;

// 🍔 Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});





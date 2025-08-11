document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');

    // Only run if elements exist
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.textContent = nav.classList.contains('active') ? '❌' : '☰';
        });
    }

    // Footer dynamic content
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastUpdatedElement = document.getElementById('lastupdated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = document.lastModified;
    }
});
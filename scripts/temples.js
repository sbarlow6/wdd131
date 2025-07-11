document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    const closeNav = document.getElementById('close-nav');

    function openNav() {
        nav.classList.add('open');
        hamburger.style.display = 'none';
        closeNav.style.display = 'block';
    }

    function closeNavigation() {
        nav.classList.remove('open');
        hamburger.style.display = 'block';
        closeNav.style.display = 'none';
    }

    hamburger.addEventListener('click', openNav);
    closeNav.addEventListener('click', closeNavigation);
//
    // Hide nav and show hamburger on resize if desktop
    function handleResize() {
        if (window.innerWidth >= 900) {
            nav.classList.remove('open');
            hamburger.style.display = 'none';
            closeNav.style.display = 'none';
        } else {
            hamburger.style.display = 'block';
            closeNav.style.display = 'none';
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
});

const year_current = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = `&copy; ${year_current} 🌺 Augustine Ugochukwu Odoemene 🌺 Nigeria`;
}
//
// Get the last modified date.
const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString();
// Find the second paragraph in the footer and update it with the last modified date
const lastModifiedParagraph = document.querySelector('footer h5:first-of-type');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
}

function filterImages(category) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedDate = new Date(document.lastModified);

    const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0');
    const day = String(lastModifiedDate.getDate()).padStart(2, '0');
    const year = lastModifiedDate.getFullYear();
    const hours = String(lastModifiedDate.getHours()).padStart(2, '0');
    const minutes = String(lastModifiedDate.getMinutes()).padStart(2, '0');
    const seconds = String(lastModifiedDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formattedDate;
    }
});

console.log("bom.js is running");

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// ✅ Valid BOM books
const validBooks = [
    "1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon",
    "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"
];

// ✅ Load chapters from localStorage or start fresh
let chaptersArray = getChapterList() || [];

// ✅ Display saved chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// ✅ Handle Add Chapter button
button.addEventListener('click', () => {
    const chapterName = input.value.trim();
    input.focus();

    if (chapterName === '') {
        alert('Please enter a chapter name.');
        return;
    }

    if (!isValidBOMChapter(chapterName)) {
        alert('Invalid entry. Only Book of Mormon chapters are allowed (e.g., "Alma 5–7").');
        return;
    }

    displayList(chapterName);
    chaptersArray.push(chapterName);
    setChapterList();
    input.value = '';
});

// ✅ Validate BOM chapter format
function isValidBOMChapter(input) {
    // Match format: Book + space + chapter or chapter range
    const regex = /^([1-4] Nephi|Words of Mormon|[A-Z][a-z]+(?: [A-Z][a-z]+)?) (\d+)(–\d+)?$/;
    const match = input.match(regex);
    if (!match) return false;

    const book = match[1];
    return validBooks.includes(book);
}

// ✅ Display chapter in the list
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${item}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });

    console.log(`Added chapter: ${item}`);
}

// ✅ Save chapters to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// ✅ Load chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// ✅ Remove chapter and update localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

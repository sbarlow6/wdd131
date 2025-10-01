console.log("bom.js is running");

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  const chapterName = input.value.trim();
  input.focus();

  if (chapterName !== '') {
    const li = document.createElement('li');
    li.textContent = chapterName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${chapterName}`);

    li.append(deleteButton);
    list.append(li);

    input.value = '';
  } else {
    alert('Please enter a chapter name.');
  }
});

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const li = e.target.closest('li');
    if (li) {
      list.removeChild(li);
      input.focus();
    }
  }
});

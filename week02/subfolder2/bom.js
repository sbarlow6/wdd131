const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('____');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.Value ='';
deleteButton.textContent = '❌'
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});
if (input.Value.trim() !== '') { }
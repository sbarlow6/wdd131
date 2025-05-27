const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // <--- esto estaba vacío

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
       // deleteButton.setAttribute('aria-label', `Eliminar ${input.value}`);

        // Eliminar capítulo al hacer clic en el botón
         deleteButton.addEventListener('click', () => {
           list.removeChild(li);
           });

        li.append(deleteButton);
        list.append(li);

        // Limpiar el campo de entrada
       input.value = '';
       input.focus();
    }
});
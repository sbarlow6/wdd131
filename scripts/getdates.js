
const lastModifiedDate = new Date(document.lastModified);

const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
};
const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options).replace(',', '');

document.getElementById('lastModified').textContent = formattedDate;

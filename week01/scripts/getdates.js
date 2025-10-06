const yearEl = document.querySelector('#currentYear');
const lastModifiedEl = document.querySelector('#lastModified');

// Current year
const today = new Date();
if (yearEl) yearEl.textContent = String(today.getFullYear());

// Friendly last modified date/time
const modified = new Date(document.lastModified);
const friendly = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(modified);

if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${friendly}`;

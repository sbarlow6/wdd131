// Temples Album Page Scripts

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4944.jpg"
  },
  {
    templeName: "Caracas Temple",
    location: "Caracas, Caracas DF, Venezuela",
    dedicated: "1999-01-10",
    area: 15532,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55702.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-27",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-20240.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-43513.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 45200,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-20908.jpg"
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, USA",
    dedicated: "1927-10-23",
    area: 75226,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-19367.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, USA",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-30861.jpg"
  },
  {
    templeName: "Tokyo Temple",
    location: "Tokyo, Japan",
    dedicated: "2022-07-03",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
  },
  {
    templeName: "Stockholm Temple",
    location: "Stockholm, Sweden",
    dedicated: "1985-07-02",
    area: 31000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267.jpg"
  },
  {
    templeName: "Helsinki Finland Temple",
    location: "Helsinki, Finland",
    dedicated: "2006-10-22",
    area: 16350,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-50698.jpg"
  }
];

function $(sel, ctx=document){ return ctx.querySelector(sel); }
function $all(sel, ctx=document){ return Array.from(ctx.querySelectorAll(sel)); }

function formatDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function createCard(t){
  const figure = document.createElement('figure');
  figure.className = 'card';

  const img = document.createElement('img');
  img.loading = 'lazy';
  img.src = t.imageUrl;
  img.alt = `${t.templeName} - ${t.location}`;

  const caption = document.createElement('figcaption');
  const h3 = document.createElement('h3');
  h3.textContent = t.templeName;
  const pLoc = document.createElement('p');
  pLoc.className = 'meta';
  pLoc.textContent = t.location;
  const pDed = document.createElement('p');
  pDed.className = 'meta';
  pDed.textContent = `Dedicated: ${formatDate(t.dedicated)} • Area: ${t.area.toLocaleString()} sq ft`;

  caption.append(h3, pLoc, pDed);
  figure.append(img, caption);
  return figure;
}

function render(list){
  const gallery = $('#gallery');
  gallery.innerHTML = '';
  if (!list.length){
    const p = document.createElement('p');
    p.textContent = 'No temples match this filter.';
    gallery.appendChild(p);
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(t => frag.appendChild(createCard(t)));
  gallery.appendChild(frag);
}

function applyFilter(filter){
  let list = temples.slice();
  switch(filter){
    case 'old':
      list = list.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      list = list.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
      break;
    case 'large':
      list = list.filter(t => t.area > 90000);
      break;
    case 'small':
      list = list.filter(t => t.area < 20000);
      break;
    default:
      // all
      break;
  }
  render(list);
}

function setupMenu(){
  const btn = $('#menu');
  const list = $('#navlist');
  btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close menu when a link is selected (mobile)
  list.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    list.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

function setupFilters(){
  const links = $all('[data-filter]');
  links.forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    const filter = a.getAttribute('data-filter');
    applyFilter(filter);
  }));
}

function setupFooter(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const lm = document.getElementById('lastModified');
  if (lm) lm.textContent = `Last Modified: ${document.lastModified}`;
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  setupFilters();
  applyFilter('all');
  setupFooter();
});

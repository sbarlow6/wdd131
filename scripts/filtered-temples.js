// ==============================
// Footer Info (Year + Last Modified)
// ==============================
let d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// ==============================
// Temple Data
// ==============================
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city.webp"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana.webp"
    },
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl: "images/apia-samoa.webp"
    },
    {
        templeName: "Bismarck North Dakota",
        location: "Bismarck, North Dakota, United States",
        dedicated: "1999, September, 19",
        area: 10700,
        imageUrl: "images/bismarck-north-dakota.webp"
    }
];


// ==============================
// Create Temple Cards
// ==============================
function createTempleCard(filteredTemples) {
    const container = document.querySelector("#templeContainer"); // ✅ match HTML
    container.innerHTML = ""; // clear before render

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// ==============================
// Filtering Logic
// ==============================
document.querySelector("#home").addEventListener("click", () => {
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)
    );
});

document.querySelector("#new").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)
    );
});

document.querySelector("#large").addEventListener("click", () => {
    createTempleCard(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    createTempleCard(temples.filter(t => t.area < 10000));
});

// ==============================
// Default: Show All Temples
// ==============================
createTempleCard(temples);

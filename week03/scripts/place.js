
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// =============================
// Weather (Static for now)
// =============================

// Static values for temperature and wind speed
const temperature = 26; // °C
const windSpeed = 8;    // km/h

// =============================
// Wind Chill Calculation
// =============================

function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Determine if wind chill should be calculated
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// =============================
// Display Wind Chill in Weather Section
// =============================

const windChillElement = document.getElementById("windChill");
if (windChillElement) {
    windChillElement.textContent = windChill;
}

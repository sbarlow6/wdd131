/*
 * place.js
 * - Calculates wind chill factor
 * - Updates footer copyright year and last modified date
 */

// Static values for temperature and wind speed
const temperature = 14; // °C
const windSpeed = 12; // km/h

// Function to calculate wind chill factor
function calculateWindChill(temp, speed) {
  // Formula for Celsius: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
  return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + "°C";
}

// Check if conditions are met for wind chill calculation
const windchillElement = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
  windchillElement.textContent = calculateWindChill(temperature, windSpeed);
} else {
  windchillElement.textContent = "N/A";
}

// Set the current year and last modified date in the footer
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + document.lastModified;

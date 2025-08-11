// Calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    // Using the formula for metric units (°C and km/h)
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
}

// Display wind chill if conditions are met
function displayWindChill() {
    const tempElement = document.getElementById('temp');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');
    
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
    
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Display current year and last modified date
function displayFooterInfo() {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');
    
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
}

// Initialize page
function init() {
    displayFooterInfo();
    displayWindChill();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Product data array
const products = [
    { id: "prod001", name: "Ultra HD Smart TV" },
    { id: "prod002", name: "Wireless Bluetooth Headphones" },
    { id: "prod003", name: "Stainless Steel Water Bottle" },
    { id: "prod004", name: "Ergonomic Office Chair" },
    { id: "prod005", name: "Portable Bluetooth Speaker" },
    { id: "prod006", name: "Smartphone with 128GB Storage" },
    { id: "prod007", name: "Electric Toothbrush" },
    { id: "prod008", name: "Non-Stick Cooking Set" },
    { id: "prod009", name: "Fitness Tracker Watch" },
    { id: "prod010", name: "Wireless Charging Pad" }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    // Populate product dropdown
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
    
    // Set minimum date to today for date picker
    const dateInput = document.getElementById('installDate');
    if (dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
});
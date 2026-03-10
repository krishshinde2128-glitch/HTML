function calculatePrice() {
    const hourlyRate = 5000;
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const tier = document.getElementById('tier').value;
    const display = document.querySelector('#total-display span');
    
    let total = hourlyRate * hours;
    
    // Apply Membership Tier Discount (Quicksand Palette Logic)
    if (tier === "gold") {
        total = total * 0.9; // 10% discount
    }

    // Add 7.5% Luxury Tax (as mentioned in your Problem Statement)
    const luxuryTax = total * 0.075;
    const grandTotal = total + luxuryTax;

    display.innerText = "$" + grandTotal.toLocaleString();
}

function validateBooking() {
    const count = parseInt(document.getElementById('passengers').value);
    const errorElement = document.getElementById('error');
    
    // Passenger count validation against aircraft safety limits
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid passenger count.");
    } else if (count > 16) {
        alert("Safety Warning: Maximum capacity for this fleet is 16 passengers.");
    } else {
        alert("Booking Confirmed. Your flight details have been sent to your concierge.");
    }
}
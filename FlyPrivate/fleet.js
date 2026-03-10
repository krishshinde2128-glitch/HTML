// --- Empty Leg Notification ---
// Triggers 3 seconds after the page loads
setTimeout(() => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <strong style="color: #E0C58F;">✨ INSTANT ALERT</strong><br>
        Empty Leg: Paris to Dubai for $8,500.
    `;
    document.body.appendChild(notification);
    
    // Auto-remove after 7 seconds
    setTimeout(() => notification.remove(), 7000);
}, 3000);

// --- Modal Display Logic ---
// fleet.js

function showJet(jetId, jetName) {
    const modal = document.getElementById('jetModal');
    const img = document.getElementById('jetImage');
    const title = document.getElementById('modalTitle');

    // Update the text at the top of the modal
    title.innerText = jetName; 
    
    // Map the IDs to the correct luxury jet images
    const images = {
        'g650': "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
        'citation': "https://upload.wikimedia.org/wikipedia/commons/6/69/N975QS_2002_Cessna_750_C-N_750-0175_Citation_X_%287039507775%29.jpg"
    };

    // This line picks the image based on the jetId you clicked
    img.src = images[jetId]; 
    
    modal.style.display = "flex"; 
}




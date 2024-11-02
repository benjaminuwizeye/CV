function toggleExperienceDetails(card) {
    const details = card.querySelector('.experience-details');
    const hint = card.querySelector('.click-hint'); // Updated to target entire click-hint element
    const icon = hint.querySelector('i'); // Separate icon element

    // Check if details are currently displayed
    if (details.style.display === 'block') {
        details.style.display = 'none';
        icon.className = 'fas fa-angle-down'; // Icon points down
        hint.innerHTML = '<i class="fas fa-angle-down"></i> Click to see details'; // Text when details are hidden
    } else {
        details.style.display = 'block';
        icon.className = 'fas fa-angle-up'; // Icon points up
        hint.innerHTML = '<i class="fas fa-angle-up"></i> Hide details'; // Text when details are shown
    }
}


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

// Show the button when the page is scrolled down
window.onscroll = function () {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block'; // Show button
    } else {
        button.style.display = 'none'; // Hide button
    }
};


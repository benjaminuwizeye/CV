function toggleExperienceDetails(card) {
    const details = card.querySelector('.experience-details');
    const hint = card.querySelector('.click-hint i');
    if (details.style.display === 'block') {
        details.style.display = 'none';
        hint.className = 'fas fa-angle-down';
    } else {
        details.style.display = 'block';
        hint.className = 'fas fa-angle-up';
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


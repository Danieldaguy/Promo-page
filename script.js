// Particle Generation
const container = document.querySelector('.particle-container');

// Function to create a single particle
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    container.appendChild(particle);

    // Remove particle after animation
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Generate particles at intervals
setInterval(createParticle, 200); // Adjust frequency as needed

// Start generating particles immediately when the page loads
window.onload = function() {
    for (let i = 0; i < 10; i++) { // Pre-generate some particles
        createParticle();
    }
};
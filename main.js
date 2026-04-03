// Subtle reveal effects and Grain interaction

document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initial state for scroll reveal
    const revealElements = document.querySelectorAll('.expediente-card, .dossier, section h2');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        observer.observe(el);
    });

    // Grain texture variation (subtle pulse)
    const noise = document.querySelector('.noise-overlay');
    let intensity = 0.05;
    
    // Optional: add a slight flicker to simulate old film or document reels
    setInterval(() => {
        const flicker = Math.random() * 0.02;
        noise.style.opacity = (intensity + flicker).toFixed(3);
    }, 150);

    // Search Interaction
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.focus();
        });
    }
});

// Main JavaScript file for Fullstack Learning Playbook

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fullstack Learning Playbook loaded');
    
    // Add smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Add active state highlighting
    highlightCurrentPage();
    
    // Add interactive card animations
    initCardAnimations();
});

/**
 * Enable smooth scrolling for all anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Highlight the current page in navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
}

/**
 * Add hover and interaction effects to phase cards
 */
function initCardAnimations() {
    const cards = document.querySelectorAll('.phase-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Helper function to add console styling
 */
function logStyled(message, color = '#667eea') {
    console.log(`%c${message}`, `color: ${color}; font-weight: bold; font-size: 14px;`);
}

// Log welcome message
logStyled('🚀 Welcome to Fullstack Learning Playbook!');

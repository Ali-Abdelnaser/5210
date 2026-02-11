document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');
    
    // Staggered entry animation for link cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Add a subtle parallax/tilt effect to the cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    // Interaction feedback for the logo
    const logo = document.querySelector('.logo-wrapper');
    logo.addEventListener('click', () => {
        logo.style.transform = 'scale(0.95)';
        setTimeout(() => {
            logo.style.transform = 'scale(1.05) rotate(5deg)';
        }, 150);
    });
});

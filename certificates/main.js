document.querySelectorAll('.certification-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    });
});
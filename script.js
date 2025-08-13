// ARQUIVO: script.js (OTIMIZADO)

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Menu Hambúrguer ---
    const menuIconsContainer = document.querySelector('.menu-icons'); 
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (menuIconsContainer && navLinks) {
        menuIconsContainer.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique se propague para outros elementos
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // --- Lógica do Ícone Flutuante do WhatsApp ---
    const floatingWhatsApp = document.querySelector('.whatsapp-float');
    if (!floatingWhatsApp) return;

    const whatsAppTrigger = document.querySelector('.whatsapp-trigger'); 
    if (!whatsAppTrigger) return;

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingWhatsApp.style.opacity = '0';
                floatingWhatsApp.style.visibility = 'hidden';
            } else {
                floatingWhatsApp.style.opacity = '1';
                floatingWhatsApp.style.visibility = 'visible';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(whatsAppTrigger);
});
// ARQUIVO: script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Menu Hambúrguer OTIMIZADA ---
    const hamburgerIcon = document.querySelector('.icon-hamburger');
    const closeIcon = document.querySelector('.icon-close');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body; // Seleciona o body

    // O container dos ícones agora é o nosso gatilho principal
    const menuIconsContainer = document.querySelector('.menu-icons'); 

    if (menuIconsContainer && navLinks) {
        menuIconsContainer.addEventListener('click', () => {
            // Adiciona/remove a classe no navLinks para o slide
            navLinks.classList.toggle('active');
            // Adiciona/remove a classe no body para travar a rolagem e controlar a animação dos ícones
            body.classList.toggle('menu-open');
        });
    }


    // --- Lógica do Ícone Flutuante do WhatsApp ---
    const floatingWhatsApp = document.querySelector('.whatsapp-float');
    // Seleciona o elemento que deve esconder o ícone (o botão principal na pág de contato)
    const whatsAppTrigger = document.querySelector('.whatsapp-trigger'); 

    // Se não houver ícone flutuante na página, não faz nada.
    if (!floatingWhatsApp) {
        return;
    }
    
    // Se não houver um gatilho na página (estamos em home, serviços, etc.), o ícone fica sempre visível.
    if (!whatsAppTrigger) {
        floatingWhatsApp.style.opacity = '1';
        floatingWhatsApp.style.visibility = 'visible';
        return;
    }

    // Opções para o Intersection Observer
    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do gatilho está visível
    };

    // Callback que será executado quando a visibilidade do gatilho mudar
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            // Se o gatilho (botão de contato) estiver visível na tela
            if (entry.isIntersecting) {
                // Esconde o ícone flutuante
                floatingWhatsApp.style.opacity = '0';
                floatingWhatsApp.style.visibility = 'hidden';
            } else {
                // Mostra o ícone flutuante
                floatingWhatsApp.style.opacity = '1';
                floatingWhatsApp.style.visibility = 'visible';
            }
        });
    };

    // Cria o observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Inicia a observação do elemento gatilho
    observer.observe(whatsAppTrigger);
});
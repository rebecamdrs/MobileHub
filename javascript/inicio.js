$(document).ready(function() {
    $('#mobile-button').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-button').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const headerHeight = header.outerHeight();
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        // Aplica sombra no header quando há scroll
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        // Passa pelas seções para determinar a ativa
        sections.each(function(i) {
            const section = $(this);

            // Calcula o topo e o final da seção
            const sectionTop = section.offset().top - 90; // Posição no documento
            const sectionBottom = sectionTop + section.outerHeight();

            // Verifica se a seção está no viewport
            if (scrollPosition + headerHeight >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Sai do loop
            }
        })

        // Atualiza a classe 'active' nos itens do menu
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.card', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#about-img', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.about-content', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
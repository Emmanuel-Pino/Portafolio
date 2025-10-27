// ===== Esperar a que el DOM esté listo =====
$(document).ready(function() {
    
    // ===== Navbar Scroll Effect =====
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // ===== Smooth Scrolling para enlaces internos =====
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // ===== Resaltar link activo en navbar al hacer scroll =====
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 100;
        
        $('.nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            }
        });
    });

    // ===== Animación de la sección About =====
    var aboutAnimated = false;
    function animateAbout() {
        if (!aboutAnimated) {
            $('.about-image-container img').addClass('animate-in');
            $('.about-content').addClass('animate-in');
            $('.info-card').addClass('animate-in');
            aboutAnimated = true;
        }
    }

    // ===== Animación de Skills Cards =====
    var skillsAnimated = false;
    function animateSkills() {
        if (!skillsAnimated) {
            $('.skill-card').each(function(index) {
                var $card = $(this);
                setTimeout(function() {
                    $card.css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }, index * 100);
            });
            skillsAnimated = true;
        }
    }

    // ===== Inicializar Skills Cards con opacidad 0 =====
    $('.skill-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    // ===== Detector de scroll para animaciones =====
    $(window).scroll(function() {
        var windowBottom = $(window).scrollTop() + $(window).height();
        
        // Animar About Section
        var aboutSection = $('#about');
        if (aboutSection.length) {
            var aboutTop = aboutSection.offset().top;
            if (windowBottom > aboutTop + 100) {
                animateAbout();
            }
        }
        
        // Animar Skills Section
        var skillsSection = $('#skills');
        if (skillsSection.length) {
            var skillsTop = skillsSection.offset().top;
            if (windowBottom > skillsTop + 100) {
                animateSkills();
            }
        }
    });

    // Ejecutar al cargar por si las secciones están visibles
    $(window).trigger('scroll');

    // ===== Animación Fade-in para elementos generales =====
    function checkFadeIn() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > elementTop + 100) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).scroll(checkFadeIn);
    checkFadeIn(); // Ejecutar al cargar

    // ===== Filtro de Proyectos =====
    $('.filter-btn').on('click', function() {
        // Remover clase active de todos los botones
        $('.filter-btn').removeClass('active');
        // Agregar clase active al botón clickeado
        $(this).addClass('active');
        
        // Obtener el filtro seleccionado
        var filterValue = $(this).attr('data-filter');
        
        // Mostrar/ocultar proyectos según el filtro
        if (filterValue === 'all') {
            $('.project-item').fadeIn(500).removeClass('hidden');
        } else {
            $('.project-item').each(function() {
                if ($(this).attr('data-category') === filterValue) {
                    $(this).fadeIn(500).removeClass('hidden');
                } else {
                    $(this).fadeOut(500).addClass('hidden');
                }
            });
        }
    });

    // ===== FORMULARIO DE CONTACTO - ELIMINADO =====
    // Ya no es necesario porque FormSubmit maneja el envío automáticamente
    // El formulario se envía directamente al correo configurado

    // ===== Botón "Back to Top" =====
    // Crear botón
    $('body').append('<a href="#" class="back-to-top"><i class="fas fa-arrow-up"></i></a>');
    
    // Estilos del botón
    $('.back-to-top').css({
        'position': 'fixed',
        'bottom': '30px',
        'right': '30px',
        'width': '50px',
        'height': '50px',
        'background-color': '#0a4e19',
        'color': 'white',
        'border-radius': '50%',
        'display': 'none',
        'justify-content': 'center',
        'align-items': 'center',
        'text-decoration': 'none',
        'z-index': '1000',
        'box-shadow': '0 5px 15px rgba(0,0,0,0.3)',
        'transition': 'all 0.3s ease'
    });

    // Mostrar/ocultar botón según scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn().css('display', 'flex');
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Scroll suave al hacer click
    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Efecto hover del botón
    $('.back-to-top').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 10px 25px rgba(0,0,0,0.4)',
                'background-color': '#4cb42d'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.3)',
                'background-color': '#0a4e19'
            });
        }
    );

    // ===== Cerrar navbar en mobile al hacer click en un link =====
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // ===== Preloader (opcional) =====
    $(window).on('load', function() {
        // Ocultar preloader si existe
        $('.preloader').fadeOut('slow');
    });

    // ===== Efecto parallax simple en hero =====
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    });

    // ===== Mensaje de consola =====
    console.log('%c¡Hola Developer! 👋', 'color: #0a4e19; font-size: 20px; font-weight: bold;');
    console.log('%c¿Curioseando el código? Me gusta tu actitud 😎', 'color: #6c757d; font-size: 14px;');
    console.log('%cSi quieres trabajar conmigo, ¡contáctame!', 'color: #4cb42d; font-size: 14px;');

});

// ===== Funciones fuera del document.ready =====

// Función para validar email
function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar notificaciones
function showNotification(message, type) {
    var bgColor = type === 'success' ? '#4cb42d' : '#dc3545';
    
    $('body').append(`
        <div class="notification" style="
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 9999;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        ">
            ${message}
        </div>
    `);
    
    setTimeout(function() {
        $('.notification').fadeOut(500, function() {
            $(this).remove();
        });
    }, 3000);
}
// Calculer dynamiquement le nombre d'années d'expérience
document.addEventListener('DOMContentLoaded', function() {
    // Calculer les années d'expérience
    const startYear = 1999; // Année d'installation
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear + 2; // +2 pour ajuster selon l'information donnée (28 ans en 2025)
    
    // Mettre à jour le texte
    const experienceYearsElement = document.getElementById('experience-years');
    if (experienceYearsElement) {
        experienceYearsElement.textContent = yearsOfExperience.toString();
    }

    // Mettre à jour l'année dans le footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear.toString();
    }

    // Gestion du menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Change l'icône
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fermer le menu lorsqu'un lien est cliqué
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Gestion des accordéons pour les définitions
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Basculer l'état de l'accordéon actuel
            item.classList.toggle('active');
        });
    });

    // Activer le premier accordéon par défaut
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }

    // Gestion du menu de navigation fluide
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mise en évidence du lien de navigation actif lors du défilement
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Animation pour les cartes de services au défilement
window.addEventListener('scroll', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.classList.add('animate');
        }
    });
});
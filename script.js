

        // This is Lemonade-style centered logo animation
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

            // I am checking initial state on page load to ensure no scrolled class initially
            navbar.classList.remove('navbar-scrolled');

            function handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 100) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            }

            // Here I have Throttled scroll handler for better performance
            let ticking = false;
            function scrollHandler() {
                if (!ticking) {
                    requestAnimationFrame(function() {
                        handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            }

            // This is for toggle mobile menu
            function toggleMobileMenu() {
                hamburgerMenu.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            }

            // Close mobile menu when clicking on a link
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    toggleMobileMenu();
                });
            });

            // Close mobile menu when clicking on overlay
            mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

            // Toggle mobile menu when clicking on hamburger
            hamburgerMenu.addEventListener('click', toggleMobileMenu);

            window.addEventListener('scroll', scrollHandler);

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
  
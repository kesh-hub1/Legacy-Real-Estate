        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

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

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe property cards
        document.querySelectorAll('.property-card').forEach(card => {
            observer.observe(card);
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });

        // Add click handlers for buttons
        document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button, .property-btn').forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent.includes('Explore') || this.textContent.includes('View')) {
                    document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
                } else if (this.textContent.includes('Schedule') || this.textContent.includes('Get Started')) {
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

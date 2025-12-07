document.addEventListener('DOMContentLoaded', () => {
    console.log('Fivestone Property Enterprises website loaded.');

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Add styles for active state in CSS later
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // Rent Agreement Form Logic
    const serviceSelect = document.getElementById('service-select');
    const rentFields = document.getElementById('rent-agreement-fields');

    if (serviceSelect && rentFields) {
        serviceSelect.addEventListener('change', function () {
            if (this.value === 'Online Rent Agreement') {
                rentFields.style.display = 'block';
                // Make fields required if visible
                rentFields.querySelectorAll('input').forEach(input => input.required = true);
            } else {
                rentFields.style.display = 'none';
                // Remove required attribute if hidden
                rentFields.querySelectorAll('input').forEach(input => input.required = false);
            }
        });
    }
});

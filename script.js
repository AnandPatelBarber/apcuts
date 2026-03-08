// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.querySelector('.glass-effect').classList.add('bg-dark-900/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.querySelector('.glass-effect').classList.remove('bg-dark-900/95');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Reveal Animation on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Booking Modal
function openBooking() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeBooking() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Show success message
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Appointment Requested!';
    btn.classList.add('bg-green-600', 'text-white');
    btn.classList.remove('bg-gold-500', 'text-dark-900');
    lucide.createIcons();
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('bg-gold-500', 'text-dark-900');
        e.target.reset();
        lucide.createIcons();
    }, 3000);
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home img');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Set minimum date for date picker to today
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBooking();
    }
});
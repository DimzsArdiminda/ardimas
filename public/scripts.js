// Cursor glow effect
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0,
    mouseY = 0;
let glowX = 0,
    glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';

    // Update custom cursor dot position
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    cursorGlow.style.left = glowX - 200 + 'px';
    cursorGlow.style.top = glowY - 200 + 'px';

    requestAnimationFrame(animateGlow);
}
animateGlow();

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scrolling
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

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const text = stat.textContent;
    if (text === '∞' || text === '24/7') return;

    const target = parseInt(text);
    let current = 0;
    const increment = target / 50;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            stat.textContent = Math.floor(current) + '+';
            setTimeout(updateCounter, 30);
        } else {
            stat.textContent = text;
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counterObserver.observe(stat);
});
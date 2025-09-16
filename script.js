// Bootstrap 5 Compatible JavaScript for Cyber Theme

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Account for fixed navbar height
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open (Bootstrap will handle this automatically)
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Enhanced navbar with cyber styling on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.cyber-nav');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
    }
});

// Matrix rain effect for background (simplified)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
}

// Initialize matrix rain
createMatrixRain();

// Contact form with cyber styling
const contactForm = document.querySelector('.cyber-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Simple validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Simulate form submission process
        button.textContent = 'Sending...';
        button.classList.remove('cyber-btn-primary');
        button.style.background = '#ff0080';
        button.style.borderColor = '#ff0080';
        
        setTimeout(() => {
            button.textContent = 'Message Sent!';
            button.style.background = '#00ff41';
            button.style.borderColor = '#00ff41';
            button.style.color = '#0a0a0a';
            
            showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
            this.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.add('cyber-btn-primary');
                button.style.background = '';
                button.style.borderColor = '';
                button.style.color = '';
            }, 2000);
        }, 1500);
    });
}

// Enhanced notification system with cyber styling
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.cyber-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `cyber-notification notification-${type}`;
    
    const colors = {
        success: '#00ff41',
        error: '#ff0080',
        info: '#00bfff'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span style="font-family: 'Fira Code', monospace;">${message}</span>
            <button class="notification-close">[X]</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: ${colors[type]};
        padding: 1rem 1.5rem;
        border: 2px solid ${colors[type]};
        box-shadow: 0 0 20px ${colors[type]}33;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-weight: 500;
        font-family: 'Fira Code', monospace;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: ${colors[type]};
        font-size: 1rem;
        cursor: pointer;
        padding: 0;
        font-family: 'Fira Code', monospace;
        font-weight: bold;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Animate elements on scroll with cyber effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add glitch effect to service cards
            if (entry.target.classList.contains('cyber-service-card')) {
                setTimeout(() => {
                    const h5 = entry.target.querySelector('h5');
                    if (h5) glitchEffect(h5);
                }, Math.random() * 1000);
            }
        }
    });
}, observerOptions);

// Glitch effect for elements
function glitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./`~';
    let glitchCount = 0;
    
    function glitch() {
        if (glitchCount < 3) {
            let glitchedText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > 0.9) {
                    glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            element.textContent = glitchedText;
            glitchCount++;
            setTimeout(glitch, 50);
        } else {
            element.textContent = originalText;
        }
    }
    
    glitch();
}

// Enhanced hover effects with cyber styling
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.cyber-service-card, .cyber-contact-item, .cyber-stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add cyber pulse effect to service cards
    document.querySelectorAll('.cyber-service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            
            // Add scanning line effect
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ff41, transparent);
                animation: scan 1s ease-in-out;
            `;
            this.appendChild(scanLine);
            
            setTimeout(() => {
                if (scanLine.parentNode) {
                    scanLine.parentNode.removeChild(scanLine);
                }
            }, 1000);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Cyber konami code with enhanced feedback
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konami.join(',')) {
        // Epic cyber easter egg
        document.body.style.animation = 'matrix-glitch 2s ease-in-out';
        showNotification('🚀 ADMIN ACCESS GRANTED! Welcome to the inner circle, fellow hacker!', 'success');
        
        // Add some visual flair
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        konamiCode = [];
    }
});

// Add CSS for animations and effects
const style = document.createElement('style');
style.textContent = `
    @keyframes scan {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    @keyframes matrix-glitch {
        0%, 100% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg) contrast(150%); }
        50% { filter: hue-rotate(180deg) brightness(150%); }
        75% { filter: hue-rotate(270deg) saturate(150%); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Treudler cyberspace initialized with Bootstrap 5!');
console.log('🔐 Security protocols active. All systems green.');
console.log('💡 Tip: Try the konami code (↑↑↓↓←→←→BA) for admin access!');

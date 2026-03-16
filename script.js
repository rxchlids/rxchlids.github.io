// Handle captcha verification
const captchaCheckbox = document.getElementById('captcha-checkbox');
const captchaBtn = document.getElementById('captcha-btn');

captchaCheckbox.addEventListener('change', function() {
    captchaBtn.disabled = !this.checked;
});

captchaBtn.addEventListener('click', function() {
    if (captchaCheckbox.checked) {
        verifyCaptcha();
    }
});

function verifyCaptcha() {
    const captchaSection = document.getElementById('captcha-section');
    const content = document.getElementById('content');
    
    captchaSection.classList.add('hidden');
    setTimeout(() => {
        captchaSection.style.display = 'none';
        content.style.display = 'block';
        setTimeout(() => content.classList.add('visible'), 10);
    }, 600);
}

// Create floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    const colors = ['#a85555', '#2d8f88', '#3d7fa0', '#b89d1a'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 30 + 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

window.addEventListener('load', createParticles);
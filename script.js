/**
 * ==========================================================================
 * PERSONAL PROFESSIONAL PORTFOLIO SCRIPT
 * Owner: Shaunak
 * Vanilla JavaScript ES6+ - Fast, Clean, Zero-Dependencies, GitHub Pages Ready
 * ==========================================================================
 */

// Global Portfolio Version (Increment here for subsequent updates!)
const PORTFOLIO_VERSION = "v1.7";

document.addEventListener('DOMContentLoaded', () => {
  initVersionBadge();
  initTypewriter();
  initHeaderScroll();
  initMobileNav();
  initScrollSpy();
  initCopyEmail();
});

/* --------------------------------------------------------------------------
 * 1. VERSION BADGE INITIALIZER
 * -------------------------------------------------------------------------- */
function initVersionBadge() {
  const versionElement = document.getElementById('versionCounter');
  if (versionElement) {
    versionElement.textContent = PORTFOLIO_VERSION;
  }
}

/* --------------------------------------------------------------------------
 * 2. SUBTLE TYPEWRITER EFFECT FOR HERO BADGE
 * -------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriterText');
  if (!typewriterElement) return;

  const roles = [
    'Full-Stack Development',
    'Database & Systems Design',
    'Creative Cinematography & Visuals',
    'Software Craftsmanship'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 95;
  const deletingSpeed = 45;
  const pauseDuration = 2200;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      currentSpeed = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      currentSpeed = 400;
    }

    setTimeout(type, currentSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
 * 3. HEADER SCROLL SHADOW
 * -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
 * 4. MOBILE NAVIGATION TOGGLE
 * -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Close when clicking any mobile link
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
 * 5. SCROLL SPY ACTIVE LINK HIGHLIGHTING
 * -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link:not(.resume-pill)');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
 * 6. ONE-CLICK COPY EMAIL TO CLIPBOARD
 * -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailTextElem = document.getElementById('myEmailText');
  const copyBtnLabel = document.getElementById('copyBtnLabel');

  const emailToCopy = emailTextElem ? emailTextElem.textContent.trim() : 'kulkarnishaunak2006@gmail.com';

  function copyText() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(emailToCopy).then(onSuccess, fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  function onSuccess() {
    if (copyBtnLabel) copyBtnLabel.textContent = 'Copied!';
    showToast('Email address copied to clipboard!', 'success');
    setTimeout(() => {
      if (copyBtnLabel) copyBtnLabel.textContent = 'Copy';
    }, 2500);
  }

  function fallbackCopy() {
    const tempInput = document.createElement('textarea');
    tempInput.value = emailToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      onSuccess();
    } catch (err) {
      showToast('Could not copy automatically. Email: ' + emailToCopy, 'info');
    }
    document.body.removeChild(tempInput);
  }

  if (copyBtn) copyBtn.addEventListener('click', copyText);
}

/* --------------------------------------------------------------------------
 * 7. TOAST NOTIFICATION UTILITY
 * -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconClass = type === 'success' 
    ? 'fa-solid fa-circle-check' 
    : 'fa-solid fa-circle-info';

  toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

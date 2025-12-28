/* ========================================
   Simple Design System - Main JavaScript
   GSAP Powered Animations
   ======================================== */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initThemeToggle();
  initNavigation();
  initCopyButtons();
  initCodeTabs();
  initHeroAnimations();
  initScrollAnimations();
  initHeaderScroll();
});

/* ========================================
   Custom Cursor
   ======================================== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (!cursor || !follower) return;

  // Check for touch device
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor animation
  gsap.ticker.add(() => {
    // Cursor follows immediately
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Follower has more lag
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
  });
}

/* ========================================
   Theme Toggle (Light/Dark Mode)
   ======================================== */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  }

  toggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Animate theme change
    gsap.to('body', {
      duration: 0.3,
      ease: 'power2.inOut'
    });
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      html.classList.toggle('dark', e.matches);
    }
  });
}

/* ========================================
   Navigation (Innovative Menu)
   ======================================== */
function initNavigation() {
  const trigger = document.getElementById('menuTrigger');
  const overlay = document.getElementById('navOverlay');

  if (!trigger || !overlay) return;

  let isOpen = false;
  let navTimeline = null;

  // Create animation timeline
  function createNavTimeline() {
    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, {
      visibility: 'visible',
      duration: 0
    })
    .to('.nav-overlay__bg', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
    .to('.nav-overlay__link', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.2')
    .to('.nav-overlay__cta', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.nav-overlay__info', {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.nav-overlay__visual', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.nav-overlay__footer', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.3');

    return tl;
  }

  navTimeline = createNavTimeline();

  // Toggle menu
  function toggleMenu() {
    isOpen = !isOpen;

    trigger.classList.toggle('active', isOpen);
    overlay.classList.toggle('active', isOpen);
    trigger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      navTimeline.play();
    } else {
      navTimeline.reverse();
    }
  }

  // Event listeners
  trigger.addEventListener('click', toggleMenu);

  // Close on link click
  overlay.querySelectorAll('.nav-overlay__link, .nav-overlay__btn').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) {
        toggleMenu();
      }
    });
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleMenu();
    }
  });

  // Hover effect on links
  const links = overlay.querySelectorAll('.nav-overlay__link');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link.querySelector('.nav-overlay__link-text'), {
        x: 10,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(link.querySelector('.nav-overlay__link-arrow'), {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link.querySelector('.nav-overlay__link-text'), {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(link.querySelector('.nav-overlay__link-arrow'), {
        opacity: 0,
        x: -10,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

/* ========================================
   Copy to Clipboard
   ======================================== */
function initCopyButtons() {
  // NPM install copy button
  const installCopyBtn = document.getElementById('copyInstall');
  if (installCopyBtn) {
    installCopyBtn.addEventListener('click', async () => {
      const command = 'npm i simple-design-system';
      await copyToClipboard(command, installCopyBtn);
    });
  }

  // Code preview copy button
  const codeCopyBtn = document.getElementById('copyCode');
  if (codeCopyBtn) {
    codeCopyBtn.addEventListener('click', async () => {
      const codeContent = document.getElementById('codeContent');
      const text = codeContent?.textContent || '';
      await copyToClipboard(text, codeCopyBtn);
    });
  }
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);

    // Animate button
    if (button.classList.contains('hero__install-copy')) {
      button.classList.add('copied');
      setTimeout(() => button.classList.remove('copied'), 2000);
    } else {
      const originalHTML = button.innerHTML;
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        <span>Copied!</span>
      `;
      button.style.color = '#22c55e';

      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.color = '';
      }, 2000);
    }
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}

/* ========================================
   Code Preview Tabs
   ======================================== */
function initCodeTabs() {
  const tabs = document.querySelectorAll('.code-tab');
  const codeContent = document.getElementById('codeContent');
  const filename = document.getElementById('codeFilename');

  if (!tabs.length || !codeContent) return;

  const codeExamples = {
    react: {
      filename: 'App.tsx',
      code: `<span class="token-keyword">import</span> { Button, Input, Card } <span class="token-keyword">from</span> <span class="token-string">'simple-design-system'</span>

<span class="token-keyword">export default function</span> <span class="token-function">App</span>() {
  <span class="token-keyword">return</span> (
    <span class="token-tag">&lt;Card&gt;</span>
      <span class="token-tag">&lt;Card.Header&gt;</span>
        <span class="token-tag">&lt;h2&gt;</span>Sign Up<span class="token-tag">&lt;/h2&gt;</span>
      <span class="token-tag">&lt;/Card.Header&gt;</span>

      <span class="token-tag">&lt;Card.Body&gt;</span>
        <span class="token-tag">&lt;Input</span>
          <span class="token-attr">label</span>=<span class="token-string">"Email"</span>
          <span class="token-attr">type</span>=<span class="token-string">"email"</span>
          <span class="token-attr">placeholder</span>=<span class="token-string">"you@example.com"</span>
        <span class="token-tag">/&gt;</span>
        <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-string">"primary"</span> <span class="token-attr">fullWidth</span><span class="token-tag">&gt;</span>
          Continue
        <span class="token-tag">&lt;/Button&gt;</span>
      <span class="token-tag">&lt;/Card.Body&gt;</span>
    <span class="token-tag">&lt;/Card&gt;</span>
  )
}`
    },
    vue: {
      filename: 'App.vue',
      code: `<span class="token-tag">&lt;template&gt;</span>
  <span class="token-tag">&lt;SdsCard&gt;</span>
    <span class="token-tag">&lt;SdsCardHeader&gt;</span>
      <span class="token-tag">&lt;h2&gt;</span>Sign Up<span class="token-tag">&lt;/h2&gt;</span>
    <span class="token-tag">&lt;/SdsCardHeader&gt;</span>

    <span class="token-tag">&lt;SdsCardBody&gt;</span>
      <span class="token-tag">&lt;SdsInput</span>
        <span class="token-attr">label</span>=<span class="token-string">"Email"</span>
        <span class="token-attr">type</span>=<span class="token-string">"email"</span>
        <span class="token-attr">v-model</span>=<span class="token-string">"email"</span>
      <span class="token-tag">/&gt;</span>
      <span class="token-tag">&lt;SdsButton</span> <span class="token-attr">variant</span>=<span class="token-string">"primary"</span> <span class="token-attr">full-width</span><span class="token-tag">&gt;</span>
        Continue
      <span class="token-tag">&lt;/SdsButton&gt;</span>
    <span class="token-tag">&lt;/SdsCardBody&gt;</span>
  <span class="token-tag">&lt;/SdsCard&gt;</span>
<span class="token-tag">&lt;/template&gt;</span>

<span class="token-tag">&lt;script setup&gt;</span>
<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> email = <span class="token-function">ref</span>(<span class="token-string">''</span>)
<span class="token-tag">&lt;/script&gt;</span>`
    },
    vanilla: {
      filename: 'index.html',
      code: `<span class="token-comment">&lt;!-- Import CSS --&gt;</span>
<span class="token-tag">&lt;link</span> <span class="token-attr">rel</span>=<span class="token-string">"stylesheet"</span>
      <span class="token-attr">href</span>=<span class="token-string">"simple-design-system.css"</span><span class="token-tag">&gt;</span>

<span class="token-comment">&lt;!-- Use components with classes --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card-header"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;h2&gt;</span>Sign Up<span class="token-tag">&lt;/h2&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card-body"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;label</span> <span class="token-attr">class</span>=<span class="token-string">"sds-input-wrapper"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;span&gt;</span>Email<span class="token-tag">&lt;/span&gt;</span>
      <span class="token-tag">&lt;input</span> <span class="token-attr">type</span>=<span class="token-string">"email"</span>
             <span class="token-attr">class</span>=<span class="token-string">"sds-input"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;/label&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"sds-btn sds-btn-primary"</span><span class="token-tag">&gt;</span>
      Continue
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>`
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('code-tab--active'));
      tab.classList.add('code-tab--active');

      // Get tab type
      const tabType = tab.dataset.tab;
      const example = codeExamples[tabType];

      if (example && codeContent) {
        // Animate code change
        gsap.to(codeContent, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          onComplete: () => {
            codeContent.innerHTML = `<code>${example.code}</code>`;
            if (filename) filename.textContent = example.filename;
            gsap.to(codeContent, {
              opacity: 1,
              y: 0,
              duration: 0.3
            });
          }
        });
      }
    });
  });
}

/* ========================================
   Hero Animations
   ======================================== */
function initHeroAnimations() {
  const heroTimeline = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  // Badge animation
  heroTimeline.from('.hero__badge', {
    opacity: 0,
    y: 30,
    duration: 0.8
  });

  // Title animation - split lines
  heroTimeline.from('.hero__title-line', {
    opacity: 0,
    y: 60,
    rotationX: -30,
    duration: 1,
    stagger: 0.15
  }, '-=0.4');

  // Subtitle
  heroTimeline.from('.hero__subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8
  }, '-=0.5');

  // CTA elements
  heroTimeline.from('.hero__install', {
    opacity: 0,
    y: 30,
    duration: 0.6
  }, '-=0.3');

  heroTimeline.from('.hero__buttons', {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, '-=0.3');

  // Showcase cards with stagger
  heroTimeline.from('.showcase-card', {
    opacity: 0,
    y: 100,
    rotation: 10,
    duration: 1,
    stagger: 0.15,
    ease: 'power4.out'
  }, '-=0.8');

  // Scroll indicator
  heroTimeline.from('.hero__scroll', {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, '-=0.4');

  // Floating animation for showcase cards
  document.querySelectorAll('.showcase-card').forEach((card, i) => {
    const speed = parseFloat(card.dataset.speed) || 1;
    gsap.to(card, {
      y: `${15 * speed}`,
      duration: 3 + (i * 0.5),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // Orb animations
  gsap.to('.hero__orb--1', {
    x: 50,
    y: -30,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.hero__orb--2', {
    x: -40,
    y: 40,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.hero__orb--3', {
    scale: 1.3,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

/* ========================================
   Scroll Animations
   ======================================== */
function initScrollAnimations() {
  // Components section
  gsap.from('.component-card', {
    scrollTrigger: {
      trigger: '.components__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.1
  });

  // Features section
  gsap.from('.feature-block', {
    scrollTrigger: {
      trigger: '.features__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.1
  });

  // Animate feature stats
  document.querySelectorAll('.feature-block__stat-value').forEach(stat => {
    const text = stat.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^0-9]/g, ''));

    if (!isNaN(number)) {
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(stat,
            { textContent: '0' },
            {
              textContent: number,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent);
                stat.textContent = current + (hasPercent ? '%' : hasPlus ? '+' : '');
              }
            }
          );
        },
        once: true
      });
    }
  });

  // Code section
  gsap.from('.code-section__info', {
    scrollTrigger: {
      trigger: '.code-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -50,
    duration: 0.8
  });

  gsap.from('.code-window', {
    scrollTrigger: {
      trigger: '.code-section__preview',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9
  });

  gsap.from('.code-live-preview', {
    scrollTrigger: {
      trigger: '.code-live-preview',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 0.8
  });

  // CTA section
  gsap.from('.cta-box', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.8
  });

  // Section headers
  document.querySelectorAll('.section-header').forEach(header => {
    gsap.from(header.querySelectorAll('.section-header__tag, .section-header__title, .section-header__desc'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.1
    });
  });

  // Marquee speed on scroll
  const marquee = document.querySelector('.marquee__track');
  if (marquee) {
    ScrollTrigger.create({
      trigger: '.marquee',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const speedUp = gsap.utils.clamp(-2, 2, velocity / 1000);
        gsap.to(marquee, {
          timeScale: 1 + speedUp,
          duration: 0.5
        });
      }
    });
  }
}

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  ScrollTrigger.create({
    start: 'top -100',
    onUpdate: (self) => {
      if (self.direction === 1 && window.scrollY > 100) {
        header.classList.add('scrolled');
      } else if (window.scrollY <= 100) {
        header.classList.remove('scrolled');
      }
    }
  });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      gsap.to(window, {
        scrollTo: { y: targetPosition, autoKill: false },
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  });
});

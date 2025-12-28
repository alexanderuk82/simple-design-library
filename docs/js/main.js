/* ========================================
   Simple Design System - Main JavaScript
   GSAP Powered Animations
   ======================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded');
    return;
  }

  // Register plugins safely
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
  }
  if (typeof TextPlugin !== 'undefined') {
    gsap.registerPlugin(TextPlugin);
  }

  initCursor();
  initThemeToggle();
  initNavigation();
  initCopyButtons();
  initCodeTabs();
  initHeroAnimations();
  initScrollAnimations();
  initHeaderScroll();
  initSmoothScroll();
});

/* ========================================
   Custom Cursor
   ======================================== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (!cursor || !follower) return;

  // Check for touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
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
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

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

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  }

  toggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

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

  trigger.addEventListener('click', toggleMenu);

  overlay.querySelectorAll('.nav-overlay__link, .nav-overlay__btn').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggleMenu();
  });
}

/* ========================================
   Copy to Clipboard
   ======================================== */
function initCopyButtons() {
  const installCopyBtn = document.getElementById('copyInstall');
  if (installCopyBtn) {
    installCopyBtn.addEventListener('click', async () => {
      await copyToClipboard('npm i simple-design-system', installCopyBtn);
    });
  }

  const codeCopyBtn = document.getElementById('copyCode');
  if (codeCopyBtn) {
    codeCopyBtn.addEventListener('click', async () => {
      const codeContent = document.getElementById('codeContent');
      await copyToClipboard(codeContent?.textContent || '', codeCopyBtn);
    });
  }
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);

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
   Code Preview Tabs with Scroll-Triggered Switching
   ======================================== */
function initCodeTabs() {
  const tabs = document.querySelectorAll('.code-tab');
  const codeContent = document.getElementById('codeContent');
  const filename = document.getElementById('codeFilename');
  const codeSection = document.querySelector('.code-section');
  const scrollBar = document.getElementById('codeScrollBar');

  if (!tabs.length || !codeContent || !codeSection) return;

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
        <span class="token-tag">&lt;Input</span> <span class="token-attr">label</span>=<span class="token-string">"Email"</span> <span class="token-tag">/&gt;</span>
        <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-string">"primary"</span><span class="token-tag">&gt;</span>Continue<span class="token-tag">&lt;/Button&gt;</span>
      <span class="token-tag">&lt;/Card.Body&gt;</span>
    <span class="token-tag">&lt;/Card&gt;</span>
  )
}`
    },
    vanilla: {
      filename: 'index.html',
      code: `<span class="token-comment">&lt;!-- Import Simple DS CSS --&gt;</span>
<span class="token-tag">&lt;link</span> <span class="token-attr">rel</span>=<span class="token-string">"stylesheet"</span> <span class="token-attr">href</span>=<span class="token-string">"simple-ds.css"</span><span class="token-tag">&gt;</span>

<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card-header"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;h2&gt;</span>Sign Up<span class="token-tag">&lt;/h2&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"sds-card-body"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;input</span> <span class="token-attr">class</span>=<span class="token-string">"sds-input"</span> <span class="token-attr">placeholder</span>=<span class="token-string">"Email"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"sds-btn sds-btn--primary"</span><span class="token-tag">&gt;</span>
      Continue
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>`
    },
    webcomponent: {
      filename: 'app.js',
      code: `<span class="token-comment">// Import Web Components</span>
<span class="token-keyword">import</span> <span class="token-string">'simple-design-system/components'</span>

<span class="token-comment">// Use native custom elements</span>
<span class="token-keyword">const</span> app = <span class="token-string">\`
  &lt;sds-card&gt;
    &lt;sds-card-header&gt;
      &lt;h2&gt;Sign Up&lt;/h2&gt;
    &lt;/sds-card-header&gt;
    &lt;sds-card-body&gt;
      &lt;sds-input label="Email"&gt;&lt;/sds-input&gt;
      &lt;sds-button variant="primary"&gt;
        Continue
      &lt;/sds-button&gt;
    &lt;/sds-card-body&gt;
  &lt;/sds-card&gt;
\`</span>

document.body.innerHTML = app`
    }
  };

  const tabOrder = ['react', 'vanilla', 'webcomponent'];
  let currentTabIndex = 0;
  let isAnimating = false;

  // Function to switch tabs with animation
  function switchToTab(tabType, animate = true) {
    const example = codeExamples[tabType];
    if (!example || isAnimating) return;

    // Update tab UI
    tabs.forEach(t => t.classList.remove('code-tab--active'));
    const activeTab = document.querySelector(`.code-tab[data-tab="${tabType}"]`);
    if (activeTab) activeTab.classList.add('code-tab--active');

    if (animate) {
      isAnimating = true;
      gsap.to(codeContent, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        onComplete: () => {
          codeContent.innerHTML = `<code>${example.code}</code>`;
          if (filename) filename.textContent = example.filename;
          gsap.fromTo(codeContent,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, onComplete: () => { isAnimating = false; } }
          );
        }
      });
    } else {
      codeContent.innerHTML = `<code>${example.code}</code>`;
      if (filename) filename.textContent = example.filename;
    }
  }

  // Click handlers for manual tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.dataset.tab;
      currentTabIndex = tabOrder.indexOf(tabType);
      switchToTab(tabType);
    });
  });

  // Only setup scroll-triggered tabs on desktop
  if (typeof ScrollTrigger !== 'undefined' && window.innerWidth >= 1024) {
    const codeLayout = document.querySelector('.code-section__layout');

    // Pin the entire code layout while scrolling through tabs
    ScrollTrigger.create({
      trigger: codeSection,
      start: 'top 80px',
      end: '+=200%', // Scroll distance for the effect (3 tabs = enough scroll space)
      pin: codeLayout,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Update scroll bar
        if (scrollBar) {
          gsap.set(scrollBar, { scaleX: progress });
        }

        // Determine which tab should be active based on scroll progress
        // 0-33%: React, 33-66%: Vanilla, 66-100%: Web Component
        let newIndex;
        if (progress < 0.33) {
          newIndex = 0;
        } else if (progress < 0.66) {
          newIndex = 1;
        } else {
          newIndex = 2;
        }

        // Switch tab if index changed
        if (newIndex !== currentTabIndex && !isAnimating) {
          currentTabIndex = newIndex;
          switchToTab(tabOrder[newIndex]);
        }
      }
    });
  }
}

/* ========================================
   Hero Animations
   ======================================== */
function initHeroAnimations() {
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTimeline
    .from('.hero__badge', { opacity: 0, y: 30, duration: 0.8 })
    .from('.hero__title-line', { opacity: 0, y: 60, duration: 1, stagger: 0.15 }, '-=0.4')
    .from('.hero__subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
    .from('.hero__install', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3')
    .from('.hero__buttons', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from('.showcase-card', { opacity: 0, y: 100, rotation: 10, duration: 1, stagger: 0.15, ease: 'power4.out' }, '-=0.8')
    .from('.hero__scroll', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');

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
  gsap.to('.hero__orb--1', { x: 50, y: -30, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero__orb--2', { x: -40, y: 40, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero__orb--3', { scale: 1.3, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
}

/* ========================================
   Scroll Animations
   ======================================== */
function initScrollAnimations() {
  // Check if ScrollTrigger is available
  if (typeof ScrollTrigger === 'undefined') {
    console.warn('ScrollTrigger not available');
    return;
  }

  // Component cards animation
  const componentCards = document.querySelectorAll('.component-card');
  if (componentCards.length) {
    gsap.set(componentCards, { opacity: 1, y: 0 }); // Set initial visible state

    ScrollTrigger.batch(componentCards, {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      },
      once: true
    });
  }

  // Feature blocks animation
  const featureBlocks = document.querySelectorAll('.feature-block');
  if (featureBlocks.length) {
    gsap.set(featureBlocks, { opacity: 1, y: 0 }); // Set initial visible state

    ScrollTrigger.batch(featureBlocks, {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      },
      once: true
    });
  }

  // Code section animation
  const codeInfo = document.querySelector('.code-section__info');
  const codeWindow = document.querySelector('.code-window');
  const codeLivePreview = document.querySelector('.code-live-preview');

  if (codeInfo) {
    gsap.set(codeInfo, { opacity: 1, x: 0 });
    ScrollTrigger.create({
      trigger: codeInfo,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(codeInfo, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6 });
      },
      once: true
    });
  }

  if (codeWindow) {
    gsap.set(codeWindow, { opacity: 1, y: 0 });
    ScrollTrigger.create({
      trigger: codeWindow,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(codeWindow, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 });
      },
      once: true
    });
  }

  if (codeLivePreview) {
    gsap.set(codeLivePreview, { opacity: 1, y: 0 });
    ScrollTrigger.create({
      trigger: codeLivePreview,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(codeLivePreview, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
      },
      once: true
    });
  }

  // CTA section
  const ctaBox = document.querySelector('.cta-box');
  if (ctaBox) {
    gsap.set(ctaBox, { opacity: 1, y: 0 });
    ScrollTrigger.create({
      trigger: ctaBox,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(ctaBox, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 });
      },
      once: true
    });
  }

  // Section headers
  document.querySelectorAll('.section-header').forEach(header => {
    const elements = header.querySelectorAll('.section-header__tag, .section-header__title, .section-header__desc');
    gsap.set(elements, { opacity: 1, y: 0 });

    ScrollTrigger.create({
      trigger: header,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(elements,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
        );
      },
      once: true
    });
  });
}

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        if (typeof ScrollToPlugin !== 'undefined') {
          gsap.to(window, {
            scrollTo: { y: targetPosition, autoKill: false },
            duration: 1,
            ease: 'power3.inOut'
          });
        } else {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

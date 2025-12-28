/* ========================================
   Simple Design System - Main JavaScript
   ======================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCopyButtons();
  initCodeTabs();
  initSmoothScroll();
  initGSAPAnimations();
});

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
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      html.classList.toggle('dark', e.matches);
    }
  });
}

/* ========================================
   Copy to Clipboard
   ======================================== */
function initCopyButtons() {
  // NPM install copy button
  const installCopyBtn = document.querySelector('.hero__install-copy');
  installCopyBtn?.addEventListener('click', async () => {
    const command = installCopyBtn.dataset.copy;
    await copyToClipboard(command, installCopyBtn);
  });

  // Code preview copy button
  const codeCopyBtn = document.querySelector('.code-preview__copy');
  codeCopyBtn?.addEventListener('click', async () => {
    const codeContent = document.getElementById('codeContent');
    const text = codeContent?.textContent || '';
    await copyToClipboard(text, codeCopyBtn);
  });
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.color = 'var(--brand-green)';

    setTimeout(() => {
      button.textContent = originalText || '';
      button.style.color = '';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}

/* ========================================
   Code Preview Tabs
   ======================================== */
function initCodeTabs() {
  const tabs = document.querySelectorAll('.code-preview__tab');
  const codeContent = document.getElementById('codeContent');
  const filename = document.querySelector('.code-preview__filename');

  const codeExamples = {
    react: {
      filename: 'Button.tsx',
      code: `<span class="token-keyword">import</span> { Button } <span class="token-keyword">from</span> <span class="token-string">'simple-design-system'</span>

<span class="token-keyword">export default function</span> <span class="token-function">App</span>() {
  <span class="token-keyword">return</span> (
    <span class="token-tag">&lt;div</span> <span class="token-attr">className</span>=<span class="token-value">"flex gap-4"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-value">"primary"</span><span class="token-tag">&gt;</span>Primary<span class="token-tag">&lt;/Button&gt;</span>
      <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-value">"secondary"</span><span class="token-tag">&gt;</span>Secondary<span class="token-tag">&lt;/Button&gt;</span>
      <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-value">"outline"</span><span class="token-tag">&gt;</span>Outline<span class="token-tag">&lt;/Button&gt;</span>
      <span class="token-tag">&lt;Button</span> <span class="token-attr">variant</span>=<span class="token-value">"ghost"</span><span class="token-tag">&gt;</span>Ghost<span class="token-tag">&lt;/Button&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  )
}`
    },
    vanilla: {
      filename: 'index.html',
      code: `<span class="token-comment">&lt;!-- Import CSS --&gt;</span>
<span class="token-tag">&lt;link</span> <span class="token-attr">rel</span>=<span class="token-value">"stylesheet"</span> <span class="token-attr">href</span>=<span class="token-value">"simple-design-system.css"</span><span class="token-tag">&gt;</span>

<span class="token-comment">&lt;!-- Use components with classes --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-value">"sds-flex sds-gap-4"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-value">"sds-btn sds-btn--primary"</span><span class="token-tag">&gt;</span>Primary<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-value">"sds-btn sds-btn--secondary"</span><span class="token-tag">&gt;</span>Secondary<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-value">"sds-btn sds-btn--outline"</span><span class="token-tag">&gt;</span>Outline<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-value">"sds-btn sds-btn--ghost"</span><span class="token-tag">&gt;</span>Ghost<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>`
    },
    webcomponent: {
      filename: 'app.js',
      code: `<span class="token-comment">// Import the web component</span>
<span class="token-keyword">import</span> <span class="token-string">'simple-design-system/web-components'</span>

<span class="token-comment">// Use in your HTML</span>
<span class="token-tag">&lt;sds-button</span> <span class="token-attr">variant</span>=<span class="token-value">"primary"</span><span class="token-tag">&gt;</span>Primary<span class="token-tag">&lt;/sds-button&gt;</span>
<span class="token-tag">&lt;sds-button</span> <span class="token-attr">variant</span>=<span class="token-value">"secondary"</span><span class="token-tag">&gt;</span>Secondary<span class="token-tag">&lt;/sds-button&gt;</span>
<span class="token-tag">&lt;sds-button</span> <span class="token-attr">variant</span>=<span class="token-value">"outline"</span><span class="token-tag">&gt;</span>Outline<span class="token-tag">&lt;/sds-button&gt;</span>
<span class="token-tag">&lt;sds-button</span> <span class="token-attr">variant</span>=<span class="token-value">"ghost"</span><span class="token-tag">&gt;</span>Ghost<span class="token-tag">&lt;/sds-button&gt;</span>

<span class="token-comment">// Or use JavaScript API</span>
<span class="token-keyword">const</span> btn = document.<span class="token-function">createElement</span>(<span class="token-string">'sds-button'</span>)
btn.<span class="token-function">setAttribute</span>(<span class="token-string">'variant'</span>, <span class="token-string">'primary'</span>)
btn.textContent = <span class="token-string">'Click me'</span>`
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('code-preview__tab--active'));
      tab.classList.add('code-preview__tab--active');

      // Update code content
      const tabType = tab.dataset.tab;
      const example = codeExamples[tabType];

      if (example && codeContent && filename) {
        codeContent.innerHTML = example.code;
        filename.textContent = example.filename;
      }
    });
  });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ========================================
   GSAP Animations
   ======================================== */
function initGSAPAnimations() {
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded, skipping animations');
    return;
  }

  // Register ScrollTrigger plugin
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero Section Animation
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTimeline
    .from('.hero__badge', {
      opacity: 0,
      y: 20,
      duration: 0.6
    })
    .from('.hero__title', {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.3')
    .from('.hero__subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.4')
    .from('.hero__cta', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.3')
    .from('.hero__install', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.3')
    .from('.hero__preview', {
      opacity: 0,
      x: 50,
      duration: 0.8
    }, '-=0.6');

  // Animate gradient blobs
  gsap.to('.hero__gradient--1', {
    x: 50,
    y: 30,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.hero__gradient--2', {
    x: -30,
    y: -50,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Features Section Animation (on scroll)
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features__grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1
    });

    // Stats Animation
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.stats__grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15
    });

    // Animate stat numbers
    const statValues = document.querySelectorAll('.stat-card__value[data-count]');
    statValues.forEach(stat => {
      const count = parseInt(stat.dataset.count);
      if (!isNaN(count)) {
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 85%',
          onEnter: () => {
            gsap.from(stat, {
              textContent: 0,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              onUpdate: function() {
                stat.textContent = Math.round(this.targets()[0].textContent) + (count === 100 ? '%' : '+');
              }
            });
          },
          once: true
        });
      }
    });

    // Code Preview Animation
    gsap.from('.code-preview__window', {
      scrollTrigger: {
        trigger: '.code-preview',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8
    });

    // Frameworks Animation
    gsap.from('.framework-icon', {
      scrollTrigger: {
        trigger: '.frameworks__grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1
    });

    // Changelog Animation
    gsap.from('.changelog-item', {
      scrollTrigger: {
        trigger: '.changelog__list',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.2
    });
  }
}

/* ========================================
   Header Scroll Effect
   ======================================== */
let lastScrollY = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (header) {
    if (currentScrollY > 100) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  lastScrollY = currentScrollY;
}, { passive: true });

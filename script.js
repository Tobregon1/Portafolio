// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Active link on scroll
const links = document.querySelectorAll('.site-nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll() {
  const y = window.scrollY + 90;
  let current = null;
  sections.forEach(sec => {
    if (sec.offsetTop <= y) current = sec.id;
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll);
onScroll();

// Year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Count up (simple demo)
document.querySelectorAll('[data-count]').forEach(el => {
  const target = Number(el.dataset.count || '0');
  let n = 0;
  const step = Math.ceil(target / 40);
  const tick = () => {
    n += step;
    if (n >= target) { el.textContent = target + '%'; return; }
    el.textContent = n + '%';
    requestAnimationFrame(tick);
  };
  tick();
});

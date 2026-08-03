// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open');
  });
}

// Size selector interaction
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
});

// Category / material selector interaction
document.querySelectorAll('.spec-list').forEach(list => {
  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      list.querySelectorAll('a').forEach(a => a.classList.remove('is-active'));
      link.classList.add('is-active');
    });
  });
});

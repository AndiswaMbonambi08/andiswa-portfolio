function loadPhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = document.getElementById('photo-img');
    img.src = ev.target.result;
    img.style.display = 'block';
    document.getElementById('photo-placeholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}
const obs = new IntersectionObserver(entries => {
  entries.forEach((en, i) => {
    if (en.isIntersecting) {
      en.target.style.transitionDelay = (i * 0.06) + 's';
      en.target.classList.add('visible');
      obs.unobserve(en.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
function openModal(title) {
  document.getElementById('modal-ttl').textContent = title;
  document.getElementById('mw').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('mw').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOuter(e) {
  if (e.target === document.getElementById('mw')) closeModal();
}
function sendMsg() {
  const n = document.getElementById('cn').value.trim();
  const e = document.getElementById('ce').value.trim();
  const m = document.getElementById('cm').value.trim();
  if (!n || !e || !m) { alert('Please fill in your name, email, and message.'); return; }
  const ok = document.getElementById('form-success');
  ok.style.display = 'block';
  ['cn','ce','cs','cm'].forEach(id => document.getElementById(id).value = '');
  setTimeout(() => ok.style.display = 'none', 5000);
}

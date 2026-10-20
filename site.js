window.PH = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23E4EAE6"/%3E%3Ctext x="400" y="308" font-family="Inter,Arial,sans-serif" font-size="30" fill="%23667A6E" text-anchor="middle"%3E%D0%9C%D0%B5%D1%81%D1%82%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D1%84%D0%BE%D1%82%D0%BE%3C/text%3E%3C/svg%3E';

function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window._tt); window._tt = setTimeout(() => t.classList.remove('show'), 3500);
}
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function toggleNav() { document.getElementById('nav').classList.toggle('open'); }

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-backdrop').forEach(b => b.addEventListener('click', e => { if (e.target === b) b.style.display = 'none'; }));
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
});
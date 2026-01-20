
const backdrop = document.getElementById('modal-backdrop');
const closeBtn = document.querySelector('.close-modal');
const phoneIcon = document.querySelector('.hero-section-button');

closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
});
phoneIcon.addEventListener('click', (e) => {
    e.preventDefault();
    backdrop.classList.remove('is-hidden');
});
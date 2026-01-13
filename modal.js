
const backdrop = document.getElementById('modal-backdrop');
const closeBtn = document.querySelector('.close-modal');
const phoneIcon = document.querySelector('.phone-icon');

closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
});
phoneIcon.addEventListener('click', (e) => {
    e.preventDefault();
    backdrop.classList.remove('is-hidden');
});
const toggleBtn = document.querySelector('.toggle');
const section = document.querySelector('section');

toggleBtn.addEventListener('click', () => {
    section.classList.toggle('active');
})
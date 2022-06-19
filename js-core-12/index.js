const openModalBtn = document.querySelector('.openModalBtn');
const closeModalBtn = document.querySelector('.closeModalBtn');

const modal = document.querySelector('.overlay');

// change the background color and text of the buttons when you hover over them
openModalBtn.addEventListener('mouseover', () => {
    openModalBtn.classList.add('active');
})

openModalBtn.addEventListener('mouseout', () => {
    openModalBtn.classList.remove('active');
})

closeModalBtn.addEventListener('mouseover', () => {
    closeModalBtn.classList.remove('active');
})

closeModalBtn.addEventListener('mouseout', () => {
    closeModalBtn.classList.add('active');
})

// show and hide overlay
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('ifHidden'); 
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('ifHidden');
})

modal.addEventListener('click', (event) => {
    event.target.classList.contains('overlay') && modal.classList.add('ifHidden');
})

window.addEventListener('keydown', (e) => {
    e.code === 'Escape' && modal.classList.add('ifHidden');
})
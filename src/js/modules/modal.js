const modal = () => {
    const btnForm = document.querySelectorAll('.btn-form');
    const modal = document.querySelector('#modal');

    const escapeHandler = (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    }
    const openModal = (e) => {
        modal.classList.add('show');
        document.addEventListener('keydown', escapeHandler);
    }
    const closeModal = () => {
        modal.classList.remove('show');

        document.removeEventListener('keydown', escapeHandler);
    }

    btnForm.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('modal-close') || target == modal) {
            closeModal();
        }
    });

    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    burger.addEventListener('click', () => {
        if(!burger.classList.contains('burger--active')) {
            burger.classList.add('burger--active');
            headerNav.style.display = 'block'

        }
    })
}
  
export default modal;

	
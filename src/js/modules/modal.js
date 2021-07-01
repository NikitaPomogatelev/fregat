const modal = () => {
    const btnForm = document.querySelectorAll('.btn-form');
    const modal = document.querySelector('#modal');
    const modalTitle = modal.querySelector('.modal__title');
    const modalBtn = modal.querySelector('.modal__btn');

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
        btn.addEventListener('click', () => {
            const btnText = btn.textContent;
            modalTitle.textContent = btnText;
            modalBtn.textContent = btnText;
            openModal();
        });
    });

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('modal-close') || target == modal) {
            closeModal();
        }
    });

    function disableScroll() {
        let pagePosition = window.scrollY;
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
      }
      
      function enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({
          top: pagePosition,
          left: 0
        });
        document.body.removeAttribute('data-position');
      }
      
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        headerNav.classList.toggle('header__nav--active')
        if (burger.classList.contains('burger--active')) {
            disableScroll();
          } else {
            enableScroll();
          }
    });
}
  
export default modal;

	
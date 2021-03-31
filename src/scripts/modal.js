window.addEventListener('DOMContentLoaded', () => {
    const $btnOpenModal = document.querySelector('.settings');
    const $modal = document.querySelector('#modal');
    const $btnCloseModal = document.querySelector('.modal__btn_close');
    const $btnClose = document.querySelector('#close-modal');

    $btnOpenModal.addEventListener('click', () => {
        $modal.classList.add('open');
    })
    $btnCloseModal.addEventListener('click', () => {
        $modal.classList.remove('open')
    })
    $btnClose.addEventListener('click', () => {
        $modal.classList.remove('open')
    })

});
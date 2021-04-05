import {open, close} from './utils';

window.addEventListener('DOMContentLoaded', () => {
    const $btnOpenModal = document.querySelector('.settings');
    const $modal = document.querySelector('#modal');
    const $btnCloseModalX = $modal.querySelector('.modal__btn_close');
    const $btnCloseModal = $modal.querySelector('#close-modal');


    $btnOpenModal.addEventListener('click', () => {
        open($modal);
    })
    $btnCloseModalX.addEventListener('click', () => {
        close($modal);
    })
    $btnCloseModal.addEventListener('click', () => {
        close($modal);
    })

});
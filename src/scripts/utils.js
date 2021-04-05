// modal
export function open(selector) {
    return selector.classList.add('open');
}
export function close(selector) {
    return selector.classList.remove('open');
}

// timer
export function visibleBtn(selector) {
    return selector.classList.add('btn-active');
}
export function hiddenBtn(selector) {
    return selector.classList.remove('btn-active');
}
window.addEventListener('DOMContentLoaded', () => {
    const $parentInput = document.querySelector('.modal__items');
    const $form = document.querySelector('.modal__form');

    const $circleColor = document.querySelector('.progress-bar__circle');
    const $clock = document.querySelector('.clock-face');
    const $clockBtns = document.querySelectorAll('.timer__btn-mode');

    const $tabs = document.querySelectorAll('.tabs__btn');

    $parentInput.addEventListener('click', (e) => {
        const input = e.target.parentElement.parentElement.children[1];
        if (e.target.matches('[data-up]')) {
            input.value++;
        }
        if (e.target.matches('[data-down]')) {
            input.value--;
        }

        if (input.value < 1) {
            input.value = 1;
        }
    })

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const colorRadioValue = $form.elements.color.value;
        const fontRadioValue = $form.elements.font.value;

        $circleColor.style.stroke = colorRadioValue;
        $clock.style.fontFamily = fontRadioValue;

        $tabs.forEach(tab => {
            if (tab.classList.contains('tabs__btn_active')) {
                tab.style.backgroundColor = colorRadioValue;
            } else {
                tab.style.backgroundColor = 'transparent';
            }
            tab.addEventListener('click', () => {
                $tabs.forEach(tab => {
                    tab.style.backgroundColor = 'transparent';
                })
                tab.style.backgroundColor = colorRadioValue;
            })
            tab.style.fontFamily = fontRadioValue; 
        })

        $clockBtns.forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.style.color = colorRadioValue;
            })
            btn.addEventListener('mouseout', () => {
                btn.style.color = '#D7E0FF';
            })
            btn.style.fontFamily = fontRadioValue;
        })

    })
});
window.addEventListener('DOMContentLoaded', () => {
    
    const $form = document.querySelector('.modal__form');
    const $parentInput = document.querySelector('.modal__items');
    //
    const $circleColor = document.querySelector('.progress-bar__circle');
    const $tabs = document.querySelectorAll('.tabs__btn');

    const $clock = document.querySelector('.clock-face');
    const $btnClock = document.querySelector('.timer__btn-mode');

    $parentInput.addEventListener('click', (e) => {
        const input = e.path[2].children[1];
        if (e.target.matches('[data-up]')) {
            input.value++;
        }
        if (e.target.matches('[data-down]')) {
            input.value--;
        }

    })

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const colorRadio = $form.elements.color.value;
        const fontRadio = $form.elements.font.value;
        const pomodoroInput = $form.elements.pomodoro.value;
        const shorkBreakInput = $form.elements['short-break'].value;
        const longBreakInput = $form.elements['long-break'].value;

        function initialState(colorRadio = '#F87070') {
            localStorage.setItem('color-radio', colorRadio);
        }
        initialState(colorRadio);
        
        $circleColor.style.stroke = colorRadio;

        $tabs.forEach(tab => {
            if(tab.classList.contains('tabs__btn_active')) {
                tab.style.backgroundColor = colorRadio; 
            }
            tab.style.fontFamily = fontRadio;
        })
        $clock.style.fontFamily = fontRadio;
        $btnClock.style.fontFamily = fontRadio;

    });
});
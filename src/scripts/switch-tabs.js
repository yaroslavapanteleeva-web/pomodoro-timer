window.addEventListener('DOMContentLoaded', () => {
    const $btnsTabs = document.querySelectorAll('.tabs__btn');
    
    $btnsTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            $btnsTabs.forEach(btn => {
                btn.classList.remove('tabs__btn_active');
                btn.style.backgroundColor = 'transparent';
            });
            btn.classList.add('tabs__btn_active');
            const color = localStorage.getItem('color-radio');
            btn.style.backgroundColor = color;
        })
    })

    
});
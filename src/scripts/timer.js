import { setProgress } from "./progress-bar";
import { hiddenBtn, visibleBtn } from "./utils";

window.addEventListener('DOMContentLoaded', () => {
    // input active
    const $pomodoroInput = document.querySelector('#pomodoro');
    // time
    const $minutes = document.querySelector('#mins');
    const $seconds = document.querySelector('#secs');
    // btn timer
    const $startBtn = document.querySelector('#start');
    const $pauseBtn = document.querySelector('#pause');
    const $restartBtn = document.querySelector('#restart');
    const $bellTimer = document.querySelector('.timer__bell');

    const $submitBtn = document.querySelector('.modal__btn');
    const $tabsBtn = document.querySelectorAll('.tabs__btn');
    const $timeInputs = document.querySelectorAll('.field__input');

    let paused, initial, totalSecs, secs;

    $tabsBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            $tabsBtn.forEach(btn => {
                btn.classList.remove('tabs__btn_active');
            });
            btn.classList.add('tabs__btn_active');
            if (btn.classList.contains('tabs__btn_active')) {
                const mode = e.target.dataset.time;
                $timeInputs.forEach(input => {
                    if (mode === input.id) {
                        clearTimeout(initial);
                        setProgress(100);
                        $seconds.textContent = `${0}0`;
                        $minutes.textContent = 0;
                        $minutes.textContent = input.value;
                        
                        if (!($minutes.textContent.charAt(0) == '0') && $minutes.textContent < 10) {
                            $minutes.textContent = `0${$minutes.textContent}`;
                        } else {
                            $minutes.textContent = $minutes.textContent;
                        }

                        const mins = +$minutes.textContent;
                        totalSecs = mins * 60;
                        secs = mins * 60;
                        
                        visibleBtn($startBtn);
                        hiddenBtn($pauseBtn);
                        hiddenBtn($restartBtn);
                    }
                })

            }
        })
    })



    $submitBtn.addEventListener('click', (e) => {
        $tabsBtn.forEach(btn => {
            if (btn.classList.contains('tabs__btn_active')) {
                const attr = btn.getAttribute('data-time');
                $timeInputs.forEach(input => {
                    if (attr === input.id) {
                        $minutes.textContent = input.value < 10 ? `0${input.value}` : input.value;
                    }
                })
            }
        })
        const mins = +$minutes.textContent;
        totalSecs = mins * 60;
        secs = mins * 60;
    })

    $minutes.textContent = $pomodoroInput.value < 10 ? `0${$pomodoroInput.value}` : $pomodoroInput.value;
    
    const mins = +$minutes.textContent;
    totalSecs = mins * 60;
    secs = mins * 60;

    $startBtn.addEventListener('click', (e) => {
        setTimeout(timer, 60);
        hiddenBtn($startBtn);
        visibleBtn($pauseBtn);
        paused = false;
    });

    $pauseBtn.addEventListener('click', () => {
        if (paused === undefined) {
            return;
        }
        if (paused) {
            paused = false;
            initial = setTimeout(timer, 60);
        } else {
            visibleBtn($startBtn);
            hiddenBtn($pauseBtn);
            clearTimeout(initial);
            paused = true;
        }
    });

    $restartBtn.addEventListener('click', () => {
        secs = totalSecs;
        hiddenBtn($restartBtn);
        visibleBtn($pauseBtn);
        setTimeout(timer, 60);
        paused = false;
    });

    function timer() {
        let minutes = Math.floor(secs / 60);
        let seconds = secs % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        $minutes.textContent = minutes;
        $seconds.textContent = seconds;
        if (secs > 0) {
            let percent = Math.floor(secs * 100 / totalSecs);
            setProgress(percent);
            secs--;
            initial = setTimeout(timer, 1000);
        } else {
            minutes = 0;
            seconds = 0;
            $bellTimer.play();
            visibleBtn($restartBtn);
            hiddenBtn($pauseBtn);
            setProgress(100);
        }
    }
});
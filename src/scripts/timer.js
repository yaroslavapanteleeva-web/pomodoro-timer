import { setProgress } from "./progressbar";

window.addEventListener('DOMContentLoaded', () => {
    const $timer = document.querySelector('#timer');
    const $tabs = document.querySelector('#tabs');
    const $btnStart = document.querySelector('#start');
    const $btnPause = document.querySelector('#pause');
    const $btnRestart = document.querySelector('#restart');
    const $minutes = document.querySelector('#mins');
    const $seconds = document.querySelector('#secs');

    let startMins = $minutes.textContent;

    let totalTime = startMins * 60;
    let time = startMins * 60;

    let initial, paused;

    function decrementT() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        $minutes.innerHTML = minutes;
        $seconds.innerHTML = seconds;
        if (time > 0) {
            let persent = Math.floor(time * 100 / totalTime);
            setProgress(persent);
            time--;
            initial = setTimeout(decrementT, 1000);
        } else {
            $btnRestart.classList.add('btn-active');
            $btnPause.classList.remove('btn-active');
            clearTimeout(initial);
            setProgress(100);
        }
    }

    $btnStart.addEventListener('click', (e) => {
        setTimeout(decrementT, 10);
        $btnStart.classList.remove('btn-active');
        $btnPause.classList.add('btn-active');
        paused = false;

    })
    $btnPause.addEventListener('click', () => {
        if (paused === undefined) {
            return;
        }
        if (paused) {
            paused = false;
            initial = setTimeout(decrementT, 10);
        } else {
            $btnStart.classList.add('btn-active');
            $btnPause.classList.remove('btn-active');
            clearTimeout(initial);
            paused = true;
        }
    })
    $btnRestart.addEventListener('click', () => {
        $btnRestart.classList.remove('btn-active');
        $btnPause.classList.add('btn-active');
        startMins = 20;
        time = startMins * 60;
        totalTime = startMins * 60;
        setTimeout(decrementT, 10);
        paused = false;
        
    })
    /* $tabs.addEventListener('click', (e) => {
        const modeTime = e.target.dataset.time;
        switch (modeTime) {
            case 'short-break':
                startMins = 5;
                time = startMins * 60;
                totalTime = startMins * 60;
                break;
            case 'long-break':
                startMins = 15;
                time = startMins * 60;
                totalTime = startMins * 60;
                break;
            default:
                startMins = 20;
                time = startMins * 60;
                totalTime = startMins * 60;
                break;
        }

    }) */
    
});
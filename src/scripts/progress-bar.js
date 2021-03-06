const $circle = document.querySelector('.progress-bar__circle');

const radius = $circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

$circle.style.strokeDasharray = `${circumference} ${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    $circle.style.strokeDashoffset = offset;
}
export {setProgress};


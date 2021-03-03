const hourglassAnimation = () => {
    const hourglass_icon = document.getElementById('hourglass');
    const start = '<i class="fas fa-hourglass-start"></i>';
    const half = '<i class="fas fa-hourglass-half"></i>';
    const end = '<i class="fas fa-hourglass-end"></i>';

    hourglass_icon.innerHTML = start;
    setTimeout(function() {
        hourglass_icon.innerHTML = half;
    }, 1000);
    setTimeout(function() {
        hourglass_icon.innerHTML = end;
    }, 2000);
};
hourglassAnimation();
setInterval(hourglassAnimation, 3000);

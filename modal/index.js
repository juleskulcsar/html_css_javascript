const modal = document.getElementById('modal');
const btn = document.getElementById('btn');
const span = document.getElementById('close');

btn.onclick = function() {
    modal.style.display = 'block';
    btn.style.visibility = 'hidden';
};

span.onclick = function() {
    modal.style.display = 'none';
    btn.style.visibility = 'visible';
};

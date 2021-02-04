let container = document.getElementById('container');
let containerWidth = document.getElementById('width');
let containerHeight = document.getElementById('height');

const containerOffsetWidth = () => {
    containerWidth.innerHTML = container.offsetWidth;
    containerHeight.innerHTML = container.offsetHeight;
};

const observer = new ResizeObserver(containerOffsetWidth);
observer.observe(container);

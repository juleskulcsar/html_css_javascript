const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tabcontent');

function openTab(e, tabName) {
    Array.from(tabContent).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab).forEach(
        elem => (elem.className = elem.className.replace('active', ''))
    );
    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += ' active';
}

let frame  = document.getElementById('FRAME_Img')
const asphalt = `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`
const red = `invert(90%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(50%) contrast(90%)`
const blue = `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`

const frameColors = {
    asphalt : `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    red : `invert(90%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(50%) contrast(90%)`,
    blue : `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    orange: `invert(13%) sepia(83%) saturate(6812%) hue-rotate(354deg) brightness(85%) contrast(103%)`
}
let frameImage
let forkImage
let saddle
let rims
let lever
let barTape
       
frame.addEventListener("load",function(){
    let svgFrame = frame.contentDocument;
    frameImage = svgFrame.getElementById("FRAME_Image");
    forkImage = svgFrame.getElementById("FORK_Image-2");
    saddle = svgFrame.getElementById("SADDLE_Image-2");
    rims = svgFrame.getElementById("RIM_Image-2");
    lever = svgFrame.getElementById("LEVER_Image-2");
    barTape = svgFrame.getElementById("BAR_TAPE_Image-2");
})

let colorChangeBtn = document.getElementsByClassName("color")
const removeBorder = ()=> {Array.from(colorChangeBtn).forEach(elem=>{
    elem.style.removeProperty('border')
})}
Array.from(colorChangeBtn).forEach(elem=>{
    elem.addEventListener('click', ()=>{
        removeBorder()
        elem.style.border = `2px solid white`
        frameImage.style.removeProperty('filter')
        frameImage.style.filter = frameColors[elem.id]
    })
})

const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tabcontent');

function openTab(e, tabName) {
    Array.from(tabContent).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab).forEach(
        elem => (elem.className = elem.className.replace('active', ''))
    );
    document.getElementById(tabName).style.display = 'flex';
    e.currentTarget.className += ' active';
}


const rotate = document.getElementById('rotate')
rotate.addEventListener('click', ()=>{

    frameImage.classList.add('rotate')
    
})
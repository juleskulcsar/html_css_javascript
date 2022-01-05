let frame  = document.getElementById('FRAME_Img')
let logo =document.getElementById('logo')

const frameColors = {
    frame_asphalt : `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    frame_red : `invert(90%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(50%) contrast(90%)`,
    frame_blue : `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    frame_orange: `invert(13%) sepia(83%) saturate(6812%) hue-rotate(354deg) brightness(85%) contrast(103%)`,
    frame_green: ``
}

const forkColors = {
    fork_blue: `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    fork_asphalt: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    fork_red: `invert(90%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(50%) contrast(90%)`,
    fork_green: ``
}

const rimsColors ={
    rims_asphalt: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    rims_red: `invert(90%) sepia(30%) saturate(5049%) hue-rotate(358deg) brightness(30%) contrast(90%)`,
    rims_green: ``
}

const saddleColors = {
    saddle_blue: `invert(42%) sepia(13%) saturate(8994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    saddle_green: `invert(20%) sepia(80%) saturate(5049%) hue-rotate(8358deg) brightness(30%) contrast(90%)`,
    saddle_asphalt: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    saddle_red: `invert(60%) sepia(20%) saturate(7049%) hue-rotate(5358deg) brightness(40%) contrast(90%)`
}

const leverColors = {
    lever_asphalt: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(98%)`,
    lever_black: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(148%)`
}

const barTapeColors = {
    barTape_green: `invert(20%) sepia(80%) saturate(5049%) hue-rotate(8358deg) brightness(30%) contrast(90%)`,
    barTape_asphalt: `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(98%)`,
    barTape_red: `invert(30%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(30%) contrast(90%)`
}

let frameImage
let forkImage
let saddle
let rims
let lever
let barTape
let logoImage
       
frame.addEventListener("load",function(){
    let svgFrame = frame.contentDocument;
    let logoDoc = logo.contentDocument;
    logoImage = logoDoc.getElementById("logoColor");
    frameImage = svgFrame.getElementById("FRAME_Image");
    forkImage = svgFrame.getElementById("FORK_Image-2");
    saddle = svgFrame.getElementById("SADDLE_Image-2");
    rims = svgFrame.getElementById("RIM_Image-2");
    lever = svgFrame.getElementById("LEVER_Image-2");
    lever.style.filter = `invert(10%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(98%)`
    barTape = svgFrame.getElementById("BAR_TAPE_Image-2");
})

let frameColorChange = document.getElementsByClassName("color")
const removeBorder = ()=> {Array.from(frameColorChange).forEach(elem=>{
    elem.style.removeProperty('border')
})}
Array.from(frameColorChange).forEach(elem=>{
    elem.addEventListener('click', ()=>{
        removeBorder()
        elem.style.border = `3px solid white`
        // frameImage.style.removeProperty('filter')
        frameImage.style.filter = frameColors[elem.id]
        forkImage.style.filter = forkColors[elem.id]
        saddle.style.filter = saddleColors[elem.id]
        rims.style.filter = rimsColors[elem.id]
        lever.style.filter = leverColors[elem.id]
        barTape.style.filter = barTapeColors[elem.id]
    
    })
})


const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tabcontent');
const tab2 = document.getElementsByClassName('tab2');
const tabContent2 = document.getElementsByClassName('tabcontent2');

function openTab(e, tabName) {
    Array.from(tabContent).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab).forEach(
        elem => (elem.className = elem.className.replace(' active', ''))
    );
    document.getElementById(tabName).style.justifyContent = 'space-around';
    document.getElementById(tabName).style.display = 'flex';
    e.currentTarget.className += ' active';
}

function openTab2(e, tabName) {
    Array.from(tabContent2).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab2).forEach(
        elem => (elem.className = elem.className.replace(' active', ''))
    );
    document.getElementById(tabName).style.justifyContent = 'space-around';
    document.getElementById(tabName).style.display = 'flex';
    e.currentTarget.className += ' active';
}


const tabs = document.querySelector('.tabs');
const tabs2 = document.querySelector('.tabs2');
const colorGroup = document.querySelector('.colorGroup')
const move = document.getElementById('move')
move.addEventListener('click', ()=>{
    colorGroup.id = 'test2'
    colorGroup.style.marginTop = '-40%'
    colorGroup.style.height = '100vh'
    tabs2.style.display= 'initial'
    tabs.style.display="hidden"
})

//dark mode
document.querySelector(".btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector(".btn").innerHTML = "Light";
    // logoImage.style.fill = "#d5d5d8"
    logoImage.style.fill = "34c5f3"

  } else {
    document.querySelector(".btn").innerHTML = "Dark";
    // logoImage.style.fill = "#212121"
    logoImage.style.fill = "34c5f3"
    
  }
});
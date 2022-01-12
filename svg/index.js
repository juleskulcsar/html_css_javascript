const logo =document.getElementById('logo');
const frameColorChange = document.getElementsByClassName("color");
const frame  = document.getElementById('FRAME_Img');
const frame_2 = document.getElementById('FRAME_Img_2');
const frame_3 = document.getElementById('FRAME_Img_3');
const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tabcontent');
const tab2 = document.getElementsByClassName('tab2');
const tabContent2 = document.getElementsByClassName('tabcontent2');
const tabs = document.querySelector('.tabs');
const tabs2 = document.querySelector('.tabs2');
const colorGroup = document.querySelector('.colorGroup')
const move = document.getElementById('move')

let frameImage, forkImage, saddle, rims, bottle, barTape, logoImage, parts, spoke, shadows;
const frames = [frame, frame_2, frame_3];

let test = 'abc'

//bike elements colors
const colors = {
    partsColor : `invert(0%) sepia(6%) saturate(24%) hue-rotate(331deg) brightness(3%) contrast(97%)`,
    spokeColor : `invert(5%) sepia(4%) saturate(253%) hue-rotate(228deg) brightness(73%) contrast(89%)`
}
const frameColors = {
    frame_asphalt : `invert(90%) sepia(32%) saturate(30%) hue-rotate(182deg) brightness(70%) contrast(98%)`,
    frame_red : `invert(80%) sepia(20%) saturate(7715%) hue-rotate(354deg) brightness(42%) contrast(113%)`,
    frame_blue : `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    frame_orange: `invert(63%) sepia(20%) saturate(6812%) hue-rotate(354deg) brightness(45%) contrast(103%)`,
    frame_green: `invert(84%) sepia(63%) saturate(966%) hue-rotate(86deg) brightness(97%) contrast(86%)`
}

const forkColors = {
    fork_blue: `invert(62%) sepia(13%) saturate(5994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    fork_asphalt: `invert(80%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(10%) contrast(98%)`,
    fork_red: `invert(90%) sepia(40%) saturate(5049%) hue-rotate(358deg) brightness(50%) contrast(90%)`,
    fork_green: `invert(84%) sepia(63%) saturate(966%) hue-rotate(86deg) brightness(97%) contrast(86%)`
}

const rimsColors = {
    rims_asphalt: `invert(90%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    rims_red: `invert(80%) sepia(20%) saturate(7715%) hue-rotate(354deg) brightness(42%) contrast(113%)`,
    rims_green: `invert(84%) sepia(63%) saturate(966%) hue-rotate(86deg) brightness(97%) contrast(86%)`
}

const saddleColors = {
    saddle_blue: `invert(82%) sepia(13%) saturate(8994%) hue-rotate(215deg) brightness(23%) contrast(97%)`,
    saddle_green: `invert(80%) sepia(80%) saturate(5049%) hue-rotate(8358deg) brightness(30%) contrast(90%)`,
    saddle_asphalt: `invert(90%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(50%) contrast(98%)`,
    saddle_red: `invert(80%) sepia(20%) saturate(7715%) hue-rotate(354deg) brightness(42%) contrast(113%)`
}

const bottleColors = {
    bottle_asphalt: `invert(80%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(98%)`,
    bottle_black: `invert(100%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(148%)`,
    bottle_red: `invert(60%) sepia(20%) saturate(7049%) hue-rotate(5358deg) brightness(40%) contrast(90%)`,
}

const barTapeColors = {
    barTape_green: `invert(60%) sepia(10%) saturate(5049%) hue-rotate(8358deg) brightness(13%) contrast(90%)`,
    barTape_asphalt: `invert(80%) sepia(32%) saturate(0%) hue-rotate(182deg) brightness(30%) contrast(98%)`,
    barTape_red: `invert(80%) sepia(60%) saturate(3715%) hue-rotate(354deg) brightness(22%) contrast(113%)`
}

//dark mode
document.querySelector(".btn").addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        document.querySelector(".btn").innerHTML = "Dark Mode";
        logoImage.style.fill = "34c5f3"
    } else {
        document.querySelector(".btn").innerHTML = "Light Mode";
        logoImage.style.fill = "34c5f3"
    }
});

//set bike colors at load
for(let i = 0; i < frames.length; i++){
    frames[i].addEventListener("load", ()=>{
        svgFrame = frames[i].contentDocument 
        frameImage = svgFrame.getElementById('FRAME_Image') 
        frameImage.style.filter = frameColors.frame_green;
        forkImage = svgFrame.getElementById("FORK_Image");
        forkImage.style.filter = forkColors.fork_asphalt;
        saddle = svgFrame.getElementById("SADDLE_Image");
        saddle.style.filter = saddleColors.saddle_asphalt;
        rims = svgFrame.getElementById("RIM_Image");
        rims.style.filter = rimsColors.rims_asphalt;
        bottle = svgFrame.getElementById("BOTTLE_Image");
        bottle.style.filter = bottleColors.bottle_black;
        barTape = svgFrame.getElementById("BARTAPE_Image-2");
        barTape.style.filter = barTapeColors.barTape_asphalt;
        parts = svgFrame.getElementById("PARTS_Image");
        parts.style.filter = colors.partsColor;
        spoke = svgFrame.getElementById("SPOKE_Image");
        spoke.style.filter = colors.spokeColor;
        shadows = svgFrame.getElementById("SHADOWS_Image");
        shadows.style.filter = colors.partsColor;
    })
}

//change bike elements colors on click
const removeBorder = ()=> {Array.from(frameColorChange).forEach(elem=>{
    elem.style.removeProperty('border')
})}
Array.from(frameColorChange).forEach(elem=>{
    elem.addEventListener('click', ()=>{
        removeBorder()
        elem.style.border = `3px solid white`
        for(let i=0; i<frames.length; i++){
            svgFrame = frames[i].contentDocument;
            frameImage = svgFrame.getElementById('FRAME_Image') 
            forkImage = svgFrame.getElementById("FORK_Image");
            saddle = svgFrame.getElementById("SADDLE_Image");
            rims = svgFrame.getElementById("RIM_Image");
            bottle = svgFrame.getElementById("BOTTLE_Image");
            barTape = svgFrame.getElementById("BARTAPE_Image-2");
            frameImage.style.filter = frameColors[elem.id]
            forkImage.style.filter = forkColors[elem.id]
            saddle.style.filter = saddleColors[elem.id]
            rims.style.filter = rimsColors[elem.id]
            bottle.style.filter = bottleColors[elem.id]
            barTape.style.filter = barTapeColors[elem.id]
        }
    })
})

//bike elements tab switch 
function openTab(e, tabName) {
    Array.from(tabContent).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab).forEach(
        elem => {
            elem.className = elem.className.replace(' active', '')
            elem.style.borderTop = '1px transparent solid'
            elem.style.borderLeft = '1px transparent solid'
            elem.style.borderRight = '1px transparent solid'
        }
    );
    document.getElementById(tabName).style.justifyContent = 'space-around';
    document.getElementById(tabName).style.display = 'flex';
    e.currentTarget.className += ' active';
}

function openTab2(e, tabName) {
    Array.from(tabContent2).forEach(elem => (elem.style.display = 'none'));
    Array.from(tab2).forEach(
        elem => {
            elem.className = elem.className.replace(' active', '')
            elem.style.borderTop = '1px transparent solid'
            elem.style.borderLeft = '1px transparent solid'
            elem.style.borderRight = '1px transparent solid'
        }
    );
    document.getElementById(tabName).style.justifyContent = 'space-around';
    document.getElementById(tabName).style.display = 'flex';
    e.currentTarget.className += ' active';
}

//slide-up bike elements tabs
move.addEventListener('click', ()=>{
    console.log("move inner text: ", move.innerText)
    if(move.innerText === "continue"){
        let rightContainer = document.querySelector('.rightContainer')
        let leftContainer = document.querySelector('.leftContainer')
        let main = document.querySelector('.main')
        let next = document.querySelector('.next')
        let prev = document.querySelector('.prev')
        // let backArrow = document.querySelector('.animated-arrow')

        leftContainer.id="slideRight"
        rightContainer.style.display ='none'
        // main.style.display = 'block'
        next.style.right='-5%'
        prev.style.marginLeft = '1em'

        let detailsCard = document.querySelector('.details-card')
        detailsCard.style.display = 'inline'
    }
    tabs.style.visibility="hidden"
    colorGroup.id = 'slideUp'
    colorGroup.style.marginTop = '-17em'
    tabs2.style.display= 'initial'
    move.innerText = "continue"
    back.style.visibility="visible"
    back.style.display = "inline-block"
    let backArrow = document.querySelector('.animated-arrow')
})

//back to frame colors
let back = document.querySelector('.animated-arrow')
back.addEventListener('click', ()=>{
    tabs.style.visibility='visible'
    tabs.style.display='initial'
    colorGroup.id = 'slideDown'
    colorGroup.style.marginTop = '10em'
    tabs2.style.display= 'none'
    move.innerText = "next"
    back.style.visibility="hidden"
})

//bike angle views image slider
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) =>{
  showSlides(slideIndex += n);
}
const currentSlide = (n) =>{
  showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("bikeSlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" is_active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " is_active";
}

let button = document.getElementById('btn')
let show = false


button.addEventListener('click', ()=>{
    show = !show;
    if(show){
        document.getElementById('pass').type = 'text'
        button.innerText = "hide"
    } else {
        document.getElementById('pass').type = 'password';
        button.innerText = "show"
    }
})
const logo =document.getElementById('logo-bottom');
document.querySelector(".btn").addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        document.querySelector(".btn").innerHTML = "Dark Mode";
        logoImage.style.fill = "34c5f3"
    } else {
        document.querySelector(".btn").innerHTML = "Light Mode";
        logoImage.style.fill = "34c5f3"
    }
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("inView");
    } else {
      reveals[i].classList.remove("inView");
    }
  }
}

window.addEventListener("scroll", reveal);
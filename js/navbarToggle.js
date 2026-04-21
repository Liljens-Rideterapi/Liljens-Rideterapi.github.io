navbar = document.getElementById("navbar");
navbar.classList.add('nav-background-light');

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < 400) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-150px";
    }
})

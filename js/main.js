AOS.init({
    offset: 100,
    duration: 200,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
    disable: 'mobile'
});

window.onscroll = function() {
    scrollFunction();
};

var menu = document.getElementById("hamMenu");
var sticky = menu.offsetTop;


function scrollFunction() {
    if (window.pageYOffset > sticky) {
        menu.style.background = "#000000";

    } else {
        menu.style.background = "transparent";

    }
}







function openNav() {
    navbar.style.width = "250px";
}

function closeNav() {
    navbar.style.width = "0";
}
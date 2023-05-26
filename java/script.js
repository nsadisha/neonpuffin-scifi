let menuToggler = document.querySelector("#toggle-menu")
let menu = document.querySelector("#header .menu");

menuToggler.addEventListener('click', function(e){
    menu.classList.toggle('opened')
});
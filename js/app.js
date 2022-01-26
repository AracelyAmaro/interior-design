// let zoom_class = document.getElementsByClassName("zoom");
// zoom_class.removeClass("zoom");
// window.addEventListener('click', () => alert("hiciste click"))
// console.log("hola");

let hamburguer  = document.getElementById('hamburguer');
let navURL = document.getElementById('nav-menu');
let zoom_ = document.getElementById('zoom')

hamburguer.addEventListener('click', () => {
    navURL.classList.toggle('show');
    zoom_.classList.remove('zoom');
});

// div.classList.toggle("visible");
// si visible está presente la elimina, de lo contrario la añade

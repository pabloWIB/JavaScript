var caja = document.querySelectorAll('.caja');

function cambiarColor(){
    this.classList.toggle('cajaNueva');
}

caja.forEach(function(event){
    event.addEventListener('mouseover', cambiarColor);
})

$(document).ready(function(){
    $('body').hide(0);
    $('body').show(390);
})
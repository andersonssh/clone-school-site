let hamburgerMenu = document.querySelector('#hamburger')
let menuMobile = document.querySelector('#menu-mobile')
let fecharMenu = document.querySelector('#fechar-menu')

hamburgerMenu.addEventListener('click', function(){
    menuMobile.classList.remove('fechar-menu')
    menuMobile.classList.add('mostrar-menu')
})
fecharMenu.addEventListener('click', function(){
    menuMobile.classList.remove('mostrar-menu')
    menuMobile.classList.add('fechar-menu')
})

let hamburgerMenu = document.querySelector('#hamburger')
let menuMobile = document.querySelector('#menu-mobile')
let menuMobileBarra = document.querySelector('#barra-navegacao-mobile')
let fecharMenu = document.querySelector('#fechar-menu')

hamburgerMenu.addEventListener('click', function(){
    menuMobile.classList.remove('esconder-menu')
    menuMobile.classList.add('mostrar-menu')

    // adiciona animacao da barra de navegacao mobile
    menuMobileBarra.classList.add('animacao-navegacao-mobile')
})
fecharMenu.addEventListener('click', function(){
    menuMobile.classList.remove('mostrar-menu')
    menuMobile.classList.add('esconder-menu')

    // remove animacao da barra de navegacao mobile
    menuMobileBarra.classList.remove('animacao-navegacao-mobile')
})

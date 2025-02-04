'use strict'

const dropdown = document.querySelector('.menumobile')

const activeDrop = document.querySelector('.diver-down')

const lines = document.querySelectorAll('.mm-line')

const close = document.querySelector('.close-menu')

const goToImage = document.querySelectorAll('.photo')

const fullScreen = document.querySelector('.fullscreenImage')

const closeFullscreen = document.querySelector('.close-fullscreen')

const unus = document.querySelector('.one')

const duo = document.querySelector('.two')

const tres = document.querySelector('.three')

const quattuor = document.querySelector('.four')

const quinque = document.querySelector('.five')

const sex = document.querySelector('.six')

const septem = document.querySelector('.seven')

const octo = document.querySelector('.eight')

const novem = document.querySelector('.nine')

const decem = document.querySelector('.ten')

const unDecim = document.querySelector('.eleven')

const duoDecim = document.querySelector('.twelve')

const voltarImagem = document.getElementById('backArrow')

const proximaImagem = document.getElementById('nextArrow')

let imgNumber = 0

dropdown.addEventListener('click', function() {
    lines.forEach(line => {
        line.classList.toggle('invisible')
    })
    dropdown.classList.toggle('active-drop')
    close.classList.toggle('invisible')
    activeDrop.classList.toggle('open-diver')
})



//Fullscreen

    voltarImagem.addEventListener('click', function() {
        if (imgNumber > 1) {
            imgNumber --
        }
        abrirImagem()
    })

    proximaImagem.addEventListener('click', function() {
        if (imgNumber < 12) {
            imgNumber ++
        }
        abrirImagem()
    })

    unus.addEventListener('click', function () {

        imgNumber = 1

        abrirImagem()
    })



    duo.addEventListener('click', function () {

        imgNumber = 2

        abrirImagem()
    })



    tres.addEventListener('click', function () {

        imgNumber = 3

        abrirImagem()
    })



    quattuor.addEventListener('click', function () {

        imgNumber = 4

        abrirImagem()
    })



    quinque.addEventListener('click', function () {

        imgNumber = 5

        abrirImagem()
    })



    sex.addEventListener('click', function () {

        imgNumber = 6

        abrirImagem()
    })



    septem.addEventListener('click', function () {

        imgNumber = 7

        abrirImagem()
    })



    octo.addEventListener('click', function () {

        imgNumber = 8

        abrirImagem()
    })



    novem.addEventListener('click', function () {

        imgNumber = 9

        abrirImagem()
    })



    decem.addEventListener('click', function () {

        imgNumber = 10

        abrirImagem()
    })



    unDecim.addEventListener('click', function () {

        imgNumber = 11

        abrirImagem()
    })

    duoDecim.addEventListener('click', function () {

        imgNumber = 12

        abrirImagem()
    })


    function abrirImagem() {

        fullScreen.style.display = 'flex'
        closeFullscreen.style.display = 'flex'
        closeFullscreen.addEventListener('click', function () {
            fullScreen.style.display = 'none'
            closeFullscreen.style.display = 'none'
        })

        if( imgNumber === 1) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat10.jpg'
        }
        if( imgNumber === 2) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat11.jpg'
        }
        if( imgNumber === 3) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat8.jpg'
        }
        if( imgNumber === 4) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat4.jpg'
        }
        if( imgNumber === 5) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat5.jpg'
        }
        if( imgNumber === 6) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat6.jpg'
        }
        if( imgNumber === 7) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat7.jpg'
        }
        if( imgNumber === 8) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat2.jpg'
        }
        if( imgNumber === 9) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat12.jpeg'
        }
        if( imgNumber === 10) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat3.jpg'
        }
        if( imgNumber === 11) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat1.jpg'
        }
        if( imgNumber === 12) {
            document.querySelector('.fullscreenImage img').src = '/senorDeLaNoche/midias/gallery/bat9.jpg'
        }
    }
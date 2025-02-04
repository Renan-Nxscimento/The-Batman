'use strict'

const dropdown = document.querySelector('.menumobile')

const activeDrop = document.querySelector('.diver-down')

const lines = document.querySelectorAll('.mm-line')

const close = document.querySelector('.close-menu')

dropdown.addEventListener('click', function() {
    lines.forEach(line => {
        line.classList.toggle('invisible')
    })
    dropdown.classList.toggle('active-drop')
    close.classList.toggle('invisible')
    activeDrop.classList.toggle('open-diver')
})
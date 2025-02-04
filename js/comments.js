'use strict'

const dropdown = document.querySelector('.menumobile')

const activeDrop = document.querySelector('.diver-down')

const lines = document.querySelectorAll('.mm-line')

const close = document.querySelector('.close-menu')

const icons = document.querySelectorAll('.c-icon i')


//Dropdown
dropdown.addEventListener('click', function() {
    lines.forEach(line => {
        line.classList.toggle('invisible')
    })
    dropdown.classList.toggle('active-drop')
    close.classList.toggle('invisible')
    activeDrop.classList.toggle('open-diver')
})

//Curtir comentário
icons.forEach(sting => {
    sting.addEventListener('click', function() {
        if (sting.classList.contains('fa-regular')) {
            sting.classList.replace('fa-regular', 'fa-solid')
        } else {
            sting.classList.replace('fa-solid', 'fa-regular')
        }
    })
})
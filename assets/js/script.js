// modals
let modalAbout = document.getElementById('containerAbout'),
    modalDocs = document.getElementById('containerDocs'),
    modalRegister = document.getElementById('containerRegister')

// buttons to open modals
let btnAbout = document.getElementById('about'),
    btnDocs = document.getElementById('docs'),
    btnRegister = document.getElementById('register')


// buttons to close modals
let btnCloseAbout = document.getElementById('closeAbout'),
    btnCloseDocs = document.getElementById('closeDocs'),
    btnCloseRegister = document.getElementById('closeRegister')

let main = document.querySelector('main'),
    header = document.querySelector('header')

// events to about modal
btnAbout.addEventListener('click', () => {
    modalAbout.classList.toggle('hidden')
    main.classList.add('blur')
    header.classList.add('blur')
})

btnCloseAbout.addEventListener('click', () => {
    modalAbout.classList.toggle('hidden')
    main.classList.remove('blur')
    header.classList.remove('blur')

})

// events to docs modal
btnDocs.addEventListener('click', () => {
    modalDocs.classList.toggle('hidden')
    main.classList.add('blur')
    header.classList.add('blur')
})

btnCloseDocs.addEventListener('click', () => {
    modalDocs.classList.toggle('hidden')
    main.classList.remove('blur')
    header.classList.remove('blur')
})

// events to register modal
btnRegister.addEventListener('click', () => {
    modalRegister.classList.toggle('hidden')
    main.classList.add('blur')
    header.classList.add('blur')
})

btnCloseRegister.addEventListener('click', () => {
    modalRegister.classList.toggle('hidden')
    main.classList.remove('blur')
    header.classList.remove('blur')
})

// prevent user drag images
let allImages = document.querySelectorAll('img')
allImages.forEach(element => {
    element.setAttribute('draggable', 'false')
})

// media queries
if (window.matchMedia("(max-width: 600px)").matches) {
    let supportMe = document.getElementById('kofi')
    let liveDistrosLogo = document.querySelector('.logo')
    let modalCard = document.querySelectorAll('.modalCard')

    liveDistrosLogo.style.marginTop = '.5rem'
    supportMe.innerText = 'support'
    modalCard.forEach(element => {
        element.style.marginTop = '1rem';
    });
} else {
    /* a viewport menos que 400 pixels de largura */
  }

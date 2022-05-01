// modals
let modalAbout = document.getElementById('containerAbout'), 
    modalDocs = document.getElementById('containerDocs')

// buttons to open modals
let btnAbout = document.getElementById('about'),
    btnDocs = document.getElementById('docs')
    
// buttons to close modals
let btnCloseAbout = document.getElementById('closeAbout'),
    btnCloseDocs = document.getElementById('closeDocs')

// events to about modal
btnAbout.addEventListener('click', ()=>{
    modalAbout.classList.toggle('hidden')
})

btnCloseAbout.addEventListener('click', ()=>{
    modalAbout.classList.toggle('hidden')
})

// events to docs modal
btnDocs.addEventListener('click', ()=>{
    modalDocs.classList.toggle('hidden')
})

btnCloseDocs.addEventListener('click', ()=>{
    modalDocs.classList.toggle('hidden')
})




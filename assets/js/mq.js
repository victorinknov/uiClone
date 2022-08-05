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

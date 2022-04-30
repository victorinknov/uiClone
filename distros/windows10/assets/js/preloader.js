// after 3 seconds you will able to see windows
setTimeout(()=>{
    let transition = document.getElementById('loginPage')
    document.getElementById("loadingPage").style.display = "none"
    transition.style.animation = 'fade 2.5s ease-in-out';
    document.getElementById("loginPage").style.display = "block"
    transition.addEventListener('click', ()=>{
        transition.classList.add('blur')
    })
}, 5000) 

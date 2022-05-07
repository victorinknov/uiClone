// after 3 seconds you will able to see windows login page
setTimeout(()=>{
    let transition = document.getElementById('loginPage')
    document.getElementById("loadingPage").style.display = "none"
    transition.style.animation = 'fade 3s ease-in-out';
    document.getElementById("loginPage").style.display = "block"
    // transition.addEventListener('click', ()=>{
    //     transition.classList.add('blur')
    // })
}, 1000) 

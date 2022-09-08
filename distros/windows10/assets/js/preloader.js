// after 3 seconds you will able to see windows login page

// search string
let queryString = window.location.search
let queryParams = new URLSearchParams(queryString)
let preloaderTime = Number(queryParams.get('time'))*1000

setTimeout(()=>{
    let transition = document.getElementById('loginPage')
    document.getElementById("loadingPage").style.display = "none"
    transition.style.animation = 'fade 3s ease-in-out';
    document.getElementById("loginPage").style.display = "block"
    // transition.addEventListener('click', ()=>{
    //     transition.classList.add('blur')
    // })
}, preloaderTime ?? 5000) 

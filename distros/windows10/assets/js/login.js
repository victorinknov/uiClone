// start draggable

const position = { x: 0, y: 0 }

let setBlurOnWallpaper = document.getElementById('loginPage'),
    hideLoginElements = document.getElementById('loginPageContent'),
    loginDetailsSection = document.getElementById('loginDetails')

interact('.dropzone').dropzone({
    accept: '#loginPageContent',
    ondropactivate: (event) => {
        console.log('element moving')
    },
    ondragenter: (event) => {
        setBlurOnWallpaper.classList.add('blur')
        hideLoginElements.style.display = 'none'
        loginDetailsSection.style.animation = 'fade .5s ease-in-out';
        loginDetailsSection.style.display = 'flex'
        console.log('element on dropzone')
    },
    ondragleave: (event) => {
        console.log('element out of dropzone')
    },
    ondrop: (event) => {
        console.log('element dropped out')
    },
    ondropdeactivate: (event) => {
        console.log('element isnt moving anymore')
    }
})

interact('.drag-drop')
    .draggable({
        startAxis: 'xy',
        lockAxis: 'y',
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        listeners: {
            move(event) {
                position.x = 10
                position.y += event.dy
                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
            }
        },
        autoScroll: false,
        // dragMoveListener from the dragging demo above
        listeners: { move: dragMoveListener }
    })
    .styleCursor(false)

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// end draggable

let loginButton = document.getElementById('btnLogin'),
    coverAreaButton = document.getElementById('coverBtn'),
    logginInMessage = document.getElementById('logginInMessage'),
    usernameText = document.querySelector('.usernameText'),
    userImage = document.getElementById('userImage')

document.querySelector('.usernameText').addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
        evt.preventDefault()
        logUserIntoAccount()
    }
});

loginButton.addEventListener('click', () => {
    logUserIntoAccount()
})

function logUserIntoAccount() {
    let username = usernameText.innerText

    if (username == 'Guest' || '') {
        let message = `You can't login as guest or without username. Your login is your username of your Github's account. Replace 'Guest' with your.`
        errorMessage ('open', message)
    }
    if (username == 'liveDistros') {
        showLoginMessage(username)
    }
    else if (username != 'liveDistros' && username != 'Guest') {
        checkIfImageExists(`https://github.com/${usernameText.innerText}.png`, (exists) => {
            if (exists) {
                showLoginMessage(username)
            }
            else {
            let message = 'You must need have a Github account with a valid username to login.'
            errorMessage ('open', message)
            }
        })
    }

    function showLoginMessage(username) {
        usernameText.removeAttribute('contenteditable')
        coverAreaButton.style.display = 'none'
        logginInMessage.style.display = 'flex'
        username == 'liveDistros' ? userImage.src = '/distros/windows10/assets/img/users/liveDistros.png' : userImage.src = `https://github.com/${username}.png`
        logginInMessage.style.animation = 'fade .75s ease-in-out'
        userImage.style.animation = 'fade .75s ease-in-out'
    }
}

// Check if image exists
function checkIfImageExists(url, callback) {
    const img = new Image()
    img.src = url

    if (img.complete) {
        callback(true)
    } else {
        img.onload = () => {
            callback(true)
        }

        img.onerror = () => {
            callback(false)
        }
    }
}

let closeErrorModal = document.getElementById('closeErrorModal'),
closeErrorModalBtn = document.getElementById('closeErrorModalBtn'),
    closesModal = [closeErrorModal, closeErrorModalBtn]

closesModal.forEach(element => {
    element.addEventListener('click', ()=>{
        errorMessage('close')
    })
})

function errorMessage (event, message) {
    let textError = document.getElementById('textError')
    textError.innerText = message
    let modalErrorUserNotFound = document.getElementById('modalErrorUserNotFound')
    event == 'open' ? modalErrorUserNotFound.style.display = 'flex' : event == 'close' ? modalErrorUserNotFound.style.display = 'none' : null
}
const position = { x: 0, y: 0 }

let setBlurOnWallpaper = document.getElementById('loginPage'),
    hideLoginElements = document.getElementById('loginPageContent')

interact('.dropzone').dropzone({
    accept: '#loginPageContent',
    ondropactivate: (event) => {
        console.log('element moving')
    },
    ondragenter: (event) => {
        setBlurOnWallpaper.classList.add('blur')
        hideLoginElements.style.display = 'none'
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
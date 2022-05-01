// prevent user to drag images
let preventDragOnImages = document.querySelectorAll('img')
preventDragOnImages.forEach(element => {
    element.setAttribute('draggable', 'false')
});
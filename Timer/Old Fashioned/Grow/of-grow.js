var size = 256
var baby = document.querySelector('#lion')

document.addEventListener('DOMContentLoaded', function() {
    setInterval(addWidth, 62.5)
})

function addWidth() {
    size += 5.33
    baby.style.width = size + 'px'
}
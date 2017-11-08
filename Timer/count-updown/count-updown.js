var counter = 0
var id;
var rate = 1

function increment(rate) {
    counter += rate
    document.querySelector('#counter').innerText = counter
}

function decrement(rate) {
    counter -= rate
    document.querySelector('#counter').innerText = counter
}

function timesTwo() {
    rate = rate * 2
}

var btnDown = document.querySelector('#down')
btnDown.addEventListener('click', function () {
    clearInterval(id)
    id = setInterval(function () {
        decrement(rate)
    }, 1000)
})

var btnUp = document.querySelector('#up')
btnUp.addEventListener('click', function () {
    clearInterval(id)

    id = window.setInterval(function () {
        increment(rate)
    }, 1000)
})

var btnTimesTwo = document.querySelector('#timestwo')
btnTimesTwo.addEventListener('click', function () {
        timesTwo()
    
})


var counter = 0
var id;
var inc = false;

function increment() {
    inc = true;
    counter += 1
    document.querySelector('#counter').innerText = counter
}

function decrement() {
    inc = false;
    counter -= 1
    document.querySelector('#counter').innerText = counter
}

function timesTwo() {
    if(inc) {
    counter += 2
    } else {
    counter -= 2
    }
    document.querySelector('#counter').innerText = counter
}

var btnDown = document.querySelector('#down')
btnDown.addEventListener('click', function () {
    clearInterval(id)
    id = setInterval(decrement, 200)
})

var btnUp = document.querySelector('#up')
btnUp.addEventListener('click', function () {
    clearInterval(id)

    id = setInterval(increment, 200)
})

var btnTimesTwo = document.querySelector('#timestwo')
btnTimesTwo.addEventListener('click', function () {
    clearInterval(id)

    id = setInterval(timesTwo, 200)
})


var joke;
var lastTimer;

function showPunchLine() {
  if (joke) {
    document.querySelector('#punchline').innerText = joke.punchline
    document.querySelector('#anotherone').innerText = 'Make joke!';
    joke = undefined
    clearTimeout(lastTimer)
  }
}

function reqListener () {
  joke = JSON.parse(this.responseText)
  document.querySelector('#setup').innerText = joke.setup
  document.querySelector('#punchline').innerText = ''; 
  document.querySelector('#anotherone').innerText = 'I don\'t know.';
  lastTimer = setTimeout(showPunchLine, 7000)
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#anotherone').addEventListener('click', function() {
    if (joke) {
      showPunchLine()
    } else {
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
      oReq.send();
    }
  })
})
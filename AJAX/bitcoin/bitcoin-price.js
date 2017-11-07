var input;
var bitcoin;

function reqListener() {
    bitcoin = JSON.parse(this.responseText)
    document.querySelector('#p').innerText = bitcoin.bpi.USD.rate_float;  
}

function sendReq() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    oReq.send();
}

function bitToUsd() {
    var inputNum = Number(myinput.value)
    var result = document.querySelector("#result")
    result.innerText = inputNum * bitcoin.bpi.USD.rate_float
}

function usdToBit() {
    var inputNum = Number(myinput.value) 
    var result = document.querySelector("#result")
    result.innerText = bitcoin.bpi.USD.rate_float/inputNum

}
var fetch = document.querySelector('#fetch')
fetch.addEventListener('click', sendReq)

var toUsd = document.querySelector('#tousd')
toUsd.addEventListener('click', bitToUsd)

var toBitcoin = document.querySelector('#tobitcoin')
toBitcoin.addEventListener('click', usdToBit)
function reqListener() {
    document.querySelector('#paragraph').innerText += this.responseText + '\n' + '\n';    
}

function sendReq() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text");
    oReq.send();

}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector("#mybutton");
    document.addEventListener('click', sendReq)    
})
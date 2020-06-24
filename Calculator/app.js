function placeNumb(n) {
    var res = document.getElementById("output-result");
    res.value += n;
}

function clearScreen() {
    var res = document.getElementById("output-result");
    res.value = "";
}

function finalresult() {
    var res = document.getElementById("output-result");
    res.value = eval(res.value)
}

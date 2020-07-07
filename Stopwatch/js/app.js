var min = 0;
var sec = 0;
var ms = 0;
var minute = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliSecond = document.getElementById("ms");

var interval;

function timer() {
    ms++;
    miliSecond.innerHTML = ms;

    if (ms >= 100) {
        sec++;
        seconds.innerHTML = sec;
        ms = 0;
    }
    else if (sec >= 60) {
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
}


function start() {
    interval = setInterval(timer, 10);
}

function stop() {
    clearInterval(interval)

    // Enabling Start button again when the watch s
    document.getElementById("start").disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    ms = 0
    minute.innerHTML = min;
    seconds.innerHTML = sec;
    miliSecond.innerHTML = ms;
    clearInterval(interval)

    // Enabling Start button again
    document.getElementById("start").disabled = false;
}
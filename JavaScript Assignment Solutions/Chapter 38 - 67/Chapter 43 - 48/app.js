// Task: 03
function delRow(r) {
    var removeRow = r.parentNode.parentNode;
    removeRow.remove()
}

// Task: 05
var counter = 0;
function incrCounter() {
    counter += 1
    document.getElementById("counter").innerHTML = counter;
}

function decrCounter() {
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
}
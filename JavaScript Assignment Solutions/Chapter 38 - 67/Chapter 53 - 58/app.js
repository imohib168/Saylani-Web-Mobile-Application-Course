// Task: 01
function showImage(e) {
    var modalImage = document.getElementById("modalImage")
    modalImage.src = e.src
}

// Task: 02
function zoomIn() {
    var myImg = document.getElementById("Image");
    var currWidth = myImg.clientWidth;
    myImg.style.width = (currWidth + 100) + "px";
}

function zoomOut() {
    var myImg = document.getElementById("Image");
    var currWidth = myImg.clientWidth;
    myImg.style.width = (currWidth - 100) + "px";
}
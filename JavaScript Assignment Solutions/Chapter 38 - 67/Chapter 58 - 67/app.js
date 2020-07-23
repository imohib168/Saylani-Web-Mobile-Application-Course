// Task: 01
var mainContent = document.getElementById("main-content");

// Task: 02
// console.log(mainContent.childNodes);

// Task: 03
var render = document.getElementsByClassName("render");
var allClasses = "";
for (var i = 0; i < render.length; i++) {
    allClasses = allClasses + render[i].innerHTML + "<br>";
}
document.getElementById("render").innerHTML = allClasses
// var rendered = render.innerHTML = allClasses
// console.log(rendered);

// Task: 04
var fname = document.getElementById("first-name").value = "Mohib";
// console.log(fname)

// Task: 05
var lname = document.getElementById("last-name").value = "Ismail";
var email = document.getElementById("email").value = "imohib168@gmail.com"


// Task: 06
var formContent = document.getElementById("form-content").nodeType;
// console.log(formContent)

// Task: 07
var lastName = document.getElementById("lastName").nodeType;
var childLastName = document.getElementById("lastName").childNodes;
// console.log(lastName);
// console.log(childLastName);

// Task: 08
var textNode = document.getElementById("lastName");
var update = textNode.parentNode.childNodes[3].firstChild.nodeValue;
update = "Last Name: James"
textNode.innerHTML = update
// console.log(update);

// Task: 09
var getID = document.getElementById("main-content");
var firstChild = getID.firstChild;
var lastChild = getID.lastChild;

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].firstChild)
// console.log(firstChild);

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].lastChild)
// console.log(lastChild);

// Task: 10
var x = document.getElementById("lastName");
var previousSibling = x.previousSibling;
var nextSibling = x.nextSibling;
// console.log(previousSibling)
// console.log(nextSibling)


// Task: 11
var email = document.getElementById("email");
var parent = email.parentNode;
var type = email.nodeType;

// console.log(parent)
// console.log(type)


function showData() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value


    document.getElementById("displayfirstName").innerHTML = "First Name: " + fname;
    document.getElementById("displaylastName").innerHTML = "Last Name: " + lname;;
    document.getElementById("displayEmail").innerHTML = "Email: " + email;
}


function moreDetail() {
    var fullDetail = `Hi. I'm Mohib, an everyday Inter student hailed in Karachi, spent my life directionless like every other kid
    until I enrolled in Saylani Web and Mobile Application Development and made some cool stuff. As you go through
    my portfolio, you'll find all the exciting projects I've worked on through a dedicated course of this
    prestigious opportunity.`;
    var about = document.getElementById("AboutMe");
    about.innerHTML = fullDetail;
}

// 

var gettable = document.getElementById("table");

gettable.style.display = "none"

function stdSchoolDetail() {
    var firstName = document.getElementById("stdFirstName");
    var lastName = document.getElementById("stdLastName");
    var standard = document.getElementById("stdStandard");
    var section = document.getElementById("stdSection");

    // Creating Row
    var tr = document.createElement("tr");

    // There's 4 columns in a Row So, Create 4 td's
    // Creating (td0) 
    var td = document.createElement("td");
    var tdText = document.createTextNode(firstName.value);
    td.appendChild(tdText);

    // Creating (td1) 
    var td1 = document.createElement("td");
    var tdText1 = document.createTextNode(lastName.value);
    td1.appendChild(tdText1);

    // Creating (td2) 
    var td2 = document.createElement("td");
    var tdText2 = document.createTextNode(standard.value);
    td2.appendChild(tdText2);

    // Creating (td3) 
    var td3 = document.createElement("td");
    var tdText3 = document.createTextNode(section.value);
    td3.appendChild(tdText3);

    // Creating a Delete and Edit Button
    var td4 = document.createElement("td");
    var del = document.createElement("button");
    var delText = document.createTextNode("Delete");
    del.setAttribute("id", "delBtn")
    del.setAttribute("onclick", "deleteRow(this)");
    del.appendChild(delText);
    td4.appendChild(del);

    var td5 = document.createElement("td");
    var edit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    edit.setAttribute("id", "editBtn")
    edit.setAttribute("onclick", "editRow(this)");
    edit.appendChild(editText);
    td5.appendChild(edit);


    // Appnding td's to Table row (tr)
    tr.appendChild(td);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    // Appending the Table row to Table
    gettable.appendChild(tr);
    tr.style.textAlign = "center"

    firstName.value = "";
    lastName.value = "";
    standard.value = "";
    section.value = "";

    gettable.style.display = "block"
}

function deleteRow(delRow) {
    var deleteThisRow = delRow.parentNode.parentNode;
    deleteThisRow.remove();
}

function editRow(editRow) {
    var editFirstName = editRow.parentNode.parentNode.childNodes[0].innerHTML;
    var editLastName = editRow.parentNode.parentNode.childNodes[1].innerHTML;
    var ediStandard = editRow.parentNode.parentNode.childNodes[2].innerHTML;
    var editSection = editRow.parentNode.parentNode.childNodes[3].innerHTML;


    var editfName = prompt("Enter Edited First Name: ", editFirstName);
    var editlName = prompt("Enter Edited Last Name: ", editLastName);
    var editStd = prompt("Enter Edited Standard: ", ediStandard);
    var editSec = prompt("Enter Edited Section: ", editSection);


    editRow.parentNode.parentNode.childNodes[0].innerHTML = editfName;
    editRow.parentNode.parentNode.childNodes[1].innerHTML = editlName;
    editRow.parentNode.parentNode.childNodes[2].innerHTML = editStd;
    editRow.parentNode.parentNode.childNodes[3].innerHTML = editSec;

    console.log();
}


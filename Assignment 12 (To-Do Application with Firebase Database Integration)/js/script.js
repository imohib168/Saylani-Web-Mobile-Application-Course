function AddItem() {
    var item = document.getElementById("toDoItem");
    var list = document.getElementById("toDoList");

    if (item.value == "") {
        alert("Please write some text to Add the Task in the List...")
    } else {

        // Adding the Item into Databse
        var key = firebase.database().ref().push().key;
        var toDoItems = {
            item: item.value,
            key: key
        }
        firebase.database().ref("ToDoList/" + key).set(toDoItems)

        // 
        var li = document.createElement("li");
        var liText = document.createTextNode(toDoItems.item);
        li.appendChild(liText);
        list.appendChild(li);

        // 
        var del = document.createElement("button");
        var delText = document.createTextNode("");
        del.setAttribute("class", "fas fa-trash delBtn");
        del.setAttribute("onclick", "delItem(this)")
        del.appendChild(delText);
        li.appendChild(del);

        // 
        var edit = document.createElement("button");
        var editText = document.createTextNode("");
        edit.setAttribute("class", "fas fa-user-edit editBtn")
        edit.setAttribute("onclick", "EditItem(this)")
        edit.appendChild(editText);
        li.appendChild(edit)

        // 
        var done = document.createElement("button");
        var doneText = document.createTextNode("");
        done.setAttribute("class", "fas fa-check-circle doneBtn")
        done.setAttribute("onclick", "done(this)")
        done.appendChild(doneText)
        li.appendChild(done)

        item.value = ""
    }
}


function delItem(delItem) {
    delItem.parentNode.remove()

    // Removing the Exact Item from the database where user clicks
    firebase.database().ref("ToDoList").on("child_added", function(snapshot) {
        var val = snapshot.key;
    })
    firebase.database().ref("ToDoList/" + val).remove();
}

function DelAll() {
    var confirmation = prompt("Do you want to delete all Items: ", "Yes OR No")

    if (confirmation.toLowerCase() == "yes") {
        var list = document.getElementById("toDoList");
        list.innerHTML = ""

        // Removing All the Items from database
        firebase.database().ref("ToDoList").remove();
    }
}

function EditItem(ItemEdit) {
    var target = ItemEdit.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter the Task: ", target);

    if (newValue == "") {
        alert("Can't add empty task...")
    } else {
        ItemEdit.parentNode.firstChild.nodeValue = newValue;
    }
}

function done(completed) {
    var str = completed.parentNode;
    str.style.textDecoration = "line-through";
    str.style.color = "red";
}

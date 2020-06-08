// Task: 01
var arr = [];

// Task: 02
var arr1 = {};

// Task: 03
var names = ["Mohib","Ali","Umer","Hammad"];

// Task: 04
var numbers = [12,13,1.5,-67,89];

// Task: 05
var bool = [true,false];

// Task: 06
var mixed = ["Mohib","Ismail",12,876,true,false];

// Task: 07
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("1) " + qualification[0] + "<br>");
document.write("2) " + qualification[1] + "<br>");
document.write("3) " + qualification[2] + "<br>");
document.write("4) " + qualification[3] + "<br>");
document.write("5) " + qualification[4] + "<br>");
document.write("6) " + qualification[5] + "<br>");
document.write("7) " + qualification[6] + "<br>");
document.write("8) " + qualification[7] + "<br>");

// Task: 08

// Names
var stdName1 = prompt("Please Enter your Name: ");
var stdName2 = prompt("Please Enter your Name: ");
var stdName3 = prompt("Please Enter your Name: ");

var students = [stdName1, stdName2, stdName3];
document.write("<h1>Student Names: </h1>")
document.write("1) " + students[0] + "<br>");
document.write("2) " + students[1] + "<br>");
document.write("3) " + students[2] + "<br>");

// Marks Obtained
var marksObtained1 = +prompt("Please Enter your Marks: ",stdName1);
var marksObtained2 = +prompt("Please Enter your Marks: ",stdName2);
var marksObtained3 = +prompt("Please Enter your Marks: ",stdName3);

var marks = [marksObtained1, marksObtained2, marksObtained3];
document.write("<h1>Marks Obtained: </h1>")
document.write("Marks Obtained By " + students[0] + " are " + marks[0] + "<br>");
document.write("Marks Obtained By " + students[1] + " are " + marks[1] + "<br>");
document.write("Marks Obtained By " + students[2] + " are " + marks[2] + "<br>");

// Total Marks
var totalMarks = 500;

// Percentage
var percentage1 = ((marks[0] / totalMarks) * 100);
var percentage2 = ((marks[1] / totalMarks) * 100);
var percentage3 = ((marks[2] / totalMarks) * 100);

var percentage = [percentage1, percentage2, percentage3]

// displaying Result
document.write("<h1>Result</h1>")
document.write("Score of " + students[0] + " is " + marks[0] + "." + " Percentage: " + percentage[0] + " % <br>")
document.write("Score of " + students[1] + " is " + marks[1] + "." + " Percentage: " + percentage[1] + " % <br>")
document.write("Score of " + students[2] + " is " + marks[2] + "." + " Percentage: " + percentage[2] + " % <br>")


// Task: 09
var colors = [" Red"," Green"];
document.write("<h1>Colors exist in the List: <h1>" + colors + "</h2> <br>")

document.write("<h1>After Adding a Color to the Beginning: </h1>") //unshift
var addColorToTheBeginning = prompt("What Color do you wnat to add to the Beginning: ")
var addingColorToTheBeginning = colors.unshift(addColorToTheBeginning);
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Adding a Color to the End: </h1>") //push
var addColorToTheEnd = prompt("What Color do you wnat to add to the End: ")
var addingColorToTheEnd = colors.push(addColorToTheEnd);
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Adding 2 more Colors to the Beginning: </h1>") //unshift
var add2Colors1 = prompt("Which Color do you wnat to add to the Beginning: ")
var add2Colors2 = prompt("Which Color do you wnat to add to the Beginning: ")
var adding2Colors = colors.unshift(add2Colors1,add2Colors2);
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Deleting the first Color in the List: </h1>") // shift
var delColor1 = colors.shift(0)
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Adding the Color in the List where User want: </h1>") // splice
var index = +prompt("Input Index where you want to add the Color: ")
var indexAddColor = prompt("The Color you want to add at your desired index: ")
var addColorToTheDesiredPlace = colors.splice(index,0,indexAddColor)
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Removing the Color in the List where User want: </h1>") // splice
var indexToDel = +prompt("Input Index where you want to Delete the Color: ")
var indexDelColor = prompt("How many colors you want to delete: ")
var DeletingColorToTheDesiredPlace = colors.splice(indexToDel,indexDelColor)
document.write("<h4> New List: " + colors + "</h4> <br>")

// Task: 10
var stdScore = [320, 510, 120, 340, 210, 70, 50, 600, 10];
document.write("Actual Array: " + stdScore + "<br>")

var sortScore = stdScore.sort()
document.write("Sorted Array: " + sortScore + "<br>")

// Task: 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities List: </h1> <h3>" + cities + "</h3>");

var selectedCities = cities.slice(0,3);
document.write("<h1>Selected Cities List: </h1> <h3>" + selectedCities + "</h3> <br>");


// Task: 12
var arr2 = ["This", "is", "my", "cat"]
document.write("<h2> Array: </h2> <h4>" + arr2 + "</h4>")

var arr2Join = arr2.join(" ")
document.write("<h2> Joined Array: </h2> <h4>" + arr2Join + "</h4>")

// Task: 13
var arr3 = [];

arr3.push("Keyboard");
arr3.push("Mouse");
arr3.push("Printer");
arr3.push("Monitor");

document.write("<h1>Device: </h1>")
document.write(arr3)

document.write("<h2>Out: </h2> <h4>" + arr3[0])
document.write("<h2>Out: </h2> <h4>" + arr3[1])
document.write("<h2>Out: </h2> <h4>" + arr3[2])
document.write("<h2>Out: </h2> <h4>" + arr3[3])  
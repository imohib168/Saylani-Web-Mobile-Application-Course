// Task: 01
var a = +prompt("Enter any Number: ");

document.write("<h3>RESULT: </h3>");
document.write("<h3> The value of 'a' is: "+  a + "<br> </h3>");
document.write("*************************** <br><br>");

var b = ++a;
document.write("The value of '++a' is: "+  b + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var c = a++;
document.write("The value of 'a++' is: "+  c + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var d = --a;
document.write("The value of '--a' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var e = a--;
document.write("The value of 'a--' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

// Task: 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0   +  1  +  1
alert(result);

// Explain the output at each stage:

// --a;
// Decrement: --a = 2 - 1 = 1

// --a - --b;
// (--a = 1) - (--b = 0) --> 1 - 0 = 1

// --a - --b + ++b;
// (--a = 1) - (--b = 0) + (++b = 1) =  -->  1 - 0 + 1 = 2

// --a - --b + ++b + b--;
// (--a = 1) - (--b = 0) + (++b = 1) + (b-- = 1) =  -->  1 - 0 + 1 + 1 = 3

// Task: 03
var name = prompt("Enter your Name: ");
alert("\nHello " + name + "\nNice to meet you...");

// Task: 04
var tableNum = +prompt("Enter Number: ");

for(i = 1; i < 11; i++) {
    document.write(tableNum + " x " + i + " = " + tableNum * i + "<br><br>");
}

// Task: 05
document.write("<h1>Marks Sheet</h1>")
var subj1 = prompt("Enter Subject 01 Name: ");
var subj2 = prompt("Enter Subject 02 Name: ");
var subj3 = prompt("Enter Subject 03 Name: ");

var totalMarks = 300;

var obtMarks1 = +prompt("Enter Obtained Marks in Subject 01: ");
var obtMarks2 = +prompt("Enter Obtained Marks in Subject 02: ");
var obtMarks3 = +prompt("Enter Obtained Marks in Subject 03: ");

var subjTotalMarks = obtMarks1 + obtMarks2 + obtMarks3;
var percentage = ((subjTotalMarks / totalMarks) * 100);

document.write("Subject 01: " + subj1 + " (100 Marks)<br>");
document.write("Subject 02: " + subj2 + " (100 Marks)<br>");
document.write("Subject 03: " + subj3 + " (100 Marks)<br><br>");

document.write("Marks Obtained in 3 Subjects: " + subjTotalMarks + " / 300<br>");
document.write("Percentage: " + percentage);
// =================================== Chapter: 01 =================================== //
// Task: 01
alert("\n Task: 01 \n\n Hello Users! Welcome to My Website...");


// Task: 02
alert("\n Task: 02 \n\n Error! Please enter a Valid password");


// Task: 03
alert("\n Task: 03 \n\n welcome to JS land... \n Happy Coding!");


// Task: 04
alert("\n Task: 04 \n Welcome to JS Land...");
alert("\n Task: 04 \n Happy Coding! \n\n prevent this message from creating additional dialogs");


// Task: 05
console.log("Hello... I can run JS through through my web browser's console");

// =================================== Chapter: 02 =================================== //
// Task: 01
var username;

// Task: 02
var myName = "Mohib Ismail";
console.log(myName);

// Task: 03

// a)
var messaeg;
// b)
message = "Hello World";
// c)
alert("\nTask: 03 \n" + message);

// Task: 04
var name = "Mohib Ismail";
var age = "18 years old";
var job = "Student";

alert("\n Task:04 \n Students's Information" + "\n\n" + name + "\n" + age + "\n" + job);

// Task: 05
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert("\nTask: 05 \n\n" + pizza);

// Task: 06
var email = "imohib168@gmail.com";
alert("\nTask: 06 \nMy email address is " + email + ".");

// Task: 07
var book = "A smarter way to learn JavaScript";
alert("\nTask: 07 \nI'm trying to learn from the book " + book + ".");

// Task: 08
var i = "Yah! I can write HTML content through JavaScript";
document.write(i + "<br><br>");

// Task: 09
var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);
document.write(design);

// =================================== Chapter: 03 =================================== //
// Task: 01
var age = 18;
alert("\nTask: 01 \nI'm " + age + " years old");

// Task: 02
var N = 10;
alert("\nTask: 02 \nYou've visisted this site " + N + " times.");

// Task: 03
var birthYear = 2001;
document.write("Task: 03" + "<br>" + "My birth year is " + birthYear + "<br>" + "Data type of declared variable is number" + "<br><br>");

// Task: 04
// a)
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = "5";

document.write("Task: 04" + "<br>" + visitorName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store.");

// =================================== Chapter: 04 =================================== //
// Task: 01
// Declare 3 variables in one statement.

var variable1 = "I'm variable 1", variable2 = "I'm variable 2", variable3 = "I'm variable 3";
console.log(variable1 + " " + variable2 + " " + variable3);

// Task: 02
// Declare 5 legal & variable names.

alert("\nLegal Variable Names: \n\n1) name1 \n2) myName \n3) $name \n4) _name \n5) Name");

// Declare 5 illegal & variable names.
alert("\nIllegal Variable Names: \n\n1) name 1 (No space) \n2) my'name' (No special charachter) \n3) /name \n4) 34name \n5) !Name");

// Task: 04
var heading = "Rules for Naming JS variables";
document.write(heading.bold() + "<br><br>");

var cont1 = "numbers", cont2 = "$", cont3 = "_", finalExample = "$my_1stVariable";
document.write("Variable names can only contain" + " " + cont1 + " " + cont2 + " and " + cont3 + "." + " For Example " + finalExample.bold() + "." + "<br>");

var legalVariable1 = "$name", legalVariable2 = "_name", legalVariable3 = "name";
document.write("Variables must begin with a letter, $ or _. For example" + legalVariable1 + " " + legalVariable2 + " " + legalVariable3 + "." + "<br>");

document.write("Variable names are case 'Sensitive'. <br>");

document.write("Variable names should not be JS 'keyword'. ");

// =================================== Chapter: 01 =================================== //
// // Task: 01 & 2
var num1 = +prompt("Enter Number"); //taking Input in integer
var num2 = +prompt("Enter Number"); //taking Input in integer

var add = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2

document.write("1) Sum of " + num1 + " and " + num2 + " is " + add + "<br>");
document.write("2) Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");
document.write("3) Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");
document.write("4) Division of " + num1 + " and " + num2 + " is " + divide + "<br>");
document.write("5) Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br><br>");

// Task: 03
var randomNumber;
document.write("Value after variable declaration is: " + randomNumber + "<br>");

randomNumber = 5;
document.write("Initial Value: " + randomNumber + "<br>");

var i = ++randomNumber;
document.write("Value after increment is: " + i + "<br>");

var addVariable = i + 7;
document.write("Value after addition is: " + addVariable + "<br>");

var variableDecrement = --addVariable;
document.write("Value after decrement is: " + variableDecrement + "<br>");

var remainder = variableDecrement % 3;
document.write("The remainder is: " + remainder + "<br><br><br>");

// Task: 04
var ticketPrice = 600;
var ticketQunatity = 5;
var totalCost = ticketPrice * ticketQunatity;
document.write("Total cost to buy " + ticketQunatity + " tickets to a movie is " + totalCost + "PKR. <br><br><br>");

// Task: 05
document.write("<h2>Table of 11</h2>");
document.write("11 x 1 = " + 11 * 1 + "<br>");
document.write("11 x 1 = " + 11 * 2 + "<br>");
document.write("11 x 1 = " + 11 * 3 + "<br>");
document.write("11 x 1 = " + 11 * 4 + "<br>");
document.write("11 x 1 = " + 11 * 5 + "<br>");
document.write("11 x 1 = " + 11 * 6 + "<br>");
document.write("11 x 1 = " + 11 * 7 + "<br>");
document.write("11 x 1 = " + 11 * 8 + "<br>");;
document.write("11 x 1 = " + 11 * 9 + "<br>")
document.write("11 x 1 = " + 11 * 10 + "<br>");

// Task: 06
document.write("<h1>The Temperature Converter</h1>");
var celcius = 25;
var celciusToFahrenheit = (celcius * (9 / 5) + 32);
document.write(celcius + "<sup>o</sup>C is " + celciusToFahrenheit + "<sup>o</sup>F <br>");

var fahrenheit = 70;
var fahrenheitToCelcius = (fahrenheit - 32) * (5 / 9);
document.write(celcius + "<sup>o</sup>F is " + fahrenheitToCelcius + "<sup>o</sup>C <br><br><br>");

// Task: 07
document.write("<h1>Shopping Cart</h1> <br>");
var priceItem1 = 650;
var priceItem2 = 100;
var order1 = 3;
var order2 = 7;
var shipCharge = 100;

document.write("Price of Item <b>1</b> is: " + priceItem1 + "<br>");
document.write("Quantity of item <b>1</b> is: " + order1 + "<br><br>");;
document.write("Price of Item <b>2</b> is: " + priceItem2 + "<br>");
document.write("Quantity of item <b>2</b> is: " + order2 + "<br><br>");
document.write("Shipping Charges: " + shipCharge + "<br><br>");

var totalcost = (priceItem1 * order1) + (priceItem2 * order2) + shipCharge;
document.write("Total Cost of your Order is: " + totalcost + "<br><br><br>");

// Task: 08
document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + " % <br><br><br>");

// Task: 09
document.write("<h1>currency in PKR</h1>");

var USdollars = 10;
var saudiRiyal = 25;

var conversion = (USdollars * 104.80) + (saudiRiyal * 28);
document.write("Total currency in PKR: " + conversion + "<br><br><br>");

// Task: 10
document.write("<h2>Arithmetic calculation in Single Expression</h2>");
var number = 10;
document.write("Initial Value: " + number + "<br>");

var total = (((number + 5) * 10) / 2);

document.write("Total: " + total + "<br>");

// Task: 11
document.write("<h1>age Calculator</h1>");
var currentYear = 2020;
var birthYear = 2001;
var age = currentYear - birthYear;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + age + "<br><br><br>");

// Task: 12
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var circumference = (2 * 3.142 * radius);
var area = (3.142 * radius ** 2);

document.write("Radius of a Circle is: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// Task: 13
document.write("<h1> The Lifetime Supply Calculator</h1>");
var favSnack = "Lays";
var age = 18;
var maxAge = 70;
var estdamt = 2;

var totalSnackInEstdLife = ((maxAge - age) * estdamt);

document.write("Favorite Snack: " + favSnack + "<br>");
document.write("Current Age: " + age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of Snacks per day: " + estdamt + "<br><br>");
document.write("You will need " + totalSnackInEstdLife + " " + favSnack + " to last you until the ripe old age of " + maxAge);

// =================================== Chapter: 06 - 09 =================================== //
// Task: 01
var a = +prompt("Enter any Number: ");

document.write("<h3>RESULT: </h3>");
document.write("<h3> The value of 'a' is: " + a + "<br> </h3>");
document.write("*************************** <br><br>");

var b = ++a;
document.write("The value of '++a' is: " + b + "<br>");
document.write("Now The value of 'a' is: " + a + "<br><br>");

var c = a++;
document.write("The value of 'a++' is: " + c + "<br>");
document.write("Now The value of 'a' is: " + a + "<br><br>");

var d = --a;
document.write("The value of '--a' is: " + d + "<br>");
document.write("Now The value of 'a' is: " + a + "<br><br>");

var e = a--;
document.write("The value of 'a--' is: " + d + "<br>");
document.write("Now The value of 'a' is: " + a + "<br><br>");

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

for (i = 1; i < 11; i++) {
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

// =================================== Chapter: 09 - 11 =================================== //
// Task: 01
var city = prompt("Enter your City name: ");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to the City of Lights. ");
}
else {
    alert("Welcome to " + city);
}

// Task: 02
var gender = prompt("Enter your gender: ");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Madam.")
}
else {
    alert("Sorry, Wrong Input.!");
}

// Task: 03
var signalColor = prompt("Input the Color of Traffic Signal: ");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop.!");
}
else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to Move.");
}
else if (signalColor.toLowerCase() === "green") {
    alert("Move now...");
}
else {
    alert("Sorry.! Wrong Input...");
}

// Task: 04
var remainingFuel = +prompt("Enter remaining Fuel in your Car/Bike: ");

if (remainingFuel <= 0.25) {
    alert("Please refill the fuel in your Car/Bike");
}
else {
    alert("You don't need to refill the fuel in your Car/Bike");
}

// Task: 05
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
else {
    alert("given condition for variable b is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
else {
    alert("given condition for variable b is false");
}


var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


if (true) {
    alert("True");
}
if (false) {
    alert("False")
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task: 06
document.write("<h1>Marks Sheet</h1>");
var subj1 = +prompt("Enter Obtained Marks in Physics: ");
var subj2 = +prompt("Enter Obtained Marks in Mathematic: ");
var subj3 = +prompt("Enter Obtained Marks in English: ");
var obtainedMarks = subj1 + subj2 + subj3;
var total = 300;
var percentage = ((obtainedMarks / total) * 100);


document.write("Total Marks: " + total + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + " % <br>");

if (percentage >= 80) {
    var grade = document.write("Grade: A-one <br>");
    var remarks = document.write("Remarks: Excellent <br>");
}
else if (percentage >= 70) {
    var grade = document.write("Grade: A <br>");
    var remarks = document.write("Remarks: Good <br>");
}
else if (percentage >= 60) {
    var grade = document.write("Grade: B <br>");
    var remarks = document.write("Remarks: You need to improve... <br>");
}
else if (percentage >= 50) {
    var grade = document.write("Grade: C <br>");
    var remarks = document.write("Remarks: You need to improve alot... <br>");
}
else if (percentage <= 60) {
    var grade = document.write("Grade: Fail <br>");
    var remarks = document.write("Remarks: Sorry <br>");
}
else {
    document.write("<h2>Wrong Input...</h2>");
}


// Task: 07
var secretNumber = 9;
var userInput = +prompt("Guess Number (ranging from 1 to 10 ) ");

if (userInput === secretNumber) {
    alert("Bingo! Your Answer is Correct.");
}
else if (userInput == ++secretNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Wrong Answer.! Try Again...");
}

// Task: 08
var num = +prompt("Give the number to check if it's divisible by 3 or not: ")

if (num % 3 == 0) {
    alert("Yes This is Divisible by 3.");
}
else {
    alert("This number is not Divisible by 3.");
}

// Task: 09
var number = +prompt("Give the number to check if it's Even or Odd: ");

if (number % 2 == 0) {
    alert("This is Even Number")
}
else {
    alert("This is Odd Number")
}

// Task: 10
var temp = +prompt("Enter Temperature: ")

if (temp > 40) {
    alert("It's too hot Outside.")
}
else if (temp > 30) {
    alert("The weather today is Normal.")
}
else if (temp > 20) {
    alert("Today’s Weather is cool.")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

// Task: 11
var input1 = +prompt("Enter First Value: ");
var input2 = +prompt("Enter Second Value: ");

alert("For Addition = + \nFor Subtraction = - \nFor Multiplication = * \nFor Division = / \nFor Modulus = %");

var operator = prompt("What operation do you want to perform: ");

if (operator === "+") {
    alert((+input1) + (+input2));
}
else if (operator === "-") {
    alert(input1 - input2);
}
else if (operator === "*") {
    alert(input1 * input2);
}
else if (operator === "/") {
    alert(input1 / input2);
}
else if (operator === "%") {
    alert(input1 % input2);
}
else {
    alert("Wrong Input");
}

// =================================== Chapter: 12 - 13 =================================== //
// Task: 01

// Task: 02
var int1 = +prompt("Enter 1st Integer: ");
var int2 = +prompt("Enter 2nd Integer: ");

if (int1 === int2) {
    alert("Both are equal");
}
else if (int1 > int2) {
    alert("Integer 1 is greater.");
}
else if (int2 > int1) {
    alert("Integer 2 is greater.");
}
else {
    alert("Wrong Input.!");
}

// Task: 03
var number = +prompt("Enter a Number to check whether a number is Positive, Negative OR Zero: ");

if (number > 0) {
    alert("The given Number is positive...");
}
else if (number < 0) {
    alert("The given Number is Negative...");
}
else if (number === 0) {
    alert("The given Number is Equal to Zero...");
}
else {
    alert("wrong Input.!");
}

// Task: 04
var char = prompt("Enter a character to check if a character is vowel or not: ");

if (char.toLowerCase() === "a") {
    alert("Yes, the given character is Vowel.");
}
else if (char.toLowerCase() === "e") {
    alert("Yes, the given character is Vowel.");
}
else if (char.toLowerCase() === "i") {
    alert("Yes, the given character is Vowel.");
}
else if (char.toLowerCase() === "o") {
    alert("Yes, the given character is Vowel.");
}
else if (char.toLowerCase() === "u") {
    alert("Yes, the given character is Vowel.");
}
else {
    alert("The given Character is consonant.");
}

// Task: 05
var correctPassword = "Javascript";
var password = prompt("Enter your password...");

if (password === "") {
    alert("Please Enter your Password...");
}
else if (password === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// Task: 06
// fixed
var greeting;
var hour = 23;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
}
else {
    greeting = "Good evening";
    alert(greeting)
}

// Task: 07
var time = prompt("Input time (24 hrs): ", "e.g: 1900 = 7pm");

if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
}


// =================================== Chapter: 14 - 16 =================================== //
// Task: 01
var arr = [];

// Task: 02
var arr1 = {};

// Task: 03
var names = ["Mohib", "Ali", "Umer", "Hammad"];

// Task: 04
var numbers = [12, 13, 1.5, -67, 89];

// Task: 05
var bool = [true, false];

// Task: 06
var mixed = ["Mohib", "Ismail", 12, 876, true, false];

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
var marksObtained1 = +prompt("Please Enter your Marks: ", stdName1);
var marksObtained2 = +prompt("Please Enter your Marks: ", stdName2);
var marksObtained3 = +prompt("Please Enter your Marks: ", stdName3);

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
var colors = [" Red", " Green"];
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
var adding2Colors = colors.unshift(add2Colors1, add2Colors2);
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Deleting the first Color in the List: </h1>") // shift
var delColor1 = colors.shift(0)
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Adding the Color in the List where User want: </h1>") // splice
var index = +prompt("Input Index where you want to add the Color: ")
var indexAddColor = prompt("The Color you want to add at your desired index: ")
var addColorToTheDesiredPlace = colors.splice(index, 0, indexAddColor)
document.write("<h4> New List: " + colors + "</h4> <br>")

document.write("<h1>After Removing the Color in the List where User want: </h1>") // splice
var indexToDel = +prompt("Input Index where you want to Delete the Color: ")
var indexDelColor = prompt("How many colors you want to delete: ")
var DeletingColorToTheDesiredPlace = colors.splice(indexToDel, indexDelColor)
document.write("<h4> New List: " + colors + "</h4> <br>")

// Task: 10
var stdScore = [320, 510, 120, 340, 210, 70, 50, 600, 10];
document.write("Actual Array: " + stdScore + "<br>")

var sortScore = stdScore.sort()
document.write("Sorted Array: " + sortScore + "<br>")

// Task: 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities List: </h1> <h3>" + cities + "</h3>");

var selectedCities = cities.slice(0, 3);
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

// =================================== Chapter: 17 - 20 =================================== //
// TaskL 01
var emptyMulArr = [[], [], []];
// alert("Length of Empty Array: " + emptyMulArr.length);

// Task: 02
var mulArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Task: 03
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Task: 04
var table = +prompt("Enter Table Number that you want to generate: ");
var length = +prompt("Length of the Table: ");

document.write("<h1>Table</h1>")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br><br>");
}

// Task: 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

// Task: 06
// a)
document.write("<h1>a) Counting</h1>")
for (var counting = 1; counting <= 15; counting++) {
    document.write(counting + " , ");
}

// b)
document.write("<h1>b) Reverse Counting</h1>")
for (var revCount = 10; revCount > 0; revCount--) {
    document.write(revCount + " , ");
}

// c)
document.write("<h1>b) Even </h1>")
for (var even = 1; even <= 20; even++) {
    if (even % 2 === 0) {
        document.write(even + " , ");
    }
}

// d)
document.write("<h1>b) Odd </h1>")
for (var odd = 0; odd <= 20; odd++) {
    if (odd % 2 === 1) {
        document.write(odd + " , ");
    }
}

document.write("<h1>b) Series </h1>")
for (var series = 1; series <= 20; series++) {
    if (series % 2 === 0) {
        document.write(series + "k, ");
    }
}

// Task: 07
document.write("<h1>XYZ Bakery</h1>")
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome To XYZ Bakery.What do you want to order Sir/Madam");

for (var item = 0; item <= items.length; item++) {
    if (search.toLowerCase() == items[item]) {
        document.write(search + " is availaible at index " + item + " in our bakery" + "<br><br><br>");
    }
    else {
        document.write("We are Sorry this item is not available in our Bakery right now...");
    }
}

// Task: 08
var findLarge = [24, 53, 78, 91, 12];

document.write("Array: " + findLarge + "<br>");
document.write("The Largest Number in the given Array is: " + Math.max(...findLarge) + "<br><br>");

// Task: 09
var findSmall = [24, 53, 78, 91, 12];

document.write("Array: " + findSmall + "<br>");
document.write("The Smallest Number in the given Array is: " + Math.min(...findSmall) + "<br><br>");

// Task:10
for (var multipleOf5 = 5; multipleOf5 <= 100; multipleOf5 = multipleOf5 + 5) {
    document.write(multipleOf5 + " , ");
}
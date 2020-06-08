// Task: 01
var city = prompt("Enter your City name: ");

if(city.toLowerCase() === "karachi") {
    alert("Welcome to the City of Lights. ");
}
else{
    alert("Welcome to " + city);
}

// Task: 02
var gender = prompt("Enter your gender: ");

if(gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if(gender.toLowerCase() === "female") {
    alert("Good Morning Madam.")
}
else{
    alert("Sorry, Wrong Input.!");
}

// Task: 03
var signalColor = prompt("Input the Color of Traffic Signal: ");

if(signalColor.toLowerCase() === "red") {
    alert("Must Stop.!");
}
else if(signalColor.toLowerCase() === "yellow") {
    alert("Ready to Move.");
}
else if(signalColor.toLowerCase() === "green") {
    alert("Move now...");
}
else {
    alert("Sorry.! Wrong Input...");
}

// Task: 04
var remainingFuel = +prompt("Enter remaining Fuel in your Car/Bike: ");

if(remainingFuel <= 0.25) {
    alert("Please refill the fuel in your Car/Bike");
}
else {
    alert("You don't need to refill the fuel in your Car/Bike");
}

// Task: 05
var a = 4;
if (++a === 5){
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
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}


if (true){
    alert("True");
}
if (false){
    alert("False")
}

if("car" < "cat"){
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

if (operator === "+"){
    alert((+input1) + (+input2));
}
else if(operator === "-"){
    alert(input1 - input2);
}
else if(operator === "*"){
    alert(input1 * input2);
}
else if(operator === "/"){
    alert(input1 / input2);
}
else if(operator === "%"){
    alert(input1 % input2);
}
else {
    alert("Wrong Input");
}
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
else{
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
else{
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
else{
    greeting = "Good evening";
    alert(greeting)
}

// Task: 07
var time = prompt("Input time (24 hrs): ","e.g: 1900 = 7pm");

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


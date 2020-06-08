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
document.write("11 x 1 = "+ 11*1 + "<br>");
document.write("11 x 1 = "+ 11*2 + "<br>");
document.write("11 x 1 = "+ 11*3 + "<br>");
document.write("11 x 1 = "+ 11*4 + "<br>");
document.write("11 x 1 = "+ 11*5 + "<br>");
document.write("11 x 1 = "+ 11*6 + "<br>");
document.write("11 x 1 = "+ 11*7 + "<br>");
document.write("11 x 1 = "+ 11*8 + "<br>");;
document.write("11 x 1 = "+ 11*9 + "<br>")
document.write("11 x 1 = "+ 11*10 + "<br>");

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
document.write("Total currency in PKR: " + conversion  + "<br><br><br>");

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
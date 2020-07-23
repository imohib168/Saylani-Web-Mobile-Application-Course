// =========================  Chapter 21 - 25 ========================= //


// Task: 01
var fName = prompt("Enter First name: ");
var lName = prompt("Enter Last name: ");

var firstChar1 = fName.slice(0, 1);
var otherChar1 = fName.slice(1);

var firstChar2 = lName.slice(0, 1);
var otherChar2 = lName.slice(1);

firstChar1 = firstChar1.toUpperCase();
firstChar2 = firstChar2.toUpperCase();

otherChar1 = otherChar1.toLowerCase();
otherChar2 = otherChar2.toLowerCase();

var fullname = firstChar1 + otherChar1 + " " + firstChar2 + otherChar2;

alert("Welcome to the site " + fullname);


// Task: 02
var favMob = prompt("Your Favorite Mobile phone Name: ");
var lengthOfString = favMob.length;

document.write("Your Favorite phone is: " + favMob + "<br>");
document.write("Length of String: " + lengthOfString + "<br>");


// Task: 03
var word = "Pakistani";
var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);



// Task: 04
var word1 = "Hello World";
var index1 = word1.lastIndexOf("l")

document.write("String: " + word1 + "<br>");
document.write("Index of 'l': " + index1);


// Task: 05
var word2 = "Pakistani";
var indexAt3 = word2[3];

document.write("String: " + word2 + "<br>");
document.write("Character at index 3: " + indexAt3);

// Task: 06
var nameF = prompt("Your First Name: ")
var nameL = prompt("Your Last Name: ")

var concatenate2Str = nameF.concat(nameL)

document.write(concatenate2Str)


// Task: 07
var word3 = "Hyderabad";

// Advanced Method
// var replacing = word3.replace("Hyder", "Islam")

// Loop Method
for (var i = 0; i < word3.length; i++) {
    if (word3.slice(i, i + 5) === "Hyder") {
        wordReplace = "Islam" + word3.slice(i + 5)
    }
}

document.write("City: " + word3 + "<br>");
// document.write("After Replacement: " + replacing + "<br>")
document.write("After Replacement: " + wordReplace + "<br>")

// Task: 08
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacement = message.replace(/and/g, "&");

document.write("Original Text: " + message + "<br>")
document.write("After Replacing 'and' with '&': " + replacement + "<br>")


// Task: 09
var value = "472";

document.write("Value: " + value + "<br>");
document.write("Type: " + typeof (value) + "<br>")

var changeStrToNum = Number(value)
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof (changeStrToNum) + "<br>")

// Task: 10
var inp = prompt("Enter any Word that you want to change in Uppercase: ");

document.write("User Input: " + inp + "<br>");
document.write("Upper Case: " + inp.toUpperCase() + "<br>")

// Task: 11
var str = prompt("Enter any word: ");

var firstChar = str.slice(0, 1);
var otherChar = str.slice(1)

firstChar = firstChar.toUpperCase()
otherChar = otherChar.toLowerCase()

var titledString = firstChar + otherChar

document.write("User Input: " + str + "<br>");
document.write("Titled Case: " + titledString + "<br>")

// Task: 12
var num = 35.36;
var toStr = num.toString();
var removeDot = toStr.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + removeDot + "<br>");


// Task: 13
var word = prompt("Enter Username: ");

var specialChar = /[!@#$%^&*(),.?":{}|<>]/g

if (word.match(specialChar)) {
    alert("Please enter a valid Username that doesn't contain any special Character...")
}
else {
    alert("Valid Username.!")
}

// Task: 14
document.write("<h1>XYZ Bakery</h1>")
var items = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var search = prompt("Welcome To XYZ Bakery.What do you want to order Sir/Madam");

for (var item = 0; item <= items.length; item++) {
    if (search.toUpperCase() == items[item]) {
        document.write(search + " is availaible at index " + item + " in our bakery" + "<br><br><br>");
        break;
    }
    else {
        document.write("We are Sorry this item is not available in our Bakery right now...");
        break;
    }
}




// Task: 15
var pass = prompt("Enter Password: ")

var validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

if (pass.match(validation)) {
    document.write("Your Password's syntax is Correct")
}
else {
    document.write("Password Can not start with a Number & and Should only contain letters and Alphabet and atleast 1 Capital Letter\n e.g: Karachi123")
}


// Task: 16
var str = "University Of Karachi";

for (var i = 0; i < str.length; i++) {
    document.write(str.charAt(i) + "<br>");
}

// Task: 17
var word4 = prompt("Enter any word to know the last character of your String: ");

var lastChar = word4.charAt(word4.length - 1);

document.writeln("Your Input: " + word4 + "<br>");
document.writeln("Last Character in your String is: " + lastChar + "<br>");

// Task: 18
var sentence = "The quick brown fox jumps over the lazy dog";

var occurance = sentence.match(/the/gi).length;

document.write("Text: " + sentence + "<br>")
document.write("There are " + occurance + " Occurance Of word 'the'");




// =========================  Chapter 26 - 30 ========================= //

// Task: 01
var int = prompt("Enetr a positive Integer: ");
document.write("Number: " + int + "<br>");

var round = Math.round(int)
document.write("round off value: " + round + "<br>");

var floor = Math.floor(int);
document.write("Floor Value: " + floor + "<br>");

var ceil = Math.ceil(int);
document.write("Ceil Value: " + ceil + "<br>")


// Task: 02
var negativeFloat = prompt("Enetr a positive Integer: ");
document.write("Number: " + negativeFloat + "<br>");

var round = Math.round(negativeFloat);
document.write("round off value: " + round + "<br>");

var floor = Math.floor(negativeFloat);
document.write("Floor Value: " + floor + "<br>");

var ceil = Math.ceil(negativeFloat);
document.write("Ceil Value: " + ceil + "<br>")

// Task: 03
var num = prompt("Enter any Numbe: ");

var absoluteValue = Math.abs(num);

document.writeln(absoluteValue)

// Task: 04
var dice = Math.random() * 6;
var ceil = Math.ceil(dice);
document.write("Random Dice Value: " + ceil + "<br>");

Task: 05
var toss = Math.random() * 2;
var tossceil = Math.floor(toss);

if (tossceil === 0) {
    alert("Value " + tossceil + " has won the toss 'HEADS' ");
}
if (tossceil === 1) {
    alert("Value " + tossceil + " has won the toss 'TAILS' ");
}


// Task: 06
var numbers = Math.random() * 100;
document.write("Random Value Generator between 1 to 100: " + Math.ceil(numbers));

// Task: 07
var weight = prompt("Your weight in Kilogram: ", "e.g: 50kg OR 50KG OR 50kilogram")
var round = Math.round(weight)
document.writeln("The weight of User is: " + weight + "<br>")

// Task: 08
var secretNumber = 9;
var userInput = +prompt("Guess Number (ranging between 1 to 10 ) ");

if (userInput === secretNumber) {
    alert("Correct Answer.!");
}
else {
    alert("Wrong.! Try Again...");
}



// =========================  Chapter 31 - 34 ========================= //
// Task: 01
var date = new Date();
document.write(date + "<br>");

// Task: 02
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = date.getMonth();
var nameOfMonth = monthNames[month]

document.write("Current Month: " + nameOfMonth + "<br>");

// Task: 03
var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var day = date.getDay();
var nameOfDay = days[day]

document.write("Today is: " + nameOfDay + "<br>")

// Task: 04
if (nameOfDay.toUpperCase() === "SAT" || "SUN") {
    alert("It's a Fun Day");
}
else {
    alert("It's a Working Day");
}

// Task: 05
var CheckDate = date.getDate();

if (CheckDate <= 15) {
    document.write("First fifteen days of Month... <br>");
}
else {
    document.write("Last fifteen days of Month... <br>");
}

// Task: 06
var date1 = new Date("June 20, 2020");
var date1MiliSeconds = date1.getTime();
var MilisecondsIntoMinutes = date1MiliSeconds / (1000 * 60);
document.write(MilisecondsIntoMinutes + "<br>");

// Task: 07
var hours = date.getHours();
if (hours >= 12) {
    document.write("It's PM <br>");
}
else {
    document.write("It's AM <br>");
}

// Task: 08
var laterDate = new Date("May 31, 2020");
document.write("Later Date: " + laterDate + "<br>");

// Task: 09
var Ramadan = new Date("April 24, 2020");
var DateToday = new Date()

var difference = DateToday.getTime() - Ramadan.getTime()

var daysBetweenTodayAndRamadan = difference / (1000 * 3600 * 24)

document.write("Total number of days between dates: " + Math.ceil(daysBetweenTodayAndRamadan) + " Days<br>");

// Task: 10
var referDate = new Date();
var Jan2015 = new Date("January 01, 2015")

var diff = referDate.getTime() - Jan2015.getTime()

var SecondsBetween = diff / 1000

document.write("Reference Date: " + referDate + "<br>")
document.write(SecondsBetween + " seconds had passed since the beginning of January 01, 2015 <br>")

// Task: 11
var OneHourBefore = new Date();
OneHourBefore.setHours(OneHourBefore.getHours() - 1);

document.write("Current Date & Time: " + new Date() + "<br>")
document.write("1 Hour before: " + OneHourBefore + "<br>")

// Task: 12
var HundredYearsBack = new Date();
HundredYearsBack.setFullYear(HundredYearsBack.getFullYear() - 100);

document.write("Current Date & Time: " + new Date() + "<br>")
document.write("100 Years Back: " + HundredYearsBack + "<br>")

// Task: 13
var age = prompt("Enter your age: ");

var birthYear = new Date();

birthYear.setFullYear(birthYear.getFullYear() - age);

document.write("<h1> Your age is " + age);
document.write("<br> Your birth year is " + birthYear.getFullYear());

// Task: 14
document.write("<h1>K-Electric Bill </h1>")

var customerName = prompt("Customer Name: ");

var date = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = date.getMonth();
var nameOfMonth = monthNames[month];

var units = prompt("Number of Units: ");
var charges = prompt("Charges per Unit: ")
var NetAmountPayable = units * charges;
var latePayment = 350;
var GrossAmountPayable = NetAmountPayable + latePayment

document.write("Customer Name: <strong>" + customerName + "</strong><br>")
document.write("Current Month: <strong>" + nameOfMonth + "</strong><br>");
document.write("Number Of Units: <strong>" + units + "</strong><br>");
document.write("Charges per Unit: <strong>" + charges + "</strong><br><br>");

document.write("Net Amount Payable (within Due date): <strong>" + NetAmountPayable + "</strong><br>");
document.write("Late Payment Surcharge: <strong>" + latePayment + "</strong><br>");
document.write("Late Payment Surcharge: <strong>" + GrossAmountPayable + "</strong><br>");


// =========================  Chapter 35 - 40 ========================= //


// Task: 01
function date() {
    var date = new Date();
    return date;
}
// document.write(date());

// Task: 02
function GreetUser(Fname, Lname) {
    var name = Fname + " " + Lname;
    return name;
}
// alert(GreetUser("Mohib","Ismail"))

// Task: 03
function add(a, b) {
    var a = prompt("Enter 1st Value: ");
    var b = prompt("Enter 2nd Value: ");
    var c = Number(a) + Number(b);
    return c;
}
// alert(add())

// Task: 04
function calculator(val1, operator, val2) {
    var val1 = prompt("Enter Value 1: ");
    var operator = prompt("Operation that you want to perform e.g: +,-,*,/,%: ");
    var val2 = prompt("Enter Value 2: ");

    if (operator === "+") {
        return ((+val1) + (+val2));
    }

    else if (operator === "-") {
        return (val1 - val2);
    }

    else if (operator === "*") {
        return (val1 * val2);
    }

    else if (operator === "/") {
        return (val1 / val2);
    }

    else if (operator === "%") {
        return (val1 % val2);
    }
}
// alert(calculator())

// Task: 05
function square(a) {
    var z = a * a;
    return z;
}
// alert(square(12));

// Task: 06
// var num = +prompt("Enter Number: ")
function factorialize(val) {
    if (val < 0) {
        return -1;
    }
    else if (val == 0) {
        return 1;
    }
    else {
        return (val * factorialize(val - 1));
    }
}
// alert(factorialize(num))

// Task: 07
function NumberSeries(StartNum, EndNum) {
    var StartNum = +prompt("Enter Start Number: ")
    var EndNum = +prompt("Enter End Number: ")

    for (var i = StartNum; i <= EndNum; i++) {
        document.write(i + "<br>")
    }
}
// NumberSeries()

// Task: 08
function Hypotenuse(base, perpendicular) {

    function Square(num) {
        return (num * num);
    }

    var base = +prompt("Enter base of triangle?");
    var perpendicular = +prompt("Enter perpendicular?");
    var hypotenuse = Math.sqrt(Square(base) + Square(perpendicular))
    var fixed = hypotenuse.toFixed(2)
    return fixed;
}

// document.write("Hypotenuse of a right angle triangle is: " + Hypotenuse());

// Task: 09
function AreaOfTriangle(width, height) {
    return (width * height);
}

function AreaOfTriangle2() {
    var w = +prompt("Enter width of Triangle?");
    var h = +prompt("Enter height of Triangle?");
    var area = AreaOfTriangle(w, h);
    return area;
}
// document.write("Area of Triangle is: " + AreaOfTriangle2() + "<br>");

// Task: 10
function palindrome(str) {
    var removeSpecialChar = str.replace(/[^A-Z]/ig).toLowerCase();

    var checkPalindrome = removeSpecialChar.split('').reverse().join('');

    if (removeSpecialChar === checkPalindrome) {
        return (str + " is Palindrome");

    } else {
        return (str + " is not Palindrome");
    }
}
// alert(palindrome("Bulb"))

// Task: 11
function titleCase(str) {
    str = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}
// alert(titleCase("hello everyone, my name is mohib"))



// Task: 12
function LongestWord(str) {
    var str = prompt("Enter any sentence to find the Longest word in it: ")
    var SplitString = str.split(' ');

    var longestWord = 0;
    var longestIndex = 0;

    for (var i = 0; i < SplitString.length; i++) {
        if (SplitString[i].length > longestWord) {
            longestWord = SplitString[i].length;
            longestIndex = i;
        }
    }
    return SplitString[longestIndex];
}
// alert(LongestWord())



// Task: 13
// function CountCharOccurance(str, letter) {
//     var str = prompt("Enter Any String/Sentence: ")
//     var letter = prompt("The letter that you want to check the occurance of: ")

//     var letterCount = 0

//     for (var i = 0; i < str.length; i++) {
//         if(str.charAt(0) == letter) {
//             letterCount++
//         }
//     }
//     return letterCount;
// }

// alert(CountCharOccurance())

function CountCharOccurance(str, letter) {

    var str = prompt("Enter Any String/Sentence: ")
    var letter = prompt("The letter that you want to check the occurance of: ")

    var LetterCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            LetterCount += 1;
        }
    }
    return LetterCount;
}

// alert(CountCharOccurance());

// Task: 14
function calcCircumference(radius) {
    return 2 * 3.14 * radius;
}

function calcArea(radius) {
    return 3.14 * radius * radius;
}

function Calculation() {
    var radi = prompt("Enter radius of circle?");
    document.write("<h1> The circumference is " + calcCircumference(radi).toFixed(2));
    document.write("<br> The area is " + calcArea(radi).toFixed(2));
}

// alert(Calculation());
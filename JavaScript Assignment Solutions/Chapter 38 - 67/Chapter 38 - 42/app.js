function power(a, b) {
    var cal = a ** b;
    document.write("The value of 'a' raised to 'b' is: " + cal + "<br>")
}
power(5, 2)

// Leap year ===> divisible by 4? YES ==>  divisible by 100? YES ==> divisible by 400? YES ====> LEAP YEAR
//                divisible by 4? NO ==> Not leap year
//                divisible by 4? YES ==> divisible by 100? NO ===> LEAP YEAR
//                divisible by 4? YES ==> divisible by 100? NO ===? Leap Year
function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert("Given year is a leap year...")
    }
    else {
        alert("Given year is not a leap year...")
    }
}
isLeapYear(2020);

function area(a, b, c) {
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    var fixed = area.toFixed(3)
    return fixed;
}
function triArea(a, b, c) {
    var ans = area(a, b, c);
    document.write("The Area of Triangles is: " + ans + "<br>")
}

triArea(5,6,7);


var obtainedMarks;
totalMarks = 300;

function marks() {
    var subj1 = +prompt("Enter your (1st) subject's Marks: ");
    var subj2 = +prompt("Enter your (2nd) subject's Marks: ");
    var subj3 = +prompt("Enter your (3rd) subject's Marks: ");
    obtainedMarks = subj1 + subj2 + subj3;
    return obtainedMarks;
}
function average() {
    // marks();
    var average = obtainedMarks / 3;
    average = average.toFixed(2);
    document.write("The Average of marks are: " + average + "<br>")
}

function percentage() {
    // marks()
    var percent = ((obtainedMarks / totalMarks) * 100)
    percent = percent.toFixed(3);
    document.write("Your Percentage is: " + percent + "% <br>")
}

function mainFunction() {
    marks();
    average();
    percentage();
}

mainFunction();


function indexOf(sentence, singleAlphabet) {
    var a;
    for (var index = 0; index < sentence.length; index++) {
        if (sentence[index] === singleAlphabet) {
            document.write("Index of '" + alphabet + "' is " + index);
            break;
        }
        else {
            a++;
        }
    }
}
var sentence = prompt("Enter the Sentence: ")
var alphabet = prompt("Enter a Single Alphabet to find the Index: ")
indexOf(sentence, alphabet);

function removeVowel(string) {
    var replace = string.replace(/[aeiouAEIOU]/gi, "");
    document.write(replace);
}
removeVowel("Mohib Ismail")  


var distance = prompt("Enter the distance in KM: ");
function toMeters() {
    var meters = distance * 1000;
    document.write("Distance in meters is: " + meters + " meter. <br>");
}

function toFeet() {
    var feet = distance * 3280.8;
    feet = feet.toFixed(3)
    document.write("Distance in Feet is: " + feet + " feet. <br>");
}

function toInch() {
    var inch = distance * 39370.078740157;
    inch = inch.toFixed(4);
    document.write("Distance in Inches is: " + inch + " inch<br>");
}

function toCentimeter() {
    var cm = distance * 100000;
    cm = cm.toFixed(2);
    document.write("Distance in Centimeter is: " + cm + " Centimeter. <br>");
}

function main() {
    toMeters()
    toFeet()
    toInch()
    toCentimeter()
}

main()


function overTimePay() {
    var employeHours = prompt("Enter Hours of your Work: ")
    if (employeHours <= 40) {
        var salary = 12 * employeHours;
        document.write("Your Salary without Overtime work is: " + salary)
    } else if (employeHours > 40) {
        var salary = (12 * 40);
        var overTime = ((12 * 1.5) * (employeHours - 40));
        var totalSalary = salary + overTime;
        document.write("Your Salary with Overtime Work is: " + totalSalary);
    } else {
        alert("Wrong Input.!")
    }
}
overTimePay()

function CurrencyNotesOfDenominations() {
    var amount = +prompt("Enter Amount for withdraw: ");

    var countFor100 = (amount / 100);
    var countFor50 = ((amount % 100) / 50);
    var countFor10 = (((amount % 100) % 50) / 10);
    var countFor100Fixed = Math.floor(countFor100)
    var countFor50Fixed = Math.floor(countFor50)
    var countFor10Fixed = Math.floor(countFor10)

    document.write("You'll have " + countFor100Fixed + " Hundred Notes " + countFor50Fixed + " fifty Notes " + countFor10Fixed + " Ten Notes")
}

CurrencyNotesOfDenominations()
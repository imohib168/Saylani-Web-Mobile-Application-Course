// TaskL 01
var emptyMulArr = [[],[],[]];
// alert("Length of Empty Array: " + emptyMulArr.length);

// Task: 02
var mulArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2], 
    [2, 1, 0, 1]
];

// Task: 03
for(var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Task: 04
var table= +prompt("Enter Table Number that you want to generate: ");
var length = +prompt("Length of the Table: ");

document.write("<h1>Table</h1>")

for(var i=1; i<=length; i++) 
{
    document.write(table + " x " + i + " = " + table*i + "<br><br>");
}

// Task: 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

// Task: 06
// a)
document.write("<h1>a) Counting</h1>")
for(var counting = 1; counting <= 15; counting++) {
    document.write(counting + " , ");
}

// b)
document.write("<h1>b) Reverse Counting</h1>")
for(var revCount = 10; revCount > 0; revCount--) {
    document.write(revCount + " , ");
}

// c)
document.write("<h1>b) Even </h1>")
for(var even = 1; even <= 20; even++) {
    if(even % 2 === 0) {
        document.write(even + " , ");
    }
}

// d)
document.write("<h1>b) Odd </h1>")
for(var odd = 0; odd <= 20; odd++) {
    if(odd % 2 === 1) {
        document.write(odd + " , ");
    }
}

document.write("<h1>b) Series </h1>")
for(var series = 1; series <= 20; series++) {
    if(series % 2 === 0) {
        document.write(series + "k, ");
    }
}

// Task: 07
document.write("<h1>XYZ Bakery</h1>")
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome To XYZ Bakery.What do you want to order Sir/Madam");

for( var item = 0; item <= items.length; item++){
    if(search.toLowerCase() == items[item]){
        document.write(search + " is availaible at index " + item + " in our bakery" + "<br><br><br>");
    }
    else {
        document.write("We are Sorry this item is not available in our Bakery right now...");
    }
}

// Task: 08
var findLarge = [24, 53, 78, 91, 12];

document.write("Array: " +findLarge + "<br>"); 
document.write("The Largest Number in the given Array is: " + Math.max(...findLarge) + "<br><br>");

// Task: 09
var findSmall = [24, 53, 78, 91, 12];

document.write("Array: " +findSmall + "<br>"); 
document.write("The Smallest Number in the given Array is: " + Math.min(...findSmall) + "<br><br>");

// Task:10
for(var multipleOf5 = 5; multipleOf5 <= 100; multipleOf5 = multipleOf5 + 5) {
    document.write(multipleOf5 + " , ");
}
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
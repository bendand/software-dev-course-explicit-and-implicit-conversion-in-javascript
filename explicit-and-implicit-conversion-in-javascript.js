/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// broke down the variable subtraction into more steps, making the code
// easier to follow. can convert x value with Number(), though the interpreter 
// makes the decision to convert data type automatically to a number
let x = "5";
let y = 2;
let result = x - y;
console.log("The result is: " + result);

// Boolean() wrapper was unnecessary and caused confusion, because it wrapped a non-empty string 
// which evaluated the code to boolean true. so I just initialized the false value as a bool
let isValid = false;
if (isValid) {
    console.log("This is valid!");
}

// converting age to a primitive Number makes the addition work fine
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);


// MY EXAMPLES

// EXPLICIT CONVERSION
let someInput = '5';
let anotherInput = null;

let sumInputs;

if (someInput === null && anotherInput == null) {
  sumInputs = 0;
} else if (someInput === null) {
  sumInputs = Number(anotherInput);
} else if (anotherInput === null) {
  sumInputs = Number(someInput);
} else {
  sumInputs = Number(someInput) + Number(anotherInput);
}

console.log(sumInputs);


// IMPLICIT CONVERSION

let numX = 3;
let numY = '8';
let product = numX * numY;

console.log(product);



// how to USE a function: fuctionName(); sends message  to the console. For inspecting things
console.log("Good Morning Jose!");

console.log ("Adios Jose!")

//Variable holds data. Space is very important. Camel Case-do not start with capital letter. Keep things short. Define your variables first then defined them. Use var to define your variables!!!
var  myFirstVariable;
myFirstVariable= "My name is Jose.";
//Calling-asking something from it. Calling a variable. We use value to refr them later.
console.log(myFirstVariable);

//Second Variable
var mySecondVariable = "My name is Mike";

// The most common Datatypes. String is a string of characters, we can use single or double quotes.
//Strings(the actual type) cannot be used in math (NAN). Putting the Data in  variable.

"What is your name?";



//These are five diferent in the computer.
//console.log(myFirstVariable);
//console.log(myFirstVariable);
//console.log(myFirstVariable);
//console.log(myFirstVariable);
//console.log(myFirstVariable);

// Number
10;
9;
20;
0;
console.log(100000);
-10.5;
"10"; // NOT A NUMBER, IT is a string instead.

// Boolean is a true or false. Turns on and off.
true; // (1)
false; // (0)

// Mathematical Operators
(10 + 10); // 20  addition -> Sum(is one value) This is a statement
(5 - 10); // -5 Substraction-> Difference
(2 / 5); // .40 Division-> Quotient
(2 * 5); // 10 Multiplication-> Product
(10 % 3); // 1 Modulus -> Modulo(left overs)

//Common way to  use Modulus
100 % 2 == 1; // Is ODD number
104 % 2 == 0; //Even Numbers

var myMostImportantNumber = (50 -10);

console.log(myMostImportantNumber);

// celsicuis of ferengi
var currentCTemp = 23;

// parenthesis tell the computer which one value is first. Inner parenthesis first. 
var cToF = ( (currentCTemp * (9/5) ) + 32) ;

console.log(cToF);

// Logical Operators. Logic in computers, ex. it is raining and whatt people should take outside. This is a way for computer what to take. Allows us to test 

// === Equal to (only for number for now.)

(100 == 100); // Becomes a true
(101 == 100); // Becomes a false
(101.1 == 101.2); // different values, so becomes false.
("raining" == "sunny"); //Becomes a false 
("Raining" == "raining"); // Becomes false(they do not have the same character for both sides)
(" raining" == "raining"); // false because of the extra character "space"
(true == true); // true
(true == false); // false
(false == false); // true because you are comparing values.

// >, <. >==, <== Greater Than, less Than, Greater than or equal to, less than or equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); //true
(100 <= 100); // true because is either one
(99 <= 100); // true

//Not Equal to
(100 != 100); //false
(100.1 != 100); //true



(mySecondVariable=="Jose"); //false

// Boolean operator

// ||OR operator

(true || false); //true
(false || false); //true
(false || false); //true
(false || false); //false

// & AND operator(booth sides has to be true)
(true && false); //false
(true && true); //true

// Bolearn Operator "Not operator"
!false; //true
!true; // false


(false || true || false);
//becomes, from left to right
(true ||  false);
// Becomes
true;

(100 == 100 || 50 == 51 || mySecondoVariable == "Jose");
true || mySecondVariable =="Jose";

var someData = "important"
someData ="not so important" // important get replaced, get reassign.
// Arrays & Objects
// Arrays allows is to hold multiple values.
var myFirstArray = ["important", "not so important"];

// No comma after the last value
var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

//Addresses from left to right, start from 0.
console.log(myFirstArray[0]);

console.log (daysOfWeek[4]);

//adding another value in the array, make sure to provide an index number
daysOfWeek[7] = "Superday";

// Upadate values, call values and the index values.
daysOfWeek[2] = "whensday";

console.log(daysOfWeek);

// Array Functions

// array.push() Adds the value to the END of the array
myFirstArray.push("hello!");

console.log(myFirstArray);


//array.pop() Removes the value at the END of the array.

myFirstArray.pop();

console.log(myFirstArray);

// array.unsift() Add the value to the START of the array.
myFirstArray.unshift("sunny day");
console.log(myFirstArray);


// array.shift(); Removes the valuo at the STARt of the array.
myFirstArray.shift();
console.log(myFirstArray)


// array.splice(); Break something open, and add. Inclusive-means removing the index. First value of the array the first value is 0.

daysOfWeek.splice(3, 0, "Breakday");

console.log(daysOfWeek);


// Objects, Curly braces.

var myFirstOdject = {
    "firstName": "Jose", ///Properties,Key-represents key name, value- pair
    "job": "Think",
    "age": 28
};

var myThirdArray = ["Jose", "Think", 30]
//Bracket notation
console.log(myFirstOdject["firstName"]);

//Only for object. DOT notation 
console.log(myFirstOdject.job);


myFirstOdject.job = "CCF";
myFirstOdject.favFood = "Burrito";
myFirstOdject.age = null;

// Removes the key-value pair from the object.
     delete myFirstOdject.age;

console.log(myFirstOdject);


console.log(typeof []);


//What is a condition ? is a requirement that computer to test.
//Conditional Statement. IF statement needs to have a true value in ord to run/excecute the code in its code block.

//Conditional statement syntax
// Syntax: If (thrue or false value) { code to run based on conditions in parenthesis. }
if (myFirstOdject.firstName == "Jose") {
    console.log("This was true!") //This is a code block
}


var numberToTest = 16;

if (numberToTest >0 ) {
    console.log(" The number is positive.");
}

if (numberToTest == 0) {
    console.log("The number is  zero.");

}

if (numberToTest < 0) {
    console.log("The number is negative.");
}


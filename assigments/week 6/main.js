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


var numberToTest = -4;

if (numberToTest >0 ) {
    console.log(" The number is positive.");
} else {
    console.log("The Number is Not positive.");
}

console.log("Hello!");

if (numberToTest == 0) {
    console.log("The number is  zero.");

 } else {
     console.log("This nomber is not a Zero");
 }

if (numberToTest < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is NOT negative.");
}

//If statements
//February 24, 2021

var personAge;

personAge =13;

var personLikesDrinking = true;
if (personAge >= 21 && personAge <= 25) {
    console.log("Congrants! You are of drinking age!");

    if (personLikesDrinking == true) {
        console.log("What alcholic drink do you like?");
    }

} else if (personAge >= 26 && personAge <= 40) {
    console.log("Do you want to go grab a beer?");
} else {
    console.log("Have you tried video games?");
}


//Loops: while-will run the code again while (true)

//While loop, CHECK FIRST if condition is tru, if true THEN run code block.
var continueRunning = 0;

while (continueRunning < 10) {
         console.log("We ran the loop once!");

         //reassined the value to false, so the continueRunning value will change to false. Everything on the right side happens first we calling a variable.
         continueRunning = continueRunning + 1;

         var count = 0;
         
         //inner loops is the power of the inner loop 10 * 10 = 1000. This inner loop run 100. Big O notation N2 not good. 
        //  while (count < 10) {
        //      console.log("inner loop ran!");
        //     count = count + 1;
        //      }

}



 var personAnswer = "no";

// Do While Loop, Rund code block FIRST, then checks the condition.
// do {
//     console.log("Ran one loop!");

//     personAnswer = prompt("Continue the loop?"); //we no longer use the promp
// } while (personAnswer == "yes");


// For loops, "condition" area has THREE parts.
// Syntax: for (counter; conditions; iterator) {}

for (var keepRunning = 0; keepRunning < 10; keepRunning = keepRunning + 1) {
    console.log("This for loop ran once!");
}

for (var i = 0; i < 10; i++) {
     
    // if (valueAlreadyFound == true) {
    //     // If the program ever hits this keyword,it will end the loop completely.
    // break;
    // } 

    // if (color == "red") {
    //     // If the program hits this keyword, will end this specific iteration(individual (cycles) loops, ex. 10 iteration, to represet 10 cycles,).
    //     continue;
    // }
    // //break stops the loop. Only use it in a loop. breakt the entire loop
    // // Continue, breaks one of the individual loops.
    console.log("the color is blue");
}

// Double plus, adds a 1 to the variable.
// double minus, removes a 1 from the variable.
// i++ is the same as i = i + 1



//Practice  chapter 2 For loop. It is harder to custumize loops.
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
}
console.log(result);


// .forEach(); each function, goes throug it and does something to the values.
// A fuction for arrays that goes through each element of the array 
var someArray = [10, 20, 30, 40, 50];
someArray.forEach(function(arrayValue) {
    console.log(arrayValue + 100);
});


// Fuctions, are tiny little sets of codes.

function myFirstFunction() {
    console.log("hello from first function!");
}

// This is how we call a function
myFirstFunction();
myFirstFunction();
myFirstFunction();


//Parameters (fancy name for variable that belong to a function) they accept values and Arguments (fance name for the value of a parameter.) Abstracting code(we dont know what is has, but we know what it does, deals with the logic)

// Parameter are wrriten within the Parenthesis of the DEFINITION(what the fuction is called)
function addTwoNumbers(firstNumber, secondNumber) {
    var total = firstNumber + secondNumber;

    console.log(total);
}

// Arguments(values are assigned to, fancy name for var) are written within the parenthesisi of the CALL.
addTwoNumbers(10, 1);
addTwoNumbers(100,5);
addTwoNumbers(-5, 10);

// Returning Values from frunctions

// Concatenation (fancy word for): combining two strings.

function makeExciting(sentence) {
    var excitingSentence = sentence + "!!!";

    console.log(excitingSentence);

    return [excitingSentence, excitingSentence, 1000];
}

// Fuction calling
// Storing the fuctions 
 var savedSentence = makeExciting("Hi there");
 var savedSentence2 = makeExciting("Would you like ice cream");

 console.log("The value" + savedSentence);



//Example Function, Math Summarizer;

    function mathSummarizer(num1, num2) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var differenceReversed = num2 - num1;
    var quotient = num1 / num2;
    var quotientReversed = num2 / num1;
    var product = num1 * num2;

    // adding objects  ex "sum"
    // Retur [ sum, differene, differenceReversed, quotient, quotientReversed, product];

    var object = { "sum": sum,
    "Difference": difference, "differenceReversed": differenceReversed, "Quotienet": quotient, 
    "Quotient Reversed": quotientReversed, "Product": product 
    };

    return object; //data goes out of the function.
}

// Main function
function mathForMe(num1, num2) {
    
    var number1 = num1;
    var number2 = num2;
    var results = mathSummarizer(number1, number2);

    for (var keyName in results) {
        console.log("The" + " " + keyName + " of " + number1 + " and " + number2+ " is " + results[keyName]);
    }
    
    console.log(" ");
}

//Calling the funtion

mathForMe(10, 20); // Each of these calla requal to ~25 lines of code.
mathForMe(50, 100);
mathForMe(54, 234);
mathForMe(23, 320);



// var number1 = 50;
// var number2 = 100;

// var results = mathSummarizer(number1, number2);

// console.log(results);

// var sumSentence = "The sume of 9 and 15 is " + results["sum"];
// var productSentence = "The product of 9 and 15 is " + results["Product"];

// console.log(productSentence);


// for (var keyName in results) {
//     console.log("The" + " " + keyName + " of " + number1 + " and " + number2+ " is " + results[keyName]); }

// Nan: Not a Number, meaning you multiplied or divided by a value that cannot be mutliplied or divided.

// Infinity: what is this?

// Practice
var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
        
    }
       return result;
    }
    
   console.log(power(2, 10));
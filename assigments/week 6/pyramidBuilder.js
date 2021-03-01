///console.log("Hello world!");

/*
*
**
***
****
*****
****
***
**
*
*/

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("***");
// console.log("**");
// console.log("*");




var userHeightValue = 14;
var userCharacterValue = "$"
var currentColumn= ""
for (var i = 0; i < userHeightValue; i++ ) {
    console.log(currentColumn);

    currentColumn = currentColumn + userCharacterValue;

}

// for loop  add the last 6 columns

for ( var i = 0; i < userHeightValue - 1; i++) {
    currentColumn =removeLastChar(currentColumn);
    console.log(currentColumn);
}

// console.log("currentColumn end" + currentColumn);


// var asteriskArray = currentColumn.split("");

// console.log(asteriskArray);

// asteriskArray.pop();
// console.log(asteriskArray);

// var myNewString = asteriskArray.join("");

// console.log(myNewString);


// call a function

function removeLastChar(text){
    var textArray = text.split(""); //Each character will be by its own.
    textArray.pop();
    var newText = textArray.join("");

    return newText;

}
// How to covert a string in arrays. we can pop, push and add.
// The split method for strings


// String to Arrays.
 var myString = "Jose";

 var myNewArray = myString.split(""); // The split every caracter. goes through the string and finds the a for example. Splits word and deletes the delimeters(word selected). Split converts String into array.

 console.log(myNewArray);

 myNewArray.pop();

 console.log(myNewArray);

 var myNewString = myNewArray.join("");// converts an array into string.

 console.log(myNewString);
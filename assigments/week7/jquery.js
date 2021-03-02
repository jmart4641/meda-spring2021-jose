// console.log("hello!")
//A library is something that has a bunch of codes avaliable for use. In a library you never change the code

// $ respresent jQuery. $(); or jQuery(); the fuctions that you write whenever you using a jQuery file.  This represents that entire jQuery file.
// Document reprensent the DOM objects.
// Obsolete no longer working, depricated mean will not work in the future.
//.ready for the document to be ready
// Syncronous js does not work from top to bottom

//jQuery(); the . ready() function is deprecated, you can use $(function(){}); instead. HTML loads first 

// You do not need to any vital, sensative data on the front end. Instead have it back.
var myCreditCardNumber = 98755433234567788991;

$(document).ready(function () {

    //how do we test jQuery

    /* 
        jQuery Common Fuctions
        .remove(); removes the selected DOM Element(anything that is in the web browsers that look like HTMLS, anything that can be selected.)
        .css() modifies the css of the selected element. First argument is CSS porperty, second argument is CSS value.
        .click(); runs a fuction when the selected element is clicked on.
        .val(); Gets or sets the value of an input element. If no arguments, then gets the value, if 1 argument, set the argument value inside of the box.
        .text(); Writes the text provided inside of the slected  HTML element. It can set a value and get the value.
    */

    console.log("jQuery is ready!")

    var myOnlyButton = $("#my-button"); //returning the value, it the value is getting returned here with need value. we store it in myOnlyButton. .remove after the button after html was loaded.


    // myOnlyButton.remove();

    // $("head").remove();
    // $("body").remove();


    // Waits some time and the run the code specified. This is a JavaScript Function.

    setTimeout(function () {
        //Code to run when setTiimeout "finishes" set mili seconds 5000,5 seconds. Synchronous code runs from top to bottom. Asynchronous is when multiple code runs. Runs and finishes at its own time line. For example the 5000 mili second code take its time while the other code runs.

        myOnlyButton.css("background-color", "#5C73F2");
        myOnlyButton.css("border-radius", "5px");

    }, 5000);

    var functionToRunForButton = function () {
        myOnlyButton.css("color", "white");
        $("body").css("background-color", "yellow");

    };

    // call back functions, something else is in charge of running it, we keep going or runs, Asynchrous.
    myOnlyButton.click(functionToRunForButton);

    var formSumit = $("#submit");


    // Important rule: Any VALUE that comes from outside of JavaScript, is AOUTOMATICALLY a string data type.
    formSumit.click(function () {

        //Get value form input.
        var submittedData = $("#user-information").val();

        if (submittedData == "") {
            $("#resultsParagraph").text("you didn't type anything inn!");
            // return;
        } else {
            //PareseInt(); tries to convert the value provide into a number data type.

            var convertedData = parseInt(submittedData);
            
            // You cannot compared objects such as ===.  ex. {user: "jose"} == {user: jose}; Each object are unique. Even though objects may look the same, they are ALWAYS unique.
            // console.log(NaN == NaN);

            // IsNaN, indicates if the value is NaN 
            if (isNaN(convertedData)) {
                $("#resultsParagraph").text("Sorry  but that input is invalid, Please type numbers only and try again.");
            } else {

            //Multiply the value by 10.
            var mathStuff = convertedData * 10;

            //Write a sentence with the results into our paragraph.
            $("#resultsParagraph").text("We multiplied your number by then and got: " + mathStuff);

            }
        }


        console.log("This script is finished!");

        // console.log(convertedData + 1000);
        // console.log(true,100);
    })


});



// $();

// function myFuction(){
//     //do this stuff
// }
/* myFuction();*/


//March 2, 2021
//setter(provide a value, set value) and getter(get the current values)


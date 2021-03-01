// console.log("hello!")
//A library is something that has a bunch of codes avaliable for use. In a library you never change the code

// $ respresent jQuery. $(); or jQuery(); the fuctions that you write whenever you using a jQuery file.  This represents that entire jQuery file.
// Document reprensent the DOM objects.
// Obsolete no longer working, depricated mean will not work in the future.
//.ready for the document to be ready
// Syncronous js does not work from top to bottom

//jQuery(); the . ready() function is deprecated, you can use $(function(){}); instead. HTML loads first 



$(document).ready(function(){

//how do we test jQuery

/* 
    jQuery Common Fuctions
    .remove(); removes the selected DOM Element(anything that is in the web browsers that look like HTMLS, anything that can be selected.)
    .css() modifies the css of the selected element. First argument is CSS porperty, second argument is CSS value.
    .click(); runs a fuction when the selected element is clicked on.
    .val(); Gets or sets the value of an input element. If no arguments, then gets the value, if 1 argument, set the argument value inside of the box.
    .text(); Writes the text provided inside of the slected  HTML element.
*/

console.log("jQuery is ready!")

var myOnlyButton = $("#my-button"); //returning the value, it the value is getting returned here with need value. we store it in myOnlyButton. .remove after the button after html was loaded.


// myOnlyButton.remove();

// $("head").remove();
// $("body").remove();


// Waits some time and the run the code specified. This is a JavaScript Function.

setTimeout(function(){
    //Code to run when setTiimeout "finishes"
    myOnlyButton.css("background-color", "#5C73F2");
    myOnlyButton.css("border-radius", "5px");

}, 5000);

var functionToRunForButton = function(){
    myOnlyButton.css("color", "white");
    $("body").css("background-color", "yellow");

};

myOnlyButton.click(functionToRunForButton);

var formSumit = $("#submit");


// Important rule: Any VALUE that comes from outside of JavaScript, is AOUTOMATICALLY a string data type.
    formSumit.click(function() {

        //Get value form input.
        var submittedData = $("#user-information").val();
        var convertedData = parseInt(submittedData);
        
        //Multiply the value by 10.
        var  mathStuff = convertedData * 10;

        //Write a sentence with the results into our paragraph.
        $("#resultsParagraph").text("We multiplied your number by then and got: " + mathStuff);

        //PareseInt(); tries to convert the value provide into a number data type.

        // console.log(convertedData + 1000);
        // console.log(true,100);
    })
      
    
});



// $();

// function myFuction(){
//     //do this stuff
// }
/* myFuction();*/
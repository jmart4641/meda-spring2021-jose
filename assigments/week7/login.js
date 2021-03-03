//$ jquery link
$(document).ready (function(){

    $("#login").click(function(event){

         event.preventDefault(); // Js prevents its action, or event(key, move your muse, hover, click on something.) disable the buttons.

        var username = $("#username").val();
        var password = $("#password").val();
    
        /// type conversion ==,  but === it check data type, do not change data type.
        if (username === "student") {

            if (password === "123456") {
                console.log("congrats, you are now logged in!");
                window.location.replace("http://www.yahoo.com/");
            // } else if (password === "one23456") {
            //     console.log("Hi not a correct passoword")
            }else {
                console.log("Wrong password!");
            }
        } else {
            console.log("Username  is wrong!");
        }


        // Recommend to create a text in the inputbox if not the correct password


        
    }); //This is the jquery selector, a click and a call back.
});



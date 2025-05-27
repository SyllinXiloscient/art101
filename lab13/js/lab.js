/*
    Task 2
    JavaScript - FizzBuzz
    Daisy Ly
    May 2025
*/

// Create a fizzbuzz function
// Use a for loop to print all the numbers from 1 to 100. Test and debug.
function fizzBuzz () {
    for (let i = 1; i <= 200; i++) {
        // Start with empty string to build up
        var str = '';
        // For numbers which are multiples of more than one 3, 5, or 7, print combination instead.
        if (i % 15 == 0) {
            console.log("FizzBuzz!");
            str += "FizzBuzz!";
        }
        else if (i % 21 == 0) {
            console.log("FizzBoom!")
            str += "FizzBoom!";
        }
        else if (i % 35 == 0) {
            console.log("BuzzBoom!")
            str += "BuzzBoom!";
        }
        // Add an if statement: if the number is a multiple of 3, print “Fizz!” instead of the number.
        else if (i % 3 == 0) {
            console.log("Fizz!");
            str += "Fizz!";
        }
        // Add an else if condition: If the number is a multiple of 5, print “Buzz!” instead of the number.
        else if (i % 5 == 0) {
            console.log("Buzz!");
            str += "Buzz!";
        }
        // Add an else if condition: If the number is a multiple of 7, print “Boom!” instead of the number.
        else if (i % 7 == 0) {
            console.log("Boom!");
            str += "Boom!";
        }

        if (str == '') {
            str += i;
        } else {
            str += "!";
        }
        debugger;
        $("#output").append("<p>" + str + "</p>")
    }
}

fizzBuzz();

// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Neuvillette (Genshin Impact)" + '</p></div>');
});
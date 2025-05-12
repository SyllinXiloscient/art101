/*
    Task 3
    JavaScript - jQuery Buttons [to modify elements on the page]
    Daisy Ly
    May 2025
*/

// Add button to challenge section
$("#challenge").append("The challenge of this lab was to create buttons and experiment with jQuery, and create and style our Lab 9 pages.");

// Add button to problems section
$("#problems").append("We both had problems trying to make the buttons do something.");


// Add button to reflection section
$("#reflection").append("My partner, Helwa Halloum, and I met up at 2 PM on Monday, May 12th, to work on the lab together.");

// Add button to results section
$("#results").append("View the results on this page!");


// Add a click listener to the challenge button
$("#button-challenge").click(function(){
    // Now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
})

$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
})

$("#button-reflection").click(function(){
    $("#reflection").toggleClass("special");
})

$("#button-results").click(function(){
    $("#results").toggleClass("special");
})
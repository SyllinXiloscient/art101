/*
    Task 3
    JavaScript - jQuery Buttons [to modify elements on the page]
    Daisy Ly
    May 2025
*/

// Add a click listener to the buttons
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
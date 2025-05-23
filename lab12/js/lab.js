/*
    Task 2
    JavaScript - Sorting Hat
    Daisy Ly
    May 2025
*/

// Create a function sortingHat()
function sortingHat(str) {
    // Count the letters in str and assign it to a variable length
    let length = str.length;
    // Use modulus (% operator) to get the remainder with 4: mod = length % 4;
    let mod = length % 4;
    // Create a conditional that will return one of four iconic houses depending on whether the value of mod is 0, 1, 2, or 3
    if (mod ==0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Slytherin"
    }
    else if (mod == 2) {
        return "Hufflepuff"
    }
    else if (mod == 3) {
        return "Ravenclaw"
  }
}

// Create a click listener attached to #button
$("#button").click(function(){
// Get the value of #input and assign it to a variable name
let name = $("#input").val();
// Run sortingHat(name) and store the result in a variable house
let house = sortingHat(name);
// Append a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$("#output").html("The Sorting Hat has sorted you into " + "<h5>" + house + "!!!" + "</h5>");
});


// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Harry Potter (Harry Potter)" + '</p></div>');
});
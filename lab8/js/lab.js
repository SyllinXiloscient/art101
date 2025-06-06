// Task 3
// JavaScript array.map Console Experiment
// Daisy Ly
// May 2025

// Create array of numbers and assign it to a variable
array = [1, 20, 35, 40, 55];
console.log("My array", array);

// Create a named function with a calculation
function isTotal (x) {
    return (x + 10);
}

// Test function
console.log("What is 2 + 10? ", isTotal(2));
console.log("What is 70 + 10? ", isTotal(70));

// Use map on array as a callback to operate on all numbers in your array
var result = array.map(isTotal);
// Should return [11, 30, 45, 50, 65]
console.log("Add 10 to the array", result);

// Use new anonymous function as a callback with map to do new operation
var mapResults = array.map(function(x){
    return (x * 3);
})
// Should return [3, 60, 105, 120, 165]

// Set variable to results of map function and print
console.log("Array*3", mapResults);



// Display callback function with jQuerys
var array = "<b>My original array: </b>" + "[" + array + "]";
// Use jQuery to select the element by its ID and set the HTML content
$("#output3").html(array);

// Display callback function with jQuerys
var result = "<b>Add 10 to the array: </b>" + "[" + result + "]";
// Use jQuery to select the element by its ID and set the HTML content
$("#output2").html(result);

// Display callback function with jQuerys
var mapResults = "<b>Array*3: </b>" + "[" + mapResults + "]";
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);



$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Shoto Todoroki (My Hero Academia)" + '</p></div>');
});
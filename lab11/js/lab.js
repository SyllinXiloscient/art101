/*
    Task 2
    JavaScript - Anagram Button
    Daisy Ly
    May 2025
*/

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function(){
    // Get value of input field
    const userName = $("#user-name").val();
    
    // Now let's sort it
    userNameSorted = sortString(userName);
    
    // Append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Aether (Genshin Impact)" + '</p></div>');
});
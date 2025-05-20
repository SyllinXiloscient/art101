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

// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Aether (Genshin Impact)" + '</p></div>');
});

// Function to shuffle the characters of a string
function shuffleString(inputString) {
    const charArray = inputString.split('');
    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    return charArray.join('');
}

// Click listener for button
$("#randomizeButton").click(function(){
    // Get value of input field
    const charArray = $("#user-name").val();
    
    // Now let's shuffle it
    userNameRandomized = shuffleString(charArray);
    
    // Append a new div to our output div
    $("#randomizeoutput").html('<div class="text"><p>' + userNameRandomized + '</p></div>');
});
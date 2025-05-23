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
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Hufflepuff"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Ravenclaw"
    }
}


function getHouseDescription(house) {
    let description;
    if (house === 'Gryffindor') {
        description = 'You belong in Gryffindor, where dwell the brave at heart. Their daring, nerve and chivalry set Gryffindors apart.';
    } else if (house === 'Slytherin') {
        description = 'You belong in Slytherin, where you’ll make your real friends. Those cunning folk use any means to achieve their ends.';
    } else if (house === 'Hufflepuff') {
        description = 'You belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.';
    } else if (house === "Ravenclaw") {
        description = 'You belong in wise old Ravenclaw with your ready mind, where those of wit and learning always find their kind.';
    }
   return description;
}

function getHouseCrest(des) {
    let img;
    if (des === 'You belong in Gryffindor, where dwell the brave at heart. Their daring, nerve and chivalry set Gryffindors apart.') {
        img = document.createElement('img');
        img.src = './img/gryffindor-crest.png';
    } else if (des === 'You belong in Slytherin, where you’ll make your real friends. Those cunning folk use any means to achieve their ends.') {
        img = document.createElement('img');
        img.src = './img/slytherin-crest.png';
    } else if (des === 'You belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.') {
        img = document.createElement('img');
        img.src = './img/hufflepuff-crest.png';
    } else if (des === 'You belong in wise old Ravenclaw with your ready mind, where those of wit and learning always find their kind.') {
        img = document.createElement('img');
        img.src = './img/ravenclaw-crest.png';
    }
   return img;
}

let cred = "<i>(Harry Potter and the Philosopher's Stone. Edited for grammar purposes.)</i>"

// Create a click listener attached to #button
$("#button").click(function(){
// Get the value of #input and assign it to a variable name
let name = $("#input").val();
// Run sortingHat(name) and store the result in a variable house
let house = sortingHat(name);
// Run getHouseDescription(house) and store the result in a variable house
let des = getHouseDescription(house);
// Run getHouseCrest(description) and store the result in a variable house
let crest = getHouseCrest(des);
// Append a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$("#output").html("The Sorting Hat has sorted you into " + "<h5>" + house + "!!!" + "</h5>");
$("#output2").html(des);
$("#output4").html(crest);
$("#output3").html(cred);
});


// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Harry Potter (Harry Potter)" + '</p></div>');
});
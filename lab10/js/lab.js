/*
    Task 3
    JavaScript - Append New Element to Output Div
    Daisy Ly
    May 2025
*/

function generateRandomText() {
    const text = "Sebastian: My young master Ciel has another name. He's also known as the Queen's guard dog for his own in policing England's seedy underground. His small body houses great determination. You will marvel at the bravery he displays when dealing with the drug traffic in the ring. Also, feel free to admire my notable skills with the silver upon which I stake my honor as a Phantomhive butler. Next time on Black Butler, <i>His Butler, Strongest</i>. You see, I am simply one hell of a butler.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo").click(function(){
    // Get new fake dialogue
    const newText = generateRandomText();
    // Append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});


function generateRandomText1() {
    const text = document.getElementById('inputField').value;
    const min = 3;
    const max = 50;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo1").click(function(){
    // Get new fake dialogue
    const newText = generateRandomText1();
    // Append a new div to our output div
    $("#output1").append('<div class="text"><p>' + newText + '</p></div>');
});

$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output2").html('<div class="text1"><p>' + "Sebastian Michaelis (Black Butler)" + '</p></div>');
});
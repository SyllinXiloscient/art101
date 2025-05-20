// Task 2
// JavaScript sortUserName
// Daisy Ly
// May 2025

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hellohello! Give me your name, hehehe >:)).");
    console.log ("userName =", userName);
    // Split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // Sort the array
    var nameArraySort = nameArray.sort(function(a,b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a==b) return 0;
        return a < b ? -1: 1;
    });
    console.log("nameArraySort =", nameArraySort);
    // Join the array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSortedd =", nameSorted);
    // Note that I could have done the above lines as a single line:
        // userName.toLower().split("").sort().join("")
    return nameSorted;
}

// Output
document.writeln("I fixed your name >:)). Better appreciate it: ",
    sortUserName(), "</br>");

$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Hanamaruobake (Sanrio)" + '</p></div>');
});
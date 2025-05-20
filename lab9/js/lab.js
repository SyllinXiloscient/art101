/*
    Task 3
    JavaScript - jQuery Buttons [to modify elements on the page]
    Daisy Ly
    May 2025
*/

$(".special-section button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Ciel Phantomhive (Black Butler)" + '</p></div>');
});
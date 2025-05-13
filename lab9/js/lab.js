/*
    Task 3
    JavaScript - jQuery Buttons [to modify elements on the page]
    Daisy Ly
    May 2025
*/

$(".special-section button").click(function(){
    $(this).parent().toggleClass("special");
})
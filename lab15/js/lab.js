/*
    Task 3
    JavaScript - AJAX and API
    Daisy Ly
    May 2025
*/

$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://yesno.wtf/api",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                id: 123,
                api_key: "blahblahblah",
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            console.log(data);
            // extract the answer from data
                let answer = data.answer;
            // extract image from data
                let imgURL = data.image;
            // build image html
                let imageHTML = "<img src = '" + imgURL + "'>";
            // equivalent to above - but using string interpolation
                //let imageHTML = `<img src = '${imgURL}'>`;
                // callback for failure - chained to ajax

            // insert the output in the output div
                $("#output").html("<h4>" + answer);
                $("#output").append(imageHTML);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Ajax AKA Childe AKA Tartaglia (Genshin Impact)" + '</p></div>');
});
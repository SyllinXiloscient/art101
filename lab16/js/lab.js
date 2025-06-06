/*
    Task 4
    JavaScript - Comic
    Daisy Ly
    June 2025
*/

var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getAndPutData(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  
var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
// Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://xkcd.com/614/info.0.json",
        // The data to send (will be converted to a query string)
        data: {},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
  success: function(comicObj) {
    // Store the object in a variable as requested
    var comicObj = comicObj;
    // Create a container for the comic
    var output = $('<div>').addClass('output');
    // Add the title
    var title = $('<h3>').text(comicObj.title);
    output.append(title);
    // Create and add the image
    var comicImg = $('<img>')
      .attr('src', comicObj.img)
      .attr('alt', comicObj.alt)
      .attr('title', comicObj.title);
    output.append(comicImg);

    // Add the container to the webpage (you might want to specify where)
    $('body').append(comicContainer); // Or use another selector like $('#comics-container')
          var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
        </div>`
      // console.log("My new html: \n", html);
      $("#output").html(html);
      // add event listener to new prev button
      $("#prev").click(function(){
        getAndPutData(comicObj.num - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        getAndPutData(comicObj.num + 1);
      });
  },
  error: function (jqXHR, textStatus, errorThrown) { 
    // do stuff
    console.log("Error:", textStatus, errorThrown);
  }
});
}
getAndPutData();

// Reveal Character
$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Cinnamoroll (Sanrio)" + '</p></div>');
});

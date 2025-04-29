// Task 2
// JavaScript Console with Data About Transportation
// Daisy Ly
// April 2025

// Define Variables
myTransport = ["Honda Odyssey", " Santa Cruz buses", " rides from friends", " walking"];

// Create an object for my main ride
myMainRide = {
  make : "Honda",
  model : "Odyssey",
  color : "Black",
  year : 2016,
  // we can define a function within our object (called a method)
  // that uses the value of year above (using this.year)
  age : function() {
    return 2025 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
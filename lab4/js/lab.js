// Sticks
// An implementation of the game
// Daisy Ly <dly11@ucsc.edu>
// April 2025

// Title screen
	// Accept user input to start game
	// Await user input for players (players: 2)
	// Accept user input (players: 2)
	// Game start
	// Players start with 2 hands, 1 finger each
	//  Accept player 1 move
  //  Validate player 1 move
		// Tap 1 of the opponent’s hand to add 1 finger (point) to opponent’s hand
			// If finger # is greater than 1
        // Then add finger # amount to opponent’s hand
		// If player has even total # fingers, player can tap hands together to move half # fingers to other hand
			// Player input: If finger # is 3 on one hand (3 & 1)
			  // Then add additional finger to single finger hand (2 & 2)
			// Player input: If finger # is 4 on one hand (4 & “dead” hand)
				// Then split into 2 fingers on each hand (2 & 2)
	// Evaluate possible moves from player 1
	// Accept player 2 move
	// Validate player 2 move
		// Tap 1 of the opponent’s hand to add 1 finger (point) to opponent’s hand
			// If finger # is greater than 1
			  // Then add finger # amount to opponent’s hand
		// If player has even total # fingers, player can tap hands together to move half # fingers to other hand
			//  Player input: If finger # is 3 on one hand (3 & 1)
			  // Then add additional finger to single finger hand (2 & 2)
			// Player input: If finger # is 4 on one hand (4 & “dead” hand)
				// Then split into 2 fingers on each hand (2 & 2)
	// Evaluate possible moves from player 2
	// Test of win condition
		// If a player’s hand reaches 5 finger count
		  // Then a player loses a hand
		// If a player reaches 0 hands
		  // Then player loses and opponent wins

// Taking History Lessons in Twisted Wonderland
  // Click the Twisted Wonderland app icon to start the game on the device
  // Accept user input
  // Wait for the game to load
  // User is prompted to tap the screen at the title screen
  // Accept user input
  // At the home screen, navigate to the “Lessons” tile and click it
  // Accept user input
  // Scroll through the dorm tiles and navigate to the tile that corresponds to the desired study partner
  // Accept user input
  // Click the dorm tile that corresponds to the desired study partner
  // Accept user input
  // Click the tile for the desired study partner
  // Accept user input
  // Navigate to the “history” tile and click it
  // Accept user input
  // Click on one of the empty character slots and select the character card that user wishes to level up
  // Accept user input
  // Repeat step 16 until all five character slots are filled
  // Accept user input
  // Click the start button
  // Accept user input
  // Select how to proceed with lesson
    // Click the “loop” button to automatically repeat the same lesson until user’s lesson points run out
    // Click the “auto” button to automatically play through one lesson
    // Manually tap the screen to go through one (of seven) character turns in a lesson
  // Accept user input
  // Lessons will proceed

// Constants

// Functions

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Lilia Vanrouge (Twisted Wonderland)" + '</p></div>');
});
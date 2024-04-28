function playGame() { // Defining the function playGame
    var playerChoice = 
  document.getElementById("playerChoice").value.toLowerCase(); // Getting the HTML input player choice and converting it to lowercase
    var computerChoice = generateComputerChoice(); 
  
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') { // Checking the player's choice is valid or not
      document.getElementById("result").innerText = "Invalid input! Please enter Rock, Paper, or Scissors."; // Display an error message if not valid
      return;
    }
  
  var result = determineWinner(playerChoice, computerChoice); // Determining the winner of the game based on the player's choice and the computer's choice
    document.getElementById("result").innerText = result; // Displaying results
  }
  
  function generateComputerChoice() { // Function defining the computer's choice
    var choices = ['rock', 'paper', 'scissors']; // Which choices the computer can pick
    var randomIndex = Math.floor(Math.random() * 3); // Randomly generate a pick between the 3 variables above
    return choices[randomIndex]; // Returning the random choice
  }
  
  function determineWinner(playerChoice, computerChoice) { // Function determining winner of game
    if (playerChoice === computerChoice) { 
      return "It's a tie!"; // If statement saying if players pick same thing its a tie
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) { 
      return "You win!";
    } else {
      return "Computer wins!";
    }
  } // Else if statement saying, based on choice selected by player and computer, if either one wins or not
  
  var wins = 0;
  var losses = 0;
  var ties = 0;
  // I am not too sure how to do wins and losses and ties, but I am trying to figure it out.
  
  if (result === "You win!") {
    
  }
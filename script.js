
// store user choice into variable
var userChoice = "";

//get user choice and store into variable
userChoice = prompt(`Rock, Paper, Scissors?`);
if (userChoice != "rock" && "paper" && "scissors") {
	userChoice = "";
	alert("try again buster")
	userChoice = prompt(`Rock, Paper, Scissors?`);
}

// array with choices for computer
var compChoice = ["rock", "paper", "scissors"];

// randomize computer choice
compChoice = compChoice[Math.floor(Math.random() * compChoice.length)]

// repeat function after game
document.getElementById("#button").addEventListener("click", function() {
	userChoice = "";
	userChoice = prompt(`Rock, Paper, Scissors?`);
	compChoice = ["rock", "paper", "scissors"];
	compChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
	compare(userChoice,compChoice);
})

userScore = 0;
compScore = 0;

var compare = function(x,y) {
		if (userChoice === "rock" && compChoice === "paper") {
		compScore = compScore + 1;
		$('.outcome').html("YOU LOSE")
		console.log("YOU LOSE")
		} else if (userChoice === "rock" && compChoice === "scissors" ) {
			userScore = userScore + 1;
			$('.outcome').html("YOU WIN")
			console.log("YOU WIN")
		} else if (userChoice === "rock" && "rock"){
			$('.outcome').html("TIE")
			console.log("tie")
		} else if (userChoice === "paper" && compChoice === "rock") {
			userScore = userScore + 1;
			$('.outcome').html("YOU WIN")
			console.log("YOU WIN")
		} else if (userChoice === "paper" && compChoice === "scissors") {
			compScore = compScore + 1;
			$('.outcome').html("YOU LOSE")
			console.log("YOU LOSE")
		} else if (userChoice === "paper" && compChoice === "paper"){
			$('.outcome').html("TIE")
			console.log("tie")
		} else if (userChoice === "scissors" && compChoice === "rock") {
			compScore = compScore + 1;
			$('.outcome').html("YOU LOSE")
			console.log("YOU LOSE");
		} else if (userChoice === "scissors" && compChoice === "paper") {
			userScore = userScore + 1;
			$('.outcome').html("YOU WIN")
			console.log("YOU WIN")
		} else 	{
			$('.outcome').html("TIE")
			console.log("tie")
	}
	
	// show scoreboard
	$(".userScore").html(userScore);
	$(".compScore").html(compScore);
}
compare(userChoice,compChoice);

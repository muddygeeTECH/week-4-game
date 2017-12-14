
$(document).ready(function() {

	
	var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
	var wins = 0;
	var losses = 0;
	
	var randomComputerNumber;
	var userTallyScore;

	

	function initializeVariables() {
		randomComputerNumber = 19 + Math.floor(Math.random() * 102);
		gemOneValue = 1 + Math.floor(Math.random() * 12);
		gemTwoValue = 1 + Math.floor(Math.random() * 12);
		gemThreeValue = 1 + Math.floor(Math.random() * 12);
		gemFourValue = 1 + Math.floor(Math.random() * 12);
		userTallyScore = 0;
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomComputerNumber);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
	}

	
	function hasUserWonOrLost() {
		if (userTallyScore > randomComputerNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		if (userTallyScore == randomComputerNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
		console.log("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	

	initializeVariables();

	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        console.log(pressed);
        if (pressed == "gem1") {
        	userTallyScore += gemOneValue;
        } else if (pressed == "gem2") {
        	userTallyScore += gemTwoValue;
        } else if (pressed == "gem3") {
        	userTallyScore += gemThreeValue;
        } else if (pressed == "gem4") {
        	userTallyScore += gemFourValue;
        } else {
        	console.log("error");
        }
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        hasUserWonOrLost();
	});

});
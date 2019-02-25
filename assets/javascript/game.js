//There will be four crystals displayed as buttons on the page.

// random number fxn
function getRandomNumber(min, max) {
    var number = Math.floor((Math.random() * max) + min);
    return number
}

//The player will be shown a random number at the start of the game.
var randomNumber = getRandomNumber(19, 120);
console.log(randomNumber);
$("#random_number").html(randomNumber);

//get crystal random numbers
var pinkCrystalNumber = getRandomNumber(1, 12);
console.log(pinkCrystalNumber);
var blueCrystalNumber = getRandomNumber(1, 12);
console.log(blueCrystalNumber);
var greenCrystalNumber = getRandomNumber(1, 12);
console.log(greenCrystalNumber);
var yellowCrystalNumber = getRandomNumber(1, 12);
console.log(yellowCrystalNumber);

//assign crystal values
$("#pinkcrystal").val(pinkCrystalNumber);
$("#bluecrystal").val(blueCrystalNumber);
$("#greencrystal").val(greenCrystalNumber);
$("#yellowcrystal").val(yellowCrystalNumber);

//if same score, generate new score! 

//tallies
var totalWins = 0;
$("#wins_tally").html(totalWins);
var totalLosses = 0;
$("#losses_tally").html(totalLosses);


var totalScore = 0;
$("#your_score").html(totalScore);


function scoreTotal(value) {
    newTotal = totalScore + value;
    return newTotal;
};

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//Your game will hide this amount until the player clicks a crystal.
$("button").on("click", function () {
    crystalValue = parseInt($(this).val());
    totalScore += crystalValue;

    //When they do click one, update the player's score counter.
    $("#your_score").html(totalScore);


    //Determine if player wins/loses    
    determineWinLose();
});


//The player wins if their total score matches the random number from the beginning of the game.
function determineWinLose() {
    if (totalScore == randomNumber) {
        alert("Congratulations! You win!");
        totalWins++;
        resetGame();
    }

    //The player loses if their score goes above the random number.
    else if (totalScore > randomNumber) {
        alert("Sorry! You lose!");
        totalLosses++;
        resetGame();
    }
}


//The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
function resetGame() {
    randomNumber = getRandomNumber(19, 120);
    $("#random_number").html(randomNumber);

    pinkCrystalNumber = getRandomNumber(1, 12);
    blueCrystalNumber = getRandomNumber(1, 12);
    greenCrystalNumber = getRandomNumber(1, 12);
    yellowCrystalNumber = getRandomNumber(1, 12);

    $("#pinkcrystal").val(pinkCrystalNumber);
    $("#bluecrystal").val(blueCrystalNumber);
    $("#greencrystal").val(greenCrystalNumber);
    $("#yellowcrystal").val(yellowCrystalNumber);

    totalScore = 0;
    $("#your_score").html(totalScore);

    $("#wins_tally").html(totalWins);
    $("#losses_tally").html(totalLosses);
}
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game
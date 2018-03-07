


// generate a random number in [1, 12]
var makeARandomNumber = function(){
    return Math.floor(Math.random() * 12) + 1;
}

// generate a set of 4 random numbers between 1 and 12 
var randoms = [];
for (var i = 0; i < 4; i++) {
    randoms.push(makeARandomNumber())
}
console.log(randoms)

//assign data-value to each image with random numbers between 1 and 12
var gemIds = ["#gemBlue", "#gemMulti", "#gemRed", "#gemPurple"];
for (var i = 0; i < randoms.length; i++) {
    var gem = $(gemIds[i]);
    gem.attr("value", randoms[i]);
    console.log(gem);
}

//generate a random number between 19 and 120
var targetNumber = Math.floor(Math.random()*102)+19;
$("#number-to-guess").text(targetNumber);

//make win, loss and game reset
var counter = 0;
var wins = 0;
var losses = 0;
$("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = parseInt($(this).attr("value"))
    counter += crystalValue;
    $("#yourCounter").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        alert("You win!");
        document.getElementById("winCount").innerHTML = wins;            
    }
    else if (counter > targetNumber) {
        losses += 1;
        alert("You lose!!");
        document.getElementById("lossCount").innerHTML = losses;
    }
});


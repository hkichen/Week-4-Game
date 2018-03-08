//write a general function to get a random number in a certain range of upper and lower
function randomInRange(lower, upper) {
    return Math.floor(Math.random()*(upper - lower + 1))+ lower;
}

//use a Fisher-Yates shuffle to make sure no two numbers chosen will be the same
function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//old code in case top doesn't work
// generate a random number in [1, 12]
//var makeARandomNumber = function(){
//    return Math.floor(Math.random() * 12) + 1;
//}

// generate a set of 4 random numbers between 1 and 12 
//var randoms = [];
//for (var i = 0; i < 4; i++) {
//    randoms.push(makeARandomNumber())
//}
//console.log(randoms)

//use the shuffle to mix your values for the four gems, for-loop will only pull the first 4 numbers in the randoms array (each should be unique due to the shuffle)
function randommizeGems (){
    var randoms = shuffle([1,2,3,4,5,6,7,8,9,10,11,12]);
    var gemIds = ["#gemBlue", "#gemMulti", "#gemRed", "#gemPurple"];
    for (var i = 0; i < gemIds.length; i++){
        $(gemIds[i]).attr("value", randoms[i]);
    }
}
//more old code//
//assign data-value to each image with random numbers between 1 and 12
//var gemIds = ["#gemBlue", "#gemMulti", "#gemRed", "#gemPurple"];
//for (var i = 0; i < randoms.length; i++) {
//    var gem = $(gemIds[i]);
//    gem.attr("value", randoms[i]);
//    console.log(gem);
//}

//generate a random number between 19 and 120
//var targetNumber = Math.floor(Math.random()*102)+19;
//$("#number-to-guess").text(targetNumber);

//make win, loss and game reset
var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber = randomInRange(19, 120);
//here we define the upper and lower ranges of the targetNumber

//update innerHTMLntext
function updateDisplays (){
    $("#yourCounter").text(counter);
    $("#number-to-guess").text(targetNumber);
    $("#lossCount").text(losses);
    $("#winCount").text(wins);
}

randommizeGems();
updateDisplays();

//reset game function
function reset() {
    counter = 0;
    targetNumber = randomInRange(19, 120);
    randommizeGems();
}

$("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = parseInt($(this).attr("value"))
    counter += crystalValue;
    $("#yourCounter").text(counter);
    if (counter === targetNumber) {
        wins += 1;
        alert("You win!");
        //document.getElementById("winCount").innerHTML = wins;    
        reset();       
    }
    else if (counter > targetNumber) {
        losses += 1;
        alert("You lose!!");
        //document.getElementById("lossCount").innerHTML = losses;
        reset();
    }
    updateDisplays();
});


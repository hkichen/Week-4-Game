var wins = 0;
var losses = 0;

//generate a random number between 19 and 120
     var targetNumber = Math.floor(Math.random()*101)+19;
    $("#number-to-guess").text(targetNumber);
    var crystals = $("#crystals");
    var counter = 0;
    
    // generate a set of 4 random numbers between 1 and 12 
    var makeARandomNumber = function(){
        return Math.floor(Math.random() * 12) + 1;
    }
    
    var randoms = Array(4).fill(0).map(makeARandomNumber);
        console.log(randoms)
        
    //assign data-value to each image with random numbers between 1 and 12
    for (var i = 0; i < randoms.length; i++) {
        var imageCrystal = $(".crystal-image");
        imageCrystal.attr("data-crystalvalue", randoms[i]);
    }

//make win, loss and game reset        
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#yourCounter").text(counter);
        if (counter === targetNumber) {
            wins += 1;
            alert("You win!");
            document.getElementById("winCount").innerHTML = wins;            
        }
        else if (counter >= targetNumber) {
            losses += 1;
            alert("You lose!!");
            document.getElementById("lossCount").innerHTML = losses;
        }
    });
        

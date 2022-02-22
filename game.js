// game pattern
var gamePattern = [];

// user pattern
var userClickedPattern = [];

//colors of buttons
var buttonColours = ["red", "blue", "green", "yellow"];


//level
level = 0;

function nextSequence() {

  //generate a new random number between 0 and 3, and store it in a variable called
  var randomNumber = Math.floor(Math.random() * 4);

  // convert number to color
  randomChosenColour = numberToColor(randomNumber);


  //play sound
  playSound(randomChosenColour);




  //play animtion
  addAnimation(randomChosenColour);


  //add to the game gamePattern
  addToGamepattern(randomChosenColour);
  console.log("came here")

  // incerement level
  $("h1").text("Level " + level);
  level++;


  //set userClickedPattern to zero
  userClickedPattern = [];



  return randomNumber;


}



//convert number to button
function numberToColor(number) {
  var randomChosenColour = buttonColours[number];
  return randomChosenColour;
}

//add to game pattern function
function addToGamepattern(color) {
  gamePattern.push(color);
}



// add animation
function addAnimation(color) {
  $("." + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}





//play sound function
function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}



//detect click
$(".btn").on("click", checkUserinput);

function checkUserinput() {
  // if level is not zero
  if (level != 0) {


    // get id(color) of pressed button
    var userChosenColour = this.id;

    //add color to pattern
    userClickedPattern.push(userChosenColour);



    //play sound of chosen color
    playSound(userChosenColour);


    //play animtion for chosen color
    addAnimation(userChosenColour);


    // go to the next level if gamePattern = userpatern
    console.log("userClickedPattern place 4 length :" + userClickedPattern.length)
    console.log("gamePattern place 4 length:" + gamePattern.length)



    for (var i = 0; i < userClickedPattern.length; i++) {
      if (userClickedPattern[i] == gamePattern[i]) {
        if (userClickedPattern[userClickedPattern.length] == gamePattern[userClickedPattern.length]) {
          setTimeout(nextSequence, 2000);
          setTimeout(userClickedPattern = [], 2000);
        }
      } else {
        gameOver();
      }



    }
  }

};







// detect first  key press
$("body").keypress(function(e) {
  if (level == 0) {
    nextSequence();
  }

});



// check user answers



//game over
function gameOver() {
  $("h1").text("game over ");
  setTimeout(function() {
    $("h1").text("Press A Key to Start");
  }, 2000);
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
}

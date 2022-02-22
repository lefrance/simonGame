for (var i = 0; i < userClickedPattern.length; i++) {
  if (userClickedPattern[i] == gamePattern[i]){
    if (userClickedPattern[lastVar] == gamePattern[lastvar]){
      nextSequence();
    }
  }else{
       gameOver();
  }

//Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

function rps (p1, p2){
    if(p1 == p2){
      return 'Draw!'
    }else if(p1 == 'scissors' && p2 == 'paper'){
      return 'Player 1 won!'
    }else if(p1 == 'scissors' && p2 == 'rock'){
      return 'Player 2 won!'
    }else if(p1 == 'paper' && p2== 'scissors'){
      return 'Player 2 won!'
    }else if(p1 == 'paper' && p2 == 'rock'){
      return 'Player 1 won!'
    }else if(p1 == 'rock' && p2 == 'scissors'){
      return 'Player 1 won!'
    }else if(p1 == 'rock' && p2 == 'paper'){
      return 'Player 2 won!'
    }
  };
  
  
  rps('rock', 'scissors') // should return 1
  rps('scissors', 'paper') // returns 1
  rps('rock', 'rock') //draw!
  rps('scissors', 'rock') //2
  
  
  //P - parameter is two strings 
  //R -  return which player wins as a number
  //E - if p1 is rock and p2 is scissors, return 1
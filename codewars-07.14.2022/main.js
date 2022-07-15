//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    return ((roll*2)+position)
  }
  
  move(3, 6)
  move(0, 4)
  move(2, 5)
  
  //P - Parameter is two numbers
  //R - Return a number
  //E - if the given number are (3,6), multiple 6 by 2 and add to 3 equalling 15
  //P - roll times 2 plus position = new position
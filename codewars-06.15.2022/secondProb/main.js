// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    return 180 - (a + b)
  }
  
  otherAngle(30, 60) // should return 90
  
  
  //P - parameters will be two positive whole numbers
  //R - return a number
  //E - if nums are (30, 60), return 90
  //P - the total will always equal 180, so subtract a and b from 180
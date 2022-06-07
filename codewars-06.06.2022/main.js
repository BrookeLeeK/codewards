//This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    if(base%factor == 0){
      return true
    }else{
      return false
    }
  }
  
  checkForFactor(6, 2) // should return true
  checkForFactor(12, 5)  //should return false
  
  
  //P - parameters are two numbers, a base and a factor
  //R - return true or false
  //E - if base is 6, and factor is 2, return true since 2 is a factor of 6
  //P - take the base and see if it is divisible by factor
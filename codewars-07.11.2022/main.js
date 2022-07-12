// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).



function cockroachSpeed(s) {
    return Math.floor(s*27.777778)
  }
  
  cockroachSpeed(1.08)
  cockroachSpeed(0)
  
  //P - parameter is a number
  //R - return a number
  //E - If the mk per hour is 1.08 return 30 cm per second
  //P - the equation is centimeters per second = kilometers per hour × 27.777778
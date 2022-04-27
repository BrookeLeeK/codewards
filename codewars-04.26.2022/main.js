// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let milesLeft = fuelLeft * mpg;
    if(distanceToPump <= milesLeft){
      return true
    }else{
      return false
    }
  };



//   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    let total = []
    if(number < 0 || number == null){
      return 0
    }else{
    for(let i=0; i<number; i++){
      if(i%3 == 0 || i%5==0){
        total.push(i)
      }
        }
    }
    return total.reduce((acc, c) => acc += c,0)
  }
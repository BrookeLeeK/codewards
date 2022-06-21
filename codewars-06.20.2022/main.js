//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


function persistence(num) {
    let final = []
    if(num.toString().split('').length <= 1){
      return 0
    }else{
      return breakdown(num)
    }
    function breakdown(num){
          final.push(1)
        let digit = num.toString().split('').reduce((a, c) => a*c)
        if(digit.toString().split('').length <= 1){
          return final.length
        }else{
          return breakdown(digit)
        }
      }
  } 
  
  persistence(39) //should return 3
  persistence(4) //0
  persistence(999) //4
  
  
  //P - Paraemter is a number
  //R - return a single digit number, aka how many time you mus multiple the digits in num until you reach 1 digit
  //E - if num is 39, return 3 becasue (3*9 = 27, 2*7 = 14, 1*4 = 4) so it took three times multiplying to get that single digit number
  //P - Have a condition that tells if a number is a single digit or not, if not send to a new function. create a function that will split two numbers and multiply them together, returning the answer, and pushing a number into an array every time its called.
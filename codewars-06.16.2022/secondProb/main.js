//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.



function sumDigits(number) {
    const arr = Math.abs(number).toString().split('')
    const nums = arr.map(x => Number(x))
    return nums.reduce((a, c) => a+c)
  }
  
  
  sumDigits(-666) // 18
  
  
  //P - Parameter is a number, positive or negative
  //R - Return a positive number
  //E - if the number given is 99, add together 9 and 9 to make 18
  //P - first make a string, then split into an array. Make each number a positive, then add them together
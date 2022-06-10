//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    let arr = x.map(x => {
      return Number(x)
    })
    return arr.reduce((a, c) => a+c)
    }
    
    sumMix([9, 3, '7', '3']) //should return 22
    
    
    //P - parameter is either a number or a string of a number
    //R - return a number
    //E - [9, 3, '7, '3] should return 22
    //P - go through each element and convert it to an array, creating a new array of all numbers. add all the numbers in the array 
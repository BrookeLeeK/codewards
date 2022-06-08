// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let arr = []
    for(let i = a; i<=b; i++){
      arr.push(i)
    }
    return arr
  }
  
  between(4, 9) // should return [ 4, 5, 6, 7, 8, 9 ]
  
  
  //P - Parameters are two numbers, a will always be less than b
  //R - return an array
  //E - if a = 1 and b = 4, return [1, 2, 3, 4]
  //P - make a for loop with the numbers, a is always less than b
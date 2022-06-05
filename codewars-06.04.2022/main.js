//We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:



function arr(N){
    let array = []
    for(let i = 0; i < N; i++){
      array.push(i)
    }
    return array 
  }
  
  arr(5) // should return [0, 1, 2, 3, 4]
  
  
  //P - Parameter is a number
  //R - Return an array
  //E - example, if N is 4, return an array of 0-3
  //P - create an empty array, make a for loop take pushes i from 0 to the given number N into the array, return the array 
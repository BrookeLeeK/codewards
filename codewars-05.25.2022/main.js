//Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
    let arr = [];
    let num = 1
    for(let i = 0; i<n; i++){
      arr.push(x * num);
      num ++
    }
    return arr
  }
  
  //make an array of the first n multiples of x
  
  countBy(2, 5) // should return [ 2, 4, 6, 8, 10 ]
  
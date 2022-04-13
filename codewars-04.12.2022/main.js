// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


function greet(name){
    return `Hello, ${name} how are you doing today?`
  }


//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    let str = n.toString() //first turn the number to a string
    let arr = str.split('')  //then split into an array
    let sorted = arr.sort( (a, b) => b-a)  //then sort array from highest to lowest
    let final = sorted.join('') //then join the array back together
    return Number(final)  //return as a number instead of string
  }
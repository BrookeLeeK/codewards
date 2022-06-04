//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum( a,b ){
    let result = 0;
    let bigger = a > b ? a : b;
    let smaller = a > b ? b : a;
    for(let i = smaller; i <= bigger; i++){ result += i}
    return result
  } 
  getSum(4, 2) // should return 9
  getSum(1, 2) //should return 3
  getSum(-1, -3) // should return 1
  
  
  //P - two numbers
  //R - return a number
  //E - (1, 4) 1+2+3+4 = 10
  //P - take the two numbers and sort them. Put them each in a variable. make a for loop from the cmallest to the shortest and put it in an array, reduce the whole array and return the number
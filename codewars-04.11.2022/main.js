// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3




function stray(numbers) {
    let sortedNums = numbers.sort( (a, b) => a-b); //sorted all of the number so the different number is either at the end or beginning
    const lastItem = sortedNums.pop() //define last element of the array
    if(sortedNums[0] !== sortedNums[1]){   //if the first is not equal to the second then the different number is the first element so return first element
      return sortedNums[0]
    }else{                        //if not the first option, then the different number is the last element and return that number
      return (lastItem)
    }  
  }
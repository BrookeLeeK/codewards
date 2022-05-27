//Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

function sequenceSum(begin, end, step) {
    let arr = []
    if(begin > end){
      return 0
    }else{
    for(let i = begin; i <=end; i+=step){
      arr.push(i)
    }
    return arr.reduce((a, c) => a+c)
    }
  };
  
  sequenceSum(2, 6, 2) //should return 12
  sequenceSum(4, 1, 2) //should return 0
  
  
  //with the begin number, create an array of numbers moving up to the end number by step, then add that array. move up by "step" number from "begin" to "end"
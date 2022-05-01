//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let sorted = arr.sort((a, b) => a-b)
    if(sorted[0] == sorted[1]){
      return sorted[sorted.length-1]
    }else{
      return sorted[0]
    }
  }
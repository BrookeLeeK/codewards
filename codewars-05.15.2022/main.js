//Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(' ')
    let count = arr.map(x => x.length).sort((a, b) => a-b)
    return count[0]
  }
  
  
  //find out how long each word in the array is, and then return the length of the shortest one
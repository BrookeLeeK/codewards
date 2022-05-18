//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let nums = []
       l.forEach(x => {
     if(typeof x == 'number'){
       nums.push(x)
     }
    })
    return nums
  }
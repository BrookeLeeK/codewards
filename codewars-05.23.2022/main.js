//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let arr = []
      for(let i = 1; i<=n; i++){
      arr.push(i)
    }
    return arr
  }
  
  //return an array of numbers starting from 1 up to the given number of monkeys
  monkeyCount(5) // should return [1, 2, 3, 4, 5]